// Scoring Engine for Land Sites
// Weighted score across 10 criteria, each rated 1-10

const CRITERIA_CONFIG = {
    hwAccess:        { label: 'Highway Access',           weight: 12 },
    zoning:          { label: 'Industrial Zoning',        weight: 8  },
    rawLand:         { label: 'Raw Land (No Demo)',       weight: 10 },
    laborPool:       { label: 'Blue Collar Labor',        weight: 9  },
    subFundamentals: { label: 'Submarket Fundamentals',   weight: 11 },
    cityGrowth:      { label: 'City Growth',              weight: 10 },
    bizFriendly:     { label: 'Business-Friendly',        weight: 8  },
    airportProx:     { label: 'Airport Proximity',        weight: 7  },
    infill:          { label: 'Infill Location',          weight: 13 },
    utilities:       { label: 'Utilities to Site',        weight: 12 }
};

// Total weight sums to 100

function computeSiteScore(criteria) {
    let totalWeighted = 0;
    let totalWeight = 0;
    for (const [key, cfg] of Object.entries(CRITERIA_CONFIG)) {
        const val = criteria[key] || 0;
        totalWeighted += val * cfg.weight;
        totalWeight += cfg.weight * 10; // max possible
    }
    return Math.round((totalWeighted / totalWeight) * 100);
}

function scoreToColor(score) {
    // 0-40 red, 40-70 yellow, 70-100 green
    if (score >= 70) {
        const t = (score - 70) / 30;
        return lerpColor('#eab308', '#22c55e', t);
    } else if (score >= 40) {
        const t = (score - 40) / 30;
        return lerpColor('#ef4444', '#eab308', t);
    } else {
        return '#ef4444';
    }
}

function lerpColor(a, b, t) {
    const ah = parseInt(a.slice(1), 16);
    const bh = parseInt(b.slice(1), 16);
    const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
    const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);
    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1);
}

function criteriaScoreClass(val) {
    if (val >= 8) return 'high';
    if (val >= 5) return 'mid';
    return 'low';
}
