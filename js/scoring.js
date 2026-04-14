// Scoring Engine for Land Sites — v2
// Based on NAIOP, Prologis, Area Development, SIOR research
// Tiered framework: Go/No-Go gates → Weighted scoring (Tiers 2-4)

// ===== TIER 1: GO/NO-GO GATES (pass/fail) =====
// These are binary — if any flag is set, the site shows a warning badge
const DEAL_KILLERS = {
    floodplain:    { label: 'In 100-yr Floodplain', icon: '🌊' },
    environmental: { label: 'Environmental Contamination', icon: '☣' },
    wetlands:      { label: 'Jurisdictional Wetlands', icon: '🏞' },
    noEntitlement: { label: 'Entitlement Path Blocked', icon: '🚫' },
    noUtilities:   { label: 'Utilities Not Available', icon: '⚡' },
    noAccess:      { label: 'No Legal Truck Access', icon: '🚛' },
    geoFlaw:       { label: 'Geotechnical Fatal Flaw', icon: '🪨' },
    titleDefect:   { label: 'Title / Legal Issue', icon: '📜' }
};

// ===== TIER 2: PRIMARY CRITERIA (60 of 100 points) =====
// What Prologis, Trammell Crow, Hillwood weight most heavily
//
// ===== TIER 3: SECONDARY CRITERIA (30 of 100 points) =====
// ===== TIER 4: DIFFERENTIATORS (10 of 100 points) =====

const CRITERIA_CONFIG = {
    // --- Tier 2: Primary (60 pts) ---
    landBasis:       { label: 'Land Basis vs. Rents',       weight: 14, tier: 2, desc: 'Can you pay market price and hit target yield? Residual land value analysis.' },
    subFundamentals: { label: 'Submarket Fundamentals',     weight: 12, tier: 2, desc: 'Vacancy, absorption trend, competitive supply pipeline, rent trajectory.' },
    transportAccess: { label: 'Transportation Access',      weight: 10, tier: 2, desc: 'Distance to on-ramp, ADT counts, truck route designation, last-mile road quality.' },
    laborShed:       { label: 'Labor Shed (Drive-Time)',    weight: 9,  tier: 2, desc: '30/45/60-min drive-time population, warehouse worker concentration, wage rates.' },
    entitlementSpeed:{ label: 'Speed to Market',            weight: 8,  tier: 2, desc: 'Months from contract to permit. Pad-ready vs. raw. Platting, zoning, drainage timeline.' },
    sitePhysical:    { label: 'Site Physical Characteristics', weight: 7, tier: 2, desc: 'Shape ratio, topography (<3% grade), soil bearing, buildable acreage after setbacks/detention.' },

    // --- Tier 3: Secondary (30 pts) ---
    powerCapacity:   { label: 'Power / Electrical',         weight: 6,  tier: 3, desc: 'Substation capacity, distance to feed, voltage, redundancy. Data center demand consuming supply.' },
    taxIncentives:   { label: 'Tax Incentives Available',   weight: 5,  tier: 3, desc: 'TIF/TIRZ, Ch. 312 abatement, freeport exemption, enterprise zone. Can swing returns 100-200 bps.' },
    intermodalRail:  { label: 'Intermodal / Rail',          weight: 4,  tier: 3, desc: 'Distance to intermodal terminal, rail-served vs. adjacent. 5-15% rent premium when rail-served.' },
    positioning:     { label: 'Last-Mile vs. Regional',     weight: 4,  tier: 3, desc: 'Distribution spectrum positioning. Infill/last-mile = higher rents. Regional/bulk = larger footprint.' },
    buildingEfficiency: { label: 'Building Efficiency',     weight: 4,  tier: 3, desc: 'Can site support 36\' clear, 185\' truck courts, trailer parking, 40-55% coverage ratio?' },
    communitySupport:{ label: 'Municipal Support',          weight: 4,  tier: 3, desc: 'Pro-development council, established EDC, streamlined permitting. Fewest unknowns wins.' },
    expansionPotential: { label: 'Expansion Potential',     weight: 3,  tier: 3, desc: 'Phase 2/3 land available? Adjacent parcels for multi-building commerce park?' },

    // --- Tier 4: Differentiators (10 pts) ---
    demoGrowth:      { label: 'Demographic Growth',         weight: 3,  tier: 4, desc: 'MSA population growth, in-migration, major employer announcements.' },
    airportProx:     { label: 'Airport Proximity',          weight: 2,  tier: 4, desc: 'Within 20 min of major cargo airport for e-commerce/3PL tenants.' },
    waterSewer:      { label: 'Water / Sewer Capacity',     weight: 2,  tier: 4, desc: 'Adequate for standard industrial. Food processing/cold storage need more.' },
    fiberTelecom:    { label: 'Fiber / Telecom',            weight: 2,  tier: 4, desc: 'Multiple carrier availability. Increasingly important for automated warehouses.' },
    visibility:      { label: 'Visibility / Frontage',      weight: 1,  tier: 4, desc: 'Interstate frontage is a leasing advantage but not a requirement.' }
};

