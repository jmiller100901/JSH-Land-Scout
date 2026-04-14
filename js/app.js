// JSH Land Scout — Main Application
(function () {
    'use strict';

    // ===== State =====
    let map = null;
    let currentMarket = null;
    let submarketLayer = null;
    let sitesLayer = null;
    let airportLayer = null;
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

    // ===== Init: Market Selector =====
    function initMarketSelector() {
        // Populate counts
        for (const [key, mkt] of Object.entries(MARKETS)) {
            const sm = submarketDataMap[key];
            const smCount = sm ? sm.features.length : 0;
            const siteCount = LAND_SITES.filter(s => s.market === key).length;
            const smEl = document.getElementById(`${key}-submarkets-count`);
            const siEl = document.getElementById(`${key}-sites-count`);
            if (smEl) smEl.textContent = `${smCount} submarkets`;
            if (siEl) siEl.textContent = `${siteCount} sites`;
        }

        // Click handlers
        document.querySelectorAll('.market-card').forEach(card => {
            card.addEventListener('click', () => {
                const marketKey = card.dataset.market;
                openMarket(marketKey);
            });
        });
    }

    // ===== Open Market =====
    function openMarket(marketKey) {
        currentMarket = marketKey;
        const mkt = MARKETS[marketKey];

        // Switch screens
        document.getElementById('market-selector').classList.remove('active');
        document.getElementById('map-view').classList.add('active');
        document.getElementById('market-title').textContent = mkt.name;

        // Init map if first time
        if (!map) {
            map = L.map('map', {
                zoomControl: true,
                attributionControl: true
            });
            // Default to street
            tileLayers.street.addTo(map);
            activeBaseLayer = 'street';
        }

        // Set view
        map.setView(mkt.center, mkt.zoom);

        // Load layers
        loadSubmarkets(marketKey);
        loadSites(marketKey);
        loadAirports(marketKey);

        // Apply toggle state
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

            // Remove current
            if (tileLayers[activeBaseLayer]) map.removeLayer(tileLayers[activeBaseLayer]);

            // Add new
            tileLayers[layer].addTo(map);
            activeBaseLayer = layer;

            // Update button state
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
        if (sitesLayer) {
            showSites ? map.addLayer(sitesLayer) : map.removeLayer(sitesLayer);
        }
        if (airportLayer) {
            showAirports ? map.addLayer(airportLayer) : map.removeLayer(airportLayer);
        }
    }

    // ===== Load Submarkets =====
    function loadSubmarkets(marketKey) {
        if (submarketLayer) map.removeLayer(submarketLayer);

        const data = submarketDataMap[marketKey];
        if (!data) return;

        submarketLayer = L.geoJSON(data, {
            style: feature => ({
                color: feature.properties.color || '#3b82f6',
                weight: 2,
                opacity: 0.8,
                fillColor: feature.properties.color || '#3b82f6',
                fillOpacity: 0.15
            }),
            onEachFeature: (feature, layer) => {
                // Label
                const center = layer.getBounds().getCenter();
                const label = L.marker(center, {
                    icon: L.divIcon({
                        className: 'submarket-label',
                        html: `<div style="
                            color: #e2e8f0;
                            font-size: 11px;
                            font-weight: 500;
                            text-shadow: 0 1px 3px rgba(0,0,0,0.8);
                            white-space: nowrap;
                            pointer-events: none;
                        ">${feature.properties.name}</div>`,
                        iconSize: [0, 0],
                        iconAnchor: [0, 0]
                    }),
                    interactive: false
                });
                // Add label to submarket layer group
                if (!submarketLayer._labels) submarketLayer._labels = [];
                submarketLayer._labels.push(label);

                layer.on('click', () => openSubmarketPanel(feature.properties));
                layer.on('mouseover', () => layer.setStyle({ fillOpacity: 0.30, weight: 3 }));
                layer.on('mouseout', () => layer.setStyle({ fillOpacity: 0.15, weight: 2 }));
            }
        });

        submarketLayer.addTo(map);

        // Add labels after layer is added
        if (submarketLayer._labels) {
            submarketLayer._labels.forEach(l => l.addTo(map));
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
            const size = 14 + Math.round((score / 100) * 10); // 14-24px

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

            marker.bindTooltip(`${site.name} — Score: ${score}`, {
                direction: 'top',
                className: 'site-tooltip'
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
                    html: `<div style="
                        font-size: 20px;
                        text-shadow: 0 1px 4px rgba(0,0,0,0.6);
                    ">✈</div>`,
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                })
            });
            marker.bindTooltip(`${ap.name} (${ap.code})`, { direction: 'top' });
            marker.addTo(airportLayer);
        });

        // Only show if toggle is checked
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
        let html = '';

        if (stats) {
            html += '<div class="stats-grid">';
            html += statCard('Inventory', `${stats.inventory}M SF`, null);
            html += statCard('Vacancy', `${stats.vacancy}%`, stats.vacancyDelta, true);
            html += statCard('Net Absorption', formatSF(stats.absorption), null);
            html += statCard('Avg Rent (NNN)', `$${stats.avgRent.toFixed(2)}/SF`, stats.rentDelta);
            html += statCard('Under Construction', formatSF(stats.newSupply), null);
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
                    </div>
                    <div class="site-list-meta">${site.acreage} ac · ${site.zoning} · Score: ${score}</div>
                </div>`;
            });
        }

        document.getElementById('submarket-stats').innerHTML = html;

        // Wire site list clicks
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
            deltaHtml = `<div class="delta ${cls}">${arrow} ${Math.abs(delta).toFixed(1)}${typeof delta === 'number' && label.includes('Rent') ? '%' : delta > 1 || delta < -1 ? ' pp' : ' pp'}</div>`;
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

    // ===== Site Panel =====
    function openSitePanel(site) {
        closePanels();
        const panel = document.getElementById('site-panel');
        document.getElementById('site-name').textContent = site.name;

        const score = computeSiteScore(site.criteria);
        const color = scoreToColor(score);
        const mkt = MARKETS[site.market];

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

        // Property info
        html += '<h4 class="panel-section-title">Property Info</h4>';
        html += '<div class="site-info-grid">';
        html += infoItem('Acreage', `${site.acreage} ac`);
        html += infoItem('Zoning', site.zoning);
        html += infoItem('Tax Rate', `${site.taxRate}%`);
        html += infoItem('Tax Authority', site.taxAuthority);
        html += infoItem('For Sale', site.forSale ? '✓ Listed' : 'Not Listed', true);

        // Utilities
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
        html += '</div>';

        document.getElementById('site-details').innerHTML = html;
        panel.classList.add('open');

        // Pan map to site
        map.setView(site.coords, 14);
    }

    function infoItem(label, value, fullWidth) {
        return `<div class="site-info-item${fullWidth ? ' full-width' : ''}">
            <div class="label">${label}</div>
            <div class="value">${value}</div>
        </div>`;
    }

    // ===== Close Panels =====
    function closePanels() {
        document.querySelectorAll('.side-panel').forEach(p => p.classList.remove('open'));
    }

    document.getElementById('panel-close').addEventListener('click', closePanels);
    document.getElementById('site-panel-close').addEventListener('click', closePanels);

    // ===== Init =====
    initMarketSelector();

})();
