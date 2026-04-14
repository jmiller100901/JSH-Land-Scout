// Industrial Market Stats per Submarket
// Sources: CBRE Q1 2025/Q4 2025, JLL Q1 2026, Cushman & Wakefield Q4 2025,
//          Matthews Q4 2025, WareCRE 2026, Savills Q1 2026
//
// Market-wide figures are sourced; submarket allocations are estimated
// proportionally based on brokerage commentary on relative performance.
// Replace with exact submarket data when you have CBRE-EA or CoStar access.
//
// Fields:
//   inventory     — total industrial SF (millions)
//   vacancy       — vacancy rate (%)
//   vacancyDelta  — YoY change in vacancy (pp)
//   absorption    — net absorption trailing 12mo (SF)
//   avgRent       — avg asking NNN rent ($/SF/yr)
//   rentDelta     — YoY rent change (%)
//   newSupply     — under construction (SF)
//   source        — data attribution
//   asOf          — data vintage

const INDUSTRIAL_STATS = {
    // ===== DFW =====
    // Market-wide: 1.05B SF inventory, 8.9% vacancy, 22.3M SF absorption (2025),
    // $10.12/SF avg rent, 4.3% rent growth, 39.2M SF under construction
    // Source: Matthews Q4 2025, CBRE Q4 2025
    'dfw-south': {
        inventory: 148.2, vacancy: 8.5, vacancyDelta: 1.2,
        absorption: 4800000, avgRent: 6.25, rentDelta: 3.8,
        newSupply: 5200000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-great-sw': {
        inventory: 112.5, vacancy: 7.8, vacancyDelta: 0.8,
        absorption: 3200000, avgRent: 8.50, rentDelta: 3.5,
        newSupply: 2800000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-dfw-airport': {
        inventory: 85.3, vacancy: 7.2, vacancyDelta: 0.5,
        absorption: 2100000, avgRent: 11.50, rentDelta: 5.2,
        newSupply: 3400000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-north-fort-worth': {
        inventory: 95.8, vacancy: 10.8, vacancyDelta: 2.1,
        absorption: 4200000, avgRent: 7.80, rentDelta: 2.5,
        newSupply: 7700000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-east-dallas': {
        inventory: 52.1, vacancy: 7.5, vacancyDelta: 0.6,
        absorption: 1400000, avgRent: 7.20, rentDelta: 4.0,
        newSupply: 1600000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-stemmons': {
        inventory: 68.4, vacancy: 6.2, vacancyDelta: -0.3,
        absorption: 1100000, avgRent: 9.80, rentDelta: 4.8,
        newSupply: 600000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-allen-mckinney': {
        inventory: 28.5, vacancy: 11.5, vacancyDelta: 3.2,
        absorption: 800000, avgRent: 11.45, rentDelta: 2.0,
        newSupply: 3200000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-northwest-dallas': {
        inventory: 42.3, vacancy: 5.8, vacancyDelta: -0.5,
        absorption: 600000, avgRent: 12.50, rentDelta: 5.5,
        newSupply: 200000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-south-fort-worth': {
        inventory: 38.9, vacancy: 8.2, vacancyDelta: 0.8,
        absorption: 1200000, avgRent: 6.80, rentDelta: 3.2,
        newSupply: 2400000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-northeast-dallas': {
        inventory: 45.6, vacancy: 7.0, vacancyDelta: 0.4,
        absorption: 800000, avgRent: 8.20, rentDelta: 4.5,
        newSupply: 1000000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-richardson-plano': {
        inventory: 32.1, vacancy: 6.5, vacancyDelta: 0.2,
        absorption: 500000, avgRent: 11.80, rentDelta: 5.0,
        newSupply: 800000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-central-fort-worth': {
        inventory: 55.2, vacancy: 7.5, vacancyDelta: 0.3,
        absorption: 1500000, avgRent: 7.50, rentDelta: 3.8,
        newSupply: 1800000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-midcities': {
        inventory: 48.7, vacancy: 7.2, vacancyDelta: 0.5,
        absorption: 900000, avgRent: 9.00, rentDelta: 4.2,
        newSupply: 800000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-south-stemmons': {
        inventory: 35.8, vacancy: 5.5, vacancyDelta: -0.8,
        absorption: 700000, avgRent: 10.20, rentDelta: 5.0,
        newSupply: 300000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-cedars-west': {
        inventory: 22.4, vacancy: 9.5, vacancyDelta: 1.5,
        absorption: 400000, avgRent: 7.00, rentDelta: 2.8,
        newSupply: 1800000, source: 'CBRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },

    // ===== AUSTIN =====
    // Market-wide: ~130M SF, vacancy rising (5th consecutive qtr), 385K SF Q1 absorption,
    // 6.1M SF pipeline, 3.2M SF leasing (highest since Q2 2023), rents declined $0.19/SF QoQ
    // Source: CBRE Q1 2026
    'atx-northeast': {
        inventory: 32.5, vacancy: 9.8, vacancyDelta: 1.5,
        absorption: 120000, avgRent: 12.50, rentDelta: -1.2,
        newSupply: 1800000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },
    'atx-southeast': {
        inventory: 28.5, vacancy: 10.5, vacancyDelta: 2.0,
        absorption: 85000, avgRent: 11.80, rentDelta: -1.5,
        newSupply: 1500000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },
    'atx-east': {
        inventory: 22.1, vacancy: 8.2, vacancyDelta: 0.8,
        absorption: 60000, avgRent: 13.00, rentDelta: -0.8,
        newSupply: 800000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },
    'atx-south': {
        inventory: 12.5, vacancy: 7.5, vacancyDelta: 0.5,
        absorption: 35000, avgRent: 11.00, rentDelta: 0.5,
        newSupply: 400000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },
    'atx-north-central': {
        inventory: 15.8, vacancy: 5.5, vacancyDelta: -0.2,
        absorption: 25000, avgRent: 15.50, rentDelta: 1.0,
        newSupply: 100000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },
    'atx-northwest': {
        inventory: 8.2, vacancy: 7.0, vacancyDelta: 0.3,
        absorption: 15000, avgRent: 14.00, rentDelta: 0.2,
        newSupply: 200000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },
    'atx-round-rock': {
        inventory: 18.5, vacancy: 12.0, vacancyDelta: 3.0,
        absorption: 80000, avgRent: 11.50, rentDelta: -2.0,
        newSupply: 1500000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },
    'atx-hays': {
        inventory: 8.9, vacancy: 13.5, vacancyDelta: 4.0,
        absorption: 30000, avgRent: 9.50, rentDelta: -3.0,
        newSupply: 800000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },
    'atx-far-northeast': {
        inventory: 5.2, vacancy: 15.0, vacancyDelta: 5.0,
        absorption: 15000, avgRent: 10.00, rentDelta: -2.5,
        newSupply: 600000, source: 'CBRE Q1 2026', asOf: 'Q1 2026'
    },

    // ===== SAN ANTONIO =====
    // Market-wide: ~162M SF, 10.7% vacancy (up 170bp QoQ), 195K SF Q1 absorption,
    // 2.7M SF new deliveries Q1, majority leases <100K SF
    // Source: CBRE Q1 2025
    'sat-cbd': {
        inventory: 15.5, vacancy: 6.8, vacancyDelta: 0.5,
        absorption: 20000, avgRent: 8.50, rentDelta: 1.0,
        newSupply: 0, source: 'CBRE Q1 2025', asOf: 'Q1 2025'
    },
    'sat-north-central': {
        inventory: 20.1, vacancy: 8.5, vacancyDelta: 1.0,
        absorption: 30000, avgRent: 9.20, rentDelta: 0.5,
        newSupply: 400000, source: 'CBRE Q1 2025', asOf: 'Q1 2025'
    },
    'sat-northeast': {
        inventory: 45.8, vacancy: 11.5, vacancyDelta: 2.5,
        absorption: 60000, avgRent: 8.80, rentDelta: -0.8,
        newSupply: 1200000, source: 'CBRE Q1 2025', asOf: 'Q1 2025'
    },
    'sat-east': {
        inventory: 18.3, vacancy: 9.0, vacancyDelta: 1.2,
        absorption: 15000, avgRent: 7.50, rentDelta: -0.5,
        newSupply: 300000, source: 'CBRE Q1 2025', asOf: 'Q1 2025'
    },
    'sat-south': {
        inventory: 42.5, vacancy: 10.2, vacancyDelta: 1.8,
        absorption: 40000, avgRent: 7.80, rentDelta: 0.3,
        newSupply: 800000, source: 'CBRE Q1 2025', asOf: 'Q1 2025'
    },
    'sat-northwest': {
        inventory: 22.8, vacancy: 9.5, vacancyDelta: 1.5,
        absorption: 20000, avgRent: 9.50, rentDelta: -0.3,
        newSupply: 500000, source: 'CBRE Q1 2025', asOf: 'Q1 2025'
    },
    'sat-comal': {
        inventory: 18.2, vacancy: 12.5, vacancyDelta: 3.0,
        absorption: 10000, avgRent: 8.50, rentDelta: -1.5,
        newSupply: 600000, source: 'CBRE Q1 2025', asOf: 'Q1 2025'
    },
    'sat-guadalupe': {
        inventory: 13.2, vacancy: 10.0, vacancyDelta: 2.0,
        absorption: 10000, avgRent: 9.00, rentDelta: -0.5,
        newSupply: 400000, source: 'CBRE Q1 2025', asOf: 'Q1 2025'
    },

    // ===== HOUSTON =====
    // Market-wide: 838M+ SF, 7.4% vacancy, 12.6M SF absorption (2025),
    // $10.67/SF NNN avg rent (record high), 4.0% rent growth YoY,
    // 24.6M SF under construction, 18.6M SF delivered 2025
    // Source: WareCRE 2026, Matthews Q4 2025, JLL Q1 2026
    'hou-northwest': {
        inventory: 155.0, vacancy: 8.2, vacancyDelta: 1.5,
        absorption: 3500000, avgRent: 10.50, rentDelta: 4.0,
        newSupply: 5500000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-north': {
        inventory: 95.0, vacancy: 7.8, vacancyDelta: 1.2,
        absorption: 2200000, avgRent: 9.75, rentDelta: 3.5,
        newSupply: 3800000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-northeast': {
        inventory: 55.0, vacancy: 6.8, vacancyDelta: 0.8,
        absorption: 1200000, avgRent: 9.00, rentDelta: 3.0,
        newSupply: 2200000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-east': {
        inventory: 72.3, vacancy: 5.5, vacancyDelta: 0.2,
        absorption: 1500000, avgRent: 9.50, rentDelta: 4.5,
        newSupply: 1200000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-southeast': {
        inventory: 85.0, vacancy: 6.2, vacancyDelta: 0.5,
        absorption: 1800000, avgRent: 9.50, rentDelta: 4.0,
        newSupply: 2800000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-southwest': {
        inventory: 65.0, vacancy: 7.5, vacancyDelta: 1.0,
        absorption: 1000000, avgRent: 10.75, rentDelta: 4.5,
        newSupply: 2500000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-west': {
        inventory: 80.0, vacancy: 8.8, vacancyDelta: 2.0,
        absorption: 1200000, avgRent: 11.50, rentDelta: 5.0,
        newSupply: 3500000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-south': {
        inventory: 45.0, vacancy: 6.5, vacancyDelta: 0.5,
        absorption: 600000, avgRent: 9.00, rentDelta: 3.5,
        newSupply: 1200000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-central': {
        inventory: 48.0, vacancy: 4.8, vacancyDelta: -0.3,
        absorption: 500000, avgRent: 10.50, rentDelta: 5.0,
        newSupply: 400000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-baytown': {
        inventory: 30.0, vacancy: 5.2, vacancyDelta: 0.2,
        absorption: 500000, avgRent: 8.50, rentDelta: 3.0,
        newSupply: 800000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },
    'hou-tomball-magnolia': {
        inventory: 22.0, vacancy: 10.5, vacancyDelta: 3.0,
        absorption: 300000, avgRent: 10.00, rentDelta: 2.5,
        newSupply: 1800000, source: 'WareCRE/Matthews Q4 2025', asOf: 'Q4 2025'
    },

    // ===== CHARLOTTE =====
    // Market-wide: ~310M SF, 8.1% vacancy Q4 2025 (down 50bp from 10yr high),
    // 12.0% availability Q1 2026, 6.8M SF absorption (9mo 2025),
    // 7M SF Class A leased in 2025 (6yr high)
    // Source: CBRE Q4 2025, Savills Q1 2026, Avison Young
    'clt-airport-west': {
        inventory: 55.0, vacancy: 7.5, vacancyDelta: -0.5,
        absorption: 1800000, avgRent: 9.50, rentDelta: 2.5,
        newSupply: 2800000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-cbd': {
        inventory: 5.2, vacancy: 5.0, vacancyDelta: -0.5,
        absorption: 50000, avgRent: 12.00, rentDelta: 3.0,
        newSupply: 0, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-north': {
        inventory: 35.0, vacancy: 8.0, vacancyDelta: 0.5,
        absorption: 800000, avgRent: 9.80, rentDelta: 2.0,
        newSupply: 1500000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-northeast': {
        inventory: 38.0, vacancy: 9.5, vacancyDelta: 1.5,
        absorption: 900000, avgRent: 8.80, rentDelta: 1.5,
        newSupply: 2200000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-east': {
        inventory: 22.0, vacancy: 7.0, vacancyDelta: 0.2,
        absorption: 500000, avgRent: 9.20, rentDelta: 2.0,
        newSupply: 600000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-south': {
        inventory: 25.0, vacancy: 6.8, vacancyDelta: -0.2,
        absorption: 600000, avgRent: 9.50, rentDelta: 2.5,
        newSupply: 800000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-stateline': {
        inventory: 42.0, vacancy: 8.5, vacancyDelta: 1.0,
        absorption: 1200000, avgRent: 8.50, rentDelta: 1.8,
        newSupply: 2500000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-northwest': {
        inventory: 15.0, vacancy: 7.8, vacancyDelta: 0.5,
        absorption: 350000, avgRent: 8.80, rentDelta: 1.5,
        newSupply: 500000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-gaston': {
        inventory: 18.0, vacancy: 6.5, vacancyDelta: -0.3,
        absorption: 500000, avgRent: 7.50, rentDelta: 2.0,
        newSupply: 800000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-iredell': {
        inventory: 22.0, vacancy: 9.0, vacancyDelta: 1.5,
        absorption: 500000, avgRent: 8.00, rentDelta: 1.0,
        newSupply: 1500000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    },
    'clt-rowan': {
        inventory: 10.0, vacancy: 11.0, vacancyDelta: 3.0,
        absorption: 200000, avgRent: 7.00, rentDelta: 0.5,
        newSupply: 2180000, source: 'CBRE/Savills Q4 2025', asOf: 'Q4 2025'
    }
};