// Total weight: 14+12+10+9+8+7 + 6+5+4+4+4+4+3 + 3+2+2+2+1 = 100

// ===== Migration: Map old criteria keys to new =====
// Existing sites use: hwAccess, zoning, rawLand, laborPool, subFundamentals,
//                     cityGrowth, bizFriendly, airportProx, infill, utilities
// This function auto-maps them so all 69 existing sites still score correctly.
function migrateCriteria(old) {
    if (!old) return old;
    // If the site already uses new keys, return as-is
    if ('landBasis' in old || 'transportAccess' in old) return old;

    return {
        landBasis:          old.rawLand || 5,           // raw land availability correlates with basis
        subFundamentals:    old.subFundamentals || 5,
        transportAccess:    old.hwAccess || 5,
        laborShed:          old.laborPool || 5,
        entitlementSpeed:   Math.round(((old.zoning || 5) + (old.bizFriendly || 5)) / 2), // zoning + biz-friendly → entitlement
        sitePhysical:       old.rawLand || 5,

        powerCapacity:      old.utilities || 5,
        taxIncentives:      old.bizFriendly || 5,
        intermodalRail:     Math.min(10, Math.round((old.hwAccess || 5) * 0.6)), // rough proxy
        positioning:        old.infill || 5,
        buildingEfficiency: Math.round(((old.rawLand || 5) + (old.utilities || 5)) / 2),
        communitySupport:   old.bizFriendly || 5,
        expansionPotential: old.rawLand >= 8 ? 7 : old.rawLand >= 5 ? 5 : 3,

        demoGrowth:         old.cityGrowth || 5,
        airportProx:        old.airportProx || 5,
        waterSewer:         old.utilities || 5,
        fiberTelecom:       old.utilities >= 8 ? 7 : old.utilities >= 5 ? 5 : 3,
        visibility:         old.hwAccess >= 8 ? 7 : old.hwAccess >= 5 ? 5 : 3
    };
}

function computeSiteScore(criteria) {
    const c = migrateCriteria(criteria);
    let totalWeighted = 0;
    let totalWeight = 0;
    for (const [key, cfg] of Object.entries(CRITERIA_CONFIG)) {
        const val = c[key] || 0;
        totalWeighted += val * cfg.weight;
        totalWeight += cfg.weight * 10; // max possible
    }
    return Math.round((totalWeighted / totalWeight) * 100);
}

// Check if site has any deal-killer flags
function getDealKillers(site) {
    if (!site.dealKillers) return [];
    return Object.entries(site.dealKillers)
        .filter(([k, v]) => v === true)
        .map(([k]) => DEAL_KILLERS[k])
        .filter(Boolean);
}

function scoreToColor(score) {
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

function getTierLabel(tier) {
    if (tier === 2) return 'Primary';
    if (tier === 3) return 'Secondary';
    if (tier === 4) return 'Differentiator';
    return '';
}
