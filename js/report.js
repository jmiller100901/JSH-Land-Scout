// JSH Land Scout — Report Page
(function () {
    'use strict';

    const marketSelect = document.getElementById('report-market-select');
    const sortSelect = document.getElementById('report-sort');
    const searchInput = document.getElementById('report-search');
    const exportBtn = document.getElementById('report-export-btn');

    function getSubmarketName(id) {
        // Extract readable name from submarket data files if loaded, fallback to id
        return id.replace(/^(dfw|atx|sat|hou|clt)-/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }

    function getMarketName(key) {
        return MARKETS[key] ? MARKETS[key].name : key;
    }

    function render() {
        const marketFilter = marketSelect.value;
        const sortBy = sortSelect.value;
        const search = searchInput.value.toLowerCase().trim();

        // Filter
        let sites = LAND_SITES.filter(s => {
            if (marketFilter !== 'all' && s.market !== marketFilter) return false;
            if (search) {
                const haystack = `${s.name} ${s.zoning} ${s.submarket} ${s.notes || ''} ${s.market} ${(s.parcel && s.parcel.owner) || ''}`.toLowerCase();
                if (!haystack.includes(search)) return false;
            }
            return true;
        });

        // Sort
        sites.sort((a, b) => {
            switch (sortBy) {
                case 'score-desc': return computeSiteScore(b.criteria) - computeSiteScore(a.criteria);
                case 'score-asc': return computeSiteScore(a.criteria) - computeSiteScore(b.criteria);
                case 'acres-desc': return b.acreage - a.acreage;
                case 'acres-asc': return a.acreage - b.acreage;
                case 'vacancy-asc': {
                    const va = INDUSTRIAL_STATS[a.submarket] ? INDUSTRIAL_STATS[a.submarket].vacancy : 99;
                    const vb = INDUSTRIAL_STATS[b.submarket] ? INDUSTRIAL_STATS[b.submarket].vacancy : 99;
                    return va - vb;
                }
                case 'name-asc': return a.name.localeCompare(b.name);
                default: return 0;
            }
        });

        // Summary
        const totalSites = sites.length;
        const totalAcres = sites.reduce((sum, s) => sum + s.acreage, 0);
        const forSale = sites.filter(s => s.forSale).length;
        const gisVerified = sites.filter(s => s.parcel).length;
        const avgScore = sites.length ? Math.round(sites.reduce((sum, s) => sum + computeSiteScore(s.criteria), 0) / sites.length) : 0;

        document.getElementById('report-summary').innerHTML = `
            <div class="summary-stat"><div class="label">Sites</div><div class="value">${totalSites}</div></div>
            <div class="summary-stat"><div class="label">Total Acreage</div><div class="value">${totalAcres.toLocaleString(undefined, {maximumFractionDigits: 0})}</div></div>
            <div class="summary-stat"><div class="label">For Sale</div><div class="value">${forSale}</div></div>
            <div class="summary-stat"><div class="label">GIS Verified</div><div class="value">${gisVerified}</div></div>
            <div class="summary-stat"><div class="label">Avg Score</div><div class="value">${avgScore}</div></div>
            <div class="summary-stat"><div class="label">Markets</div><div class="value">${new Set(sites.map(s => s.market)).size}</div></div>
        `;

        // Table header
        let html = `<div class="report-card-header">
            <div>Score</div>
            <div>Site</div>
            <div>Property</div>
            <div>Submarket</div>
            <div>Owner / Contact</div>
            <div>Location Analytics</div>
            <div>Notes</div>
            <div>Links</div>
        </div>`;

        // Rows
        sites.forEach(site => {
            const score = computeSiteScore(site.criteria);
            const color = scoreToColor(score);
            const stats = INDUSTRIAL_STATS[site.submarket];
            const mkt = MARKETS[site.market];
            const vacClass = stats ? (stats.vacancy < 7 ? 'highlight' : stats.vacancy > 10 ? 'danger' : 'warn') : '';

            // Owner info
            let ownerHtml = '';
            if (site.parcel && site.parcel.owner) {
                ownerHtml = `<div class="owner-name">${site.parcel.owner}</div>`;
                if (site.parcel.cadUrl) {
                    ownerHtml += `<div class="owner-links"><a href="${site.parcel.cadUrl}" target="_blank">CAD Record</a></div>`;
                }
            } else {
                ownerHtml = '<div class="small">No owner data</div>';
            }

            // Submarket stats
            let smHtml = `<div>${site.submarket.replace(/^(dfw|atx|sat|hou|clt)-/, '').replace(/-/g, ' ')}</div>`;
            if (stats) {
                smHtml += `<div class="small">Vacancy: <span class="${vacClass}">${stats.vacancy}%</span> · Rent: $${stats.avgRent.toFixed(2)}/SF</div>`;
            }

            // Location analytics
            let locHtml = '';
            if (site.nearestHighway) {
                locHtml += `<div class="small">${site.nearestHighway.name}: ${site.nearestHighway.distance.toFixed(1)} mi</div>`;
            }
            if (site.demographics) {
                const d = site.demographics;
                locHtml += `<div class="small">Pop 5mi: ${(d.pop5mi/1000).toFixed(0)}K · Income: $${(d.medianIncome/1000).toFixed(0)}K</div>`;
            }

            // Notes (truncated)
            const noteText = (site.notes || '').replace(/GIS VERIFIED: |CREATIVE: |LoopNet verified\.? ?/g, '');
            const truncNote = noteText.length > 120 ? noteText.slice(0, 120) + '...' : noteText;

            // Links
            let linksHtml = '';
            if (site.listingUrl) linksHtml += `<a href="${site.listingUrl}" target="_blank">Listing</a>`;
            if (mkt && mkt.cadUrl) linksHtml += `<a href="${mkt.cadUrl}" target="_blank">CAD</a>`;
            linksHtml += `<a href="https://landglide.com/map#/${site.coords[0]}/${site.coords[1]}/17" target="_blank">LandGlide</a>`;
            linksHtml += `<a href="https://www.google.com/maps/@${site.coords[0]},${site.coords[1]},16z" target="_blank">Maps</a>`;

            html += `<div class="report-card">
                <div><div class="report-score" style="background:${color}">${score}</div></div>
                <div class="report-name">
                    ${site.name}
                    <span class="market-tag">${getMarketName(site.market)}</span>
                    ${site.forSale ? '<span class="for-sale-badge">FOR SALE</span>' : ''}
                    ${site.parcel ? '<span class="gis-badge">GIS</span>' : ''}
                    <span class="submarket-name">${site.id}</span>
                </div>
                <div class="report-col">
                    <div>${site.acreage} ac</div>
                    <div class="small">${site.zoning}</div>
                    <div class="small">Tax: ${site.taxRate}% · ${site.taxAuthority}</div>
                    ${site.askingPrice ? `<div class="small">${site.askingPrice}</div>` : ''}
                </div>
                <div class="report-col">${smHtml}</div>
                <div class="report-owner">${ownerHtml}</div>
                <div class="report-col">${locHtml}</div>
                <div class="report-col"><div class="small">${truncNote}</div></div>
                <div class="report-actions">${linksHtml}</div>
            </div>`;
        });

        document.getElementById('report-grid').innerHTML = html;
    }

    // CSV Export
    function exportCSV() {
        const marketFilter = marketSelect.value;
        let sites = marketFilter === 'all' ? LAND_SITES : LAND_SITES.filter(s => s.market === marketFilter);

        const headers = ['ID', 'Name', 'Market', 'Submarket', 'Score', 'Acreage', 'Zoning', 'Tax Rate',
            'Tax Authority', 'For Sale', 'Asking Price', 'Owner', 'CAD URL', 'Nearest Highway', 'HW Distance (mi)',
            'Pop 5mi', 'Median Income', 'Labor Force 5mi', 'SM Vacancy', 'SM Rent', 'Listing URL',
            'Google Maps', 'LandGlide', 'Notes'];

        const rows = sites.map(s => {
            const score = computeSiteScore(s.criteria);
            const stats = INDUSTRIAL_STATS[s.submarket];
            const owner = s.parcel ? s.parcel.owner : '';
            const cadUrl = s.parcel ? (s.parcel.cadUrl || '') : '';
            const hw = s.nearestHighway ? s.nearestHighway.name : '';
            const hwDist = s.nearestHighway ? s.nearestHighway.distance : '';
            const d = s.demographics || {};
            return [
                s.id, `"${s.name}"`, s.market, s.submarket, score, s.acreage, `"${s.zoning}"`, s.taxRate,
                `"${s.taxAuthority}"`, s.forSale ? 'Yes' : 'No', s.askingPrice || '',
                `"${owner}"`, cadUrl, hw, hwDist,
                d.pop5mi || '', d.medianIncome || '', d.laborForce5mi || '',
                stats ? stats.vacancy : '', stats ? stats.avgRent : '',
                s.listingUrl || '',
                `https://www.google.com/maps/@${s.coords[0]},${s.coords[1]},16z`,
                `https://landglide.com/map#/${s.coords[0]}/${s.coords[1]}/17`,
                `"${(s.notes || '').replace(/"/g, '""')}"`
            ].join(',');
        });

        const csv = [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `jsh-land-scout-${marketFilter}-${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Events
    marketSelect.addEventListener('change', render);
    sortSelect.addEventListener('change', render);
    searchInput.addEventListener('input', render);
    exportBtn.addEventListener('click', exportCSV);

    // Init
    render();
})();
