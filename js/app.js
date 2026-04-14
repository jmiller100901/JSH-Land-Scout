// JSH Land Scout — Main Application
(function () {
    'use strict';

    // ===== State =====
    let map = null;
    let currentMarket = null;
    let submarketLayer = null;
    let submarketLabels = [];
    let sitesLayer = null;
    let airportLayer = null;
    let cityLabelsLayer = null;
    let parcelLayer = null;
    let activeBaseLayer = null;

    // ===== Tile Layers =====
    const tileLayers = {
        street: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }),
        satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; Esri, Maxar, Earthstar Geographics',
            maxZoom: 19
        }),
        topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenTopoMap',
            maxZoom: 17
        })
    };

    // ===== Submarket Data Map =====
    const submarketDataMap = {
        dfw: SUBMARKETS_DFW,
        austin: SUBMARKETS_AUSTIN,
        'san-antonio': SUBMARKETS_SAN_ANTONIO,
        houston: SUBMARKETS_HOUSTON,
        charlotte: SUBMARKETS_CHARLOTTE
    };

    // ===== Submarket Health Score =====
    // Combines vacancy (lower = better) and absorption (higher = better)
    // Returns 0-100 where 100 = strongest submarket
    function computeSubmarketHealth(stats) {
        if (!stats) return 50;
        // Vacancy score: 0% = 100, 5% = 75, 10% = 50, 15% = 25, 20% = 0
        const vacScore = Math.max(0, Math.min(100, 100 - (stats.vacancy * 5)));
        // Vacancy trend: improving = bonus, worsening = penalty
        const vacTrend = Math.max(-20, Math.min(20, -stats.vacancyDelta * 5));
        // Absorption score: normalize by inventory
        const absRatio = stats.inventory > 0 ? (stats.absorption / (stats.inventory * 1000000)) * 100 : 0;
        const absScore = Math.max(0, Math.min(100, absRatio * 20));
        // Rent trend bonus
        const rentTrend = Math.max(-10, Math.min(10, stats.rentDelta * 3));
        return Math.round(Math.max(0, Math.min(100, (vacScore * 0.4) + (absScore * 0.35) + (vacTrend + 50) * 0.15 + (rentTrend + 50) * 0.1)));
    }

    function healthToColor(health) {
        if (health >= 65) {
            const t = (health - 65) / 35;
            return lerpColor('#eab308', '#22c55e', t);
        } else if (health >= 35) {
            const t = (health - 35) / 30;
            return lerpColor('#ef4444', '#eab308', t);
        }
        return '#ef4444';
    }

    // ===== Init: Market Selector =====
    function initMarketSelector() {
        for (const [key, mkt] of Object.entries(MARKETS)) {
            const sm = submarketDataMap[key];
            const smCount = sm ? sm.features.length : 0;
            const siteCount = LAND_SITES.filter(s => s.market === key).length;
            const smEl = document.getElementById(`${key}-submarkets-count`);
            const siEl = document.getElementById(`${key}-sites-count`);
            if (smEl) smEl.textContent = `${smCount} submarkets`;
            if (siEl) siEl.textContent = `${siteCount} sites`;
        }

        document.querySelectorAll('.market-card').forEach(card => {
            card.addEventListener('click', () => openMarket(card.dataset.market));
        });
    }

    // ===== Open Market =====
    function openMarket(marketKey) {
        currentMarket = marketKey;
        const mkt = MARKETS[marketKey];

        document.getElementById('market-selector').classList.remove('active');
        document.getElementById('map-view').classList.add('active');
        document.getElementById('market-title').textContent = mkt.name;

        if (!map) {
            map = L.map('map', {
                zoomControl: true,
                attributionControl: true
            });
            tileLayers.street.addTo(map);
            activeBaseLayer = 'street';
        }

        map.setView(mkt.center, mkt.zoom);
        loadSubmarkets(marketKey);
        loadSites(marketKey);
        loadAirports(marketKey);
        loadCityLabels(marketKey);
        applyToggles();
    }

    // ===== Back to Markets =====
    document.getElementById('btn-back').addEventListener('click', () => {
        document.getElementById('map-view').classList.remove('active');
        document.getElementById('market-selector').classList.add('active');
        closePanels();
    });

    // ===== Layer Switching =====
    document.querySelectorAll('.layer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const layer = btn.dataset.layer;
            if (layer === activeBaseLayer) return;
            if (tileLayers[activeBaseLayer]) map.removeLayer(tileLayers[activeBaseLayer]);
            tileLayers[layer].addTo(map);
            activeBaseLayer = layer;
            document.querySelectorAll('.layer-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // ===== Toggle Overlays =====
    document.getElementById('toggle-submarkets').addEventListener('change', applyToggles);
    document.getElementById('toggle-sites').addEventListener('change', applyToggles);
    document.getElementById('toggle-highways').addEventListener('change', applyToggles);
    document.getElementById('toggle-airports').addEventListener('change', applyToggles);

    function applyToggles() {
        const showSM = document.getElementById('toggle-submarkets').checked;
        const showSites = document.getElementById('toggle-sites').checked;
        const showAirports = document.getElementById('toggle-airports').checked;

        if (submarketLayer) {
            showSM ? map.addLayer(submarketLayer) : map.removeLayer(submarketLayer);
        }
        // Show/hide submarket labels with the submarket toggle
        submarketLabels.forEach(l => {
            showSM ? l.addTo(map) : map.removeLayer(l);
        });
        if (sitesLayer) {
            showSites ? map.addLayer(sitesLayer) : map.removeLayer(sitesLayer);
        }
        if (airportLayer) {
            showAirports ? map.addLayer(airportLayer) : map.removeLayer(airportLayer);
        }
    }

    // ===== Load City Labels =====
    function loadCityLabels(marketKey) {
        if (cityLabelsLayer) map.removeLayer(cityLabelsLayer);
        cityLabelsLayer = L.layerGroup();

        const cities = CITY_LABELS[marketKey];
        if (!cities) return;

        cities.forEach(city => {
            const fontSize = city.size === 'large' ? 15 : city.size === 'medium' ? 12 : 10;
            const fontWeight = city.size === 'large' ? 700 : city.size === 'medium' ? 500 : 400;
            const opacity = city.size === 'large' ? 1 : city.size === 'medium' ? 0.85 : 0.7;

            const marker = L.marker(city.coords, {
                icon: L.divIcon({
                    className: 'city-label',
                    html: `<span style="font-size:${fontSize}px;font-weight:${fontWeight};opacity:${opacity};">${city.name}</span>`,
                    iconSize: [0, 0],
                    iconAnchor: [0, 0]
                }),
                interactive: false,
                zIndexOffset: -1000
            });
            marker.addTo(cityLabelsLayer);
        });

        cityLabelsLayer.addTo(map);
    }

    // ===== Load Submarkets (color-coded by health) =====
    function loadSubmarkets(marketKey) {
        if (submarketLayer) map.removeLayer(submarketLayer);
        submarketLabels.forEach(l => map.removeLayer(l));
        submarketLabels = [];

        const data = submarketDataMap[marketKey];
        if (!data) return;

        submarketLayer = L.geoJSON(data, {
            style: feature => {
                const stats = INDUSTRIAL_STATS[feature.properties.id];
                const health = computeSubmarketHealth(stats);
                const color = healthToColor(health);
                return {
                    color: color,
                    weight: 2.5,
                    opacity: 0.9,
                    fillColor: color,
                    fillOpacity: 0.20,
                    dashArray: null
                };
            },
            onEachFeature: (feature, layer) => {
                const props = feature.properties;
                const stats = INDUSTRIAL_STATS[props.id];
                const health = computeSubmarketHealth(stats);

                // Submarket name label
                const center = layer.getBounds().getCenter();
                const label = L.marker(center, {
                    icon: L.divIcon({
                        className: 'submarket-label',
                        html: `<div style="
                            color: #e2e8f0;
                            font-size: 11px;
                            font-weight: 600;
                            text-shadow: 0 1px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7);
                            white-space: nowrap;
                            pointer-events: none;
                        ">${props.name}</div>`,
                        iconSize: [0, 0],
                        iconAnchor: [0, 0]
                    }),
                    interactive: false,
                    zIndexOffset: -500
                });
                submarketLabels.push(label);

                // Hover tooltip with stats
                let tooltipHtml = `<div class="tt-name">${props.name}</div>`;
                if (stats) {
                    tooltipHtml += `<div class="tt-grid">
                        <div><span class="tt-label">Vacancy</span><div class="tt-val">${stats.vacancy}%</div></div>
                        <div><span class="tt-label">YoY Δ</span><div class="tt-val" style="color:${stats.vacancyDelta > 0 ? '#ef4444' : '#22c55e'}">${stats.vacancyDelta > 0 ? '+' : ''}${stats.vacancyDelta.toFixed(1)} pp</div></div>
                        <div><span class="tt-label">Absorption</span><div class="tt-val">${formatSF(stats.absorption)}</div></div>
                        <div><span class="tt-label">Avg Rent</span><div class="tt-val">$${stats.avgRent.toFixed(2)}/SF</div></div>
                        <div><span class="tt-label">New Supply</span><div class="tt-val">${formatSF(stats.newSupply)}</div></div>
                        <div><span class="tt-label">Health</span><div class="tt-val" style="color:${healthToColor(health)}">${health}/100</div></div>
                    </div>`;
                } else {
                    tooltipHtml += '<div style="color:#64748b;">No stats available</div>';
                }
                tooltipHtml += '<div class="tt-link">Click for full details →</div>';

                layer.bindTooltip(tooltipHtml, {
                    className: 'submarket-tooltip',
                    sticky: true,
                    direction: 'auto',
                    opacity: 1
                });

                const baseStyle = {
                    fillOpacity: 0.20,
                    weight: 2.5,
                    color: healthToColor(health)
                };

                layer.on('click', () => openSubmarketPanel(props));
                layer.on('mouseover', () => layer.setStyle({ fillOpacity: 0.35, weight: 3.5 }));
                layer.on('mouseout', () => layer.setStyle(baseStyle));
            }
        });

        submarketLayer.addTo(map);
        if (document.getElementById('toggle-submarkets').checked) {
            submarketLabels.forEach(l => l.addTo(map));
        }
    }

    // ===== Load Sites =====
    function loadSites(marketKey) {
        if (sitesLayer) map.removeLayer(sitesLayer);
        sitesLayer = L.layerGroup();

        const marketSites = LAND_SITES.filter(s => s.market === marketKey);
        marketSites.forEach(site => {
            const score = computeSiteScore(site.criteria);
            const color = scoreToColor(score);
            const size = 14 + Math.round((score / 100) * 10);

            const marker = L.marker(site.coords, {
                icon: L.divIcon({
                    className: 'site-marker',
                    html: `<div style="
                        width: ${size}px;
                        height: ${size}px;
                        background: ${color};
                        border-radius: 50%;
                        border: 2px solid rgba(255,255,255,0.8);
                        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                        cursor: pointer;
                    "></div>`,
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size / 2]
                })
            });

            // Richer tooltip
            let ttHtml = `<b>${site.name}</b><br>`;
            ttHtml += `${site.acreage} ac · ${site.zoning}<br>`;
            ttHtml += `Score: <b style="color:${color}">${score}</b>`;
            if (site.forSale) ttHtml += ` · <span style="color:#22c55e">For Sale</span>`;
            if (site.askingPrice) ttHtml += ` · ${site.askingPrice}`;

            marker.bindTooltip(ttHtml, {
                direction: 'top',
                className: 'submarket-tooltip'
            });

            marker.on('click', () => openSitePanel(site));
            marker.addTo(sitesLayer);
        });

        sitesLayer.addTo(map);
    }

    // ===== Load Airports =====
    function loadAirports(marketKey) {
        if (airportLayer) map.removeLayer(airportLayer);
        airportLayer = L.layerGroup();

        const mkt = MARKETS[marketKey];
        if (!mkt || !mkt.airports) return;

        mkt.airports.forEach(ap => {
            const marker = L.marker(ap.coords, {
                icon: L.divIcon({
                    className: 'airport-icon',
                    html: `<div style="font-size:20px;text-shadow:0 1px 4px rgba(0,0,0,0.6);">✈</div>`,
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                })
            });
            marker.bindTooltip(`${ap.name} (${ap.code})`, { direction: 'top' });
            marker.addTo(airportLayer);
        });

        if (document.getElementById('toggle-airports').checked) {
            airportLayer.addTo(map);
        }
    }

    // ===== Submarket Panel =====
    function openSubmarketPanel(props) {
        closePanels();
        const panel = document.getElementById('submarket-panel');
        document.getElementById('submarket-name').textContent = props.name;

        const stats = INDUSTRIAL_STATS[props.id];
        const health = computeSubmarketHealth(stats);
        let html = '';

        if (stats) {
            // Health badge
            html += `<div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
                <div style="width:48px;height:48px;border-radius:50%;background:${healthToColor(health)};display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;color:#fff;">${health}</div>
                <div>
                    <div style="font-weight:600;">Market Health Score</div>
                    <div style="font-size:0.8rem;color:#94a3b8;">Vacancy + Absorption + Rent Trends</div>
                </div>
            </div>`;

            html += '<div class="stats-grid">';
            html += statCard('Inventory', `${stats.inventory}M SF`, null);
            html += statCard('Vacancy', `${stats.vacancy}%`, stats.vacancyDelta, true);
            html += statCard('Net Absorption', formatSF(stats.absorption), null);
            html += statCard('Avg Rent (NNN)', `$${stats.avgRent.toFixed(2)}/SF`, stats.rentDelta);
            html += statCard('Under Construction', formatSF(stats.newSupply), null);
            html += statCard('Rent Trend', `${stats.rentDelta > 0 ? '+' : ''}${stats.rentDelta.toFixed(1)}%`, stats.rentDelta, false);
            html += '</div>';
            html += `<p class="stats-source">${stats.source} — As of ${stats.asOf}</p>`;
        } else {
            html += '<p style="color:#64748b;font-size:0.85rem;">No stats available. Update industrial-stats.js with CBRE/JLL data.</p>';
        }

        // List sites in this submarket
        const subSites = LAND_SITES.filter(s => s.submarket === props.id);
        if (subSites.length > 0) {
            html += `<h4 class="panel-section-title" style="margin-top:1.5rem;">Land Sites (${subSites.length})</h4>`;
            subSites.forEach(site => {
                const score = computeSiteScore(site.criteria);
                const color = scoreToColor(score);
                html += `<div class="site-list-item" data-site-id="${site.id}">
                    <div class="site-list-name">
                        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${color};margin-right:6px;vertical-align:middle;"></span>
                        ${site.name}
                        ${site.forSale ? '<span style="color:#22c55e;font-size:0.7rem;margin-left:6px;">FOR SALE</span>' : ''}
                    </div>
                    <div class="site-list-meta">${site.acreage} ac · ${site.zoning} · Score: ${score}${site.askingPrice ? ' · ' + site.askingPrice : ''}</div>
                </div>`;
            });
        } else {
            html += '<h4 class="panel-section-title" style="margin-top:1.5rem;">Land Sites</h4>';
            html += '<p style="color:#64748b;font-size:0.85rem;">No sites identified in this submarket yet.</p>';
        }

        document.getElementById('submarket-stats').innerHTML = html;

        panel.querySelectorAll('.site-list-item').forEach(el => {
            el.addEventListener('click', () => {
                const site = LAND_SITES.find(s => s.id === el.dataset.siteId);
                if (site) openSitePanel(site);
            });
        });

        panel.classList.add('open');
    }

    function statCard(label, value, delta, invertDelta) {
        let deltaHtml = '';
        if (delta !== null && delta !== undefined) {
            const isPositive = invertDelta ? delta < 0 : delta > 0;
            const cls = isPositive ? 'positive' : 'negative';
            const arrow = delta > 0 ? '▲' : '▼';
            const suffix = label.includes('Rent') || label.includes('Trend') ? '%' : ' pp';
            deltaHtml = `<div class="delta ${cls}">${arrow} ${Math.abs(delta).toFixed(1)}${suffix}</div>`;
        }
        return `<div class="stat-card">
            <div class="label">${label}</div>
            <div class="value">${value}</div>
            ${deltaHtml}
        </div>`;
    }

    function formatSF(sf) {
        if (sf >= 1000000) return (sf / 1000000).toFixed(1) + 'M SF';
        if (sf >= 1000) return (sf / 1000).toFixed(0) + 'K SF';
        return sf + ' SF';
    }

    // ===== Haversine distance (miles) =====
    function haversine(lat1, lng1, lat2, lng2) {
        const R = 3959;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    // ===== Nearest airport distance =====
    function nearestAirportInfo(site) {
        const mkt = MARKETS[site.market];
        if (!mkt || !mkt.airports || !mkt.airports.length) return null;
        let best = null;
        mkt.airports.forEach(ap => {
            const d = haversine(site.coords[0], site.coords[1], ap.coords[0], ap.coords[1]);
            if (!best || d < best.distance) {
                best = { name: ap.name, code: ap.code, distance: d };
            }
        });
        return best;
    }

    // ===== Site Panel =====
    function openSitePanel(site) {
        closePanels();
        const panel = document.getElementById('site-panel');
        document.getElementById('site-name').textContent = site.name;

        const score = computeSiteScore(site.criteria);
        const color = scoreToColor(score);
        const mkt = MARKETS[site.market];
        const nearestAp = nearestAirportInfo(site);

        let html = '';

        // Score bar
        html += `<div class="site-score-bar">
            <div class="score-circle" style="background:${color}">${score}</div>
            <div>
                <div style="font-weight:600;font-size:1rem;">Composite Score</div>
                <div class="score-label">Weighted across 10 criteria</div>
            </div>
        </div>`;

        // Criteria breakdown
        html += '<div class="criteria-list">';
        for (const [key, cfg] of Object.entries(CRITERIA_CONFIG)) {
            const val = site.criteria[key] || 0;
            const cls = criteriaScoreClass(val);
            let dots = '';
            for (let i = 1; i <= 10; i++) {
                dots += `<div class="criteria-dot ${i <= val ? 'filled ' + cls : ''}"></div>`;
            }
            html += `<div class="criteria-row">
                <span class="criteria-name">${cfg.label}</span>
                <div class="criteria-score">${dots}</div>
            </div>`;
        }
        html += '</div>';

        // Distance & Demographics section
        html += '<h4 class="panel-section-title">Location Analytics</h4>';
        html += '<div class="demo-grid">';
        if (site.nearestHighway) {
            html += `<div class="demo-item"><div class="label">Nearest Hwy</div><div class="value" style="font-size:0.85rem;">${site.nearestHighway.name}</div><div class="label">${site.nearestHighway.distance.toFixed(1)} mi</div></div>`;
        }
        if (nearestAp) {
            html += `<div class="demo-item"><div class="label">Nearest Airport</div><div class="value" style="font-size:0.85rem;">${nearestAp.code}</div><div class="label">${nearestAp.distance.toFixed(1)} mi</div></div>`;
        }
        if (site.demographics) {
            const d = site.demographics;
            if (d.pop5mi) html += `<div class="demo-item"><div class="label">Pop (5mi)</div><div class="value">${(d.pop5mi / 1000).toFixed(0)}K</div></div>`;
            if (d.medianIncome) html += `<div class="demo-item"><div class="label">Med Income</div><div class="value">$${(d.medianIncome / 1000).toFixed(0)}K</div></div>`;
            if (d.laborForce5mi) html += `<div class="demo-item"><div class="label">Labor (5mi)</div><div class="value">${(d.laborForce5mi / 1000).toFixed(0)}K</div></div>`;
        }
        html += '</div>';

        // Property info
        html += '<h4 class="panel-section-title">Property Info</h4>';
        html += '<div class="site-info-grid">';
        html += infoItem('Acreage', `${site.acreage} ac`);
        html += infoItem('Zoning', site.zoning);
        html += infoItem('Tax Rate', `${site.taxRate}%`);
        html += infoItem('Tax Authority', site.taxAuthority);
        html += infoItem('Status', site.forSale ? '✓ Listed for Sale' : 'Not Listed');
        if (site.askingPrice) html += infoItem('Asking Price', site.askingPrice);

        const utilStr = Object.entries(site.utilities)
            .map(([k, v]) => `${k.charAt(0).toUpperCase() + k.slice(1)}: ${v ? '✓' : '✗'}`)
            .join(' · ');
        html += `<div class="site-info-item full-width"><div class="label">Utilities</div><div class="value" style="font-size:0.8rem;">${utilStr}</div></div>`;
        html += '</div>';

        // Notes
        if (site.notes) {
            html += `<div style="margin:1rem 0;padding:0.75rem;background:#151b2e;border-radius:6px;font-size:0.85rem;color:#94a3b8;line-height:1.5;">${site.notes}</div>`;
        }

        // Links
        html += '<h4 class="panel-section-title">Resources</h4>';
        html += '<div class="site-links">';
        if (site.listingUrl) {
            html += `<a href="${site.listingUrl}" target="_blank" class="site-link">🔗 View Listing</a>`;
        }
        if (mkt.cadUrl) {
            html += `<a href="${mkt.cadUrl}" target="_blank" class="site-link">🏛 ${mkt.cadName} — Property Search</a>`;
        }
        if (mkt.gisUrl) {
            html += `<a href="${mkt.gisUrl}" target="_blank" class="site-link">🗺 GIS / Parcel Viewer</a>`;
        }
        if (mkt.taxUrl) {
            html += `<a href="${mkt.taxUrl}" target="_blank" class="site-link">💰 Tax Records</a>`;
        }
        html += `<a href="https://www.google.com/maps/@${site.coords[0]},${site.coords[1]},16z" target="_blank" class="site-link">📍 Google Maps</a>`;
        html += `<a href="https://earth.google.com/web/@${site.coords[0]},${site.coords[1]},0a,1000d,35y,0h,0t,0r" target="_blank" class="site-link">🌍 Google Earth</a>`;
        html += `<a href="https://landglide.com/map#/${site.coords[0]}/${site.coords[1]}/17" target="_blank" class="site-link">📐 LandGlide Parcel</a>`;
        html += '</div>';

        document.getElementById('site-details').innerHTML = html;
        panel.classList.add('open');
        map.setView(site.coords, 14);

        // Render parcel boundary if available
        renderParcelBoundary(site);
    }

    function infoItem(label, value, fullWidth) {
        return `<div class="site-info-item${fullWidth ? ' full-width' : ''}">
            <div class="label">${label}</div>
            <div class="value">${value}</div>
        </div>`;
    }

    // ===== Render Parcel Boundary =====
    function renderParcelBoundary(site) {
        if (parcelLayer) map.removeLayer(parcelLayer);
        parcelLayer = null;

        // If site has parcel geometry, render it
        if (site.parcel && site.parcel.geometry) {
            parcelLayer = L.geoJSON(site.parcel.geometry, {
                style: {
                    color: '#f59e0b',
                    weight: 3,
                    opacity: 1,
                    fillColor: '#f59e0b',
                    fillOpacity: 0.08,
                    dashArray: '6, 4'
                }
            });
            parcelLayer.addTo(map);

            // Fit map to parcel bounds
            map.fitBounds(parcelLayer.getBounds(), { padding: [60, 60], maxZoom: 17 });
        }
    }

    // ===== Close Panels =====
    function closePanels() {
        document.querySelectorAll('.side-panel').forEach(p => p.classList.remove('open'));
        if (parcelLayer) { map.removeLayer(parcelLayer); parcelLayer = null; }
    }

    document.getElementById('panel-close').addEventListener('click', closePanels);
    document.getElementById('site-panel-close').addEventListener('click', closePanels);

    // ===== Init =====
    initMarketSelector();

})();
