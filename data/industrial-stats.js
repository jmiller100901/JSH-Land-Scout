// Industrial Market Stats per Submarket
// Source fields: update quarterly from CBRE/JLL/Cushman reports
// All stats are Q4 2025 placeholders — replace with actual data
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
    'dfw-south': {
        inventory: 148.2, vacancy: 8.1, vacancyDelta: 1.8,
        absorption: 4200000, avgRent: 5.25, rentDelta: -2.1,
        newSupply: 6800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-great-sw': {
        inventory: 112.5, vacancy: 7.4, vacancyDelta: 1.2,
        absorption: 2800000, avgRent: 5.80, rentDelta: -1.5,
        newSupply: 3200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-dfw-airport': {
        inventory: 85.3, vacancy: 9.2, vacancyDelta: 2.5,
        absorption: 1500000, avgRent: 6.50, rentDelta: -0.8,
        newSupply: 5100000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-north-fort-worth': {
        inventory: 95.8, vacancy: 10.5, vacancyDelta: 3.2,
        absorption: 3800000, avgRent: 5.10, rentDelta: -3.0,
        newSupply: 8200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-east-dallas': {
        inventory: 52.1, vacancy: 6.8, vacancyDelta: 0.9,
        absorption: 1200000, avgRent: 4.75, rentDelta: 0.5,
        newSupply: 1800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-stemmons': {
        inventory: 68.4, vacancy: 7.1, vacancyDelta: 0.4,
        absorption: 900000, avgRent: 5.50, rentDelta: -0.5,
        newSupply: 800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-allen-mckinney': {
        inventory: 28.5, vacancy: 11.2, vacancyDelta: 4.1,
        absorption: 1100000, avgRent: 6.25, rentDelta: -1.8,
        newSupply: 3500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-northwest-dallas': {
        inventory: 42.3, vacancy: 6.5, vacancyDelta: 0.3,
        absorption: 800000, avgRent: 5.90, rentDelta: 0.2,
        newSupply: 600000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-south-fort-worth': {
        inventory: 38.9, vacancy: 5.8, vacancyDelta: -0.5,
        absorption: 1500000, avgRent: 4.50, rentDelta: 1.2,
        newSupply: 2200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-northeast-dallas': {
        inventory: 45.6, vacancy: 7.8, vacancyDelta: 1.0,
        absorption: 600000, avgRent: 5.20, rentDelta: -0.3,
        newSupply: 1200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-richardson-plano': {
        inventory: 32.1, vacancy: 8.5, vacancyDelta: 1.5,
        absorption: 400000, avgRent: 7.20, rentDelta: -1.0,
        newSupply: 900000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-central-fort-worth': {
        inventory: 55.2, vacancy: 6.2, vacancyDelta: -0.2,
        absorption: 1100000, avgRent: 4.80, rentDelta: 0.8,
        newSupply: 1500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-midcities': {
        inventory: 48.7, vacancy: 7.0, vacancyDelta: 0.8,
        absorption: 700000, avgRent: 5.60, rentDelta: -0.2,
        newSupply: 1100000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-south-stemmons': {
        inventory: 35.8, vacancy: 6.9, vacancyDelta: 0.5,
        absorption: 500000, avgRent: 5.40, rentDelta: 0.1,
        newSupply: 400000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'dfw-cedars-west': {
        inventory: 22.4, vacancy: 9.8, vacancyDelta: 2.0,
        absorption: 300000, avgRent: 4.90, rentDelta: -1.5,
        newSupply: 2000000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },

    // ===== AUSTIN =====
    'atx-southeast': {
        inventory: 28.5, vacancy: 9.8, vacancyDelta: 3.2,
        absorption: 1200000, avgRent: 9.50, rentDelta: -2.5,
        newSupply: 3800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'atx-east': {
        inventory: 22.1, vacancy: 8.5, vacancyDelta: 2.0,
        absorption: 800000, avgRent: 10.25, rentDelta: -1.8,
        newSupply: 2200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'atx-north': {
        inventory: 18.3, vacancy: 7.2, vacancyDelta: 1.5,
        absorption: 600000, avgRent: 11.00, rentDelta: -0.5,
        newSupply: 1500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'atx-round-rock': {
        inventory: 15.8, vacancy: 10.5, vacancyDelta: 4.0,
        absorption: 900000, avgRent: 9.80, rentDelta: -3.0,
        newSupply: 2800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'atx-south': {
        inventory: 12.5, vacancy: 6.5, vacancyDelta: 0.8,
        absorption: 500000, avgRent: 8.50, rentDelta: 1.0,
        newSupply: 800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'atx-southwest': {
        inventory: 8.2, vacancy: 5.8, vacancyDelta: 0.2,
        absorption: 300000, avgRent: 10.50, rentDelta: 0.5,
        newSupply: 400000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'atx-northwest': {
        inventory: 14.6, vacancy: 8.0, vacancyDelta: 1.8,
        absorption: 700000, avgRent: 10.00, rentDelta: -1.2,
        newSupply: 1800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'atx-san-marcos': {
        inventory: 8.9, vacancy: 12.0, vacancyDelta: 5.0,
        absorption: 400000, avgRent: 7.50, rentDelta: -4.0,
        newSupply: 2000000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },

    // ===== SAN ANTONIO =====
    'sat-northeast': {
        inventory: 22.5, vacancy: 7.5, vacancyDelta: 1.2,
        absorption: 800000, avgRent: 6.80, rentDelta: -0.5,
        newSupply: 1500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'sat-east': {
        inventory: 18.3, vacancy: 8.2, vacancyDelta: 1.8,
        absorption: 600000, avgRent: 5.90, rentDelta: -1.0,
        newSupply: 1200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'sat-south': {
        inventory: 35.8, vacancy: 6.5, vacancyDelta: 0.5,
        absorption: 1200000, avgRent: 5.50, rentDelta: 0.8,
        newSupply: 2000000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'sat-northwest': {
        inventory: 15.2, vacancy: 9.0, vacancyDelta: 2.5,
        absorption: 500000, avgRent: 7.20, rentDelta: -1.5,
        newSupply: 1800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'sat-west': {
        inventory: 12.8, vacancy: 7.8, vacancyDelta: 1.0,
        absorption: 400000, avgRent: 6.00, rentDelta: 0.2,
        newSupply: 800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'sat-central': {
        inventory: 28.5, vacancy: 5.5, vacancyDelta: -0.3,
        absorption: 700000, avgRent: 5.80, rentDelta: 1.2,
        newSupply: 600000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'sat-new-braunfels': {
        inventory: 8.5, vacancy: 11.5, vacancyDelta: 4.5,
        absorption: 300000, avgRent: 6.50, rentDelta: -2.0,
        newSupply: 1500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'sat-north-central': {
        inventory: 20.1, vacancy: 7.0, vacancyDelta: 0.8,
        absorption: 600000, avgRent: 6.20, rentDelta: 0.5,
        newSupply: 1000000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },

    // ===== HOUSTON =====
    'hou-northwest': {
        inventory: 85.2, vacancy: 8.5, vacancyDelta: 2.0,
        absorption: 3200000, avgRent: 7.80, rentDelta: -1.5,
        newSupply: 5500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-north': {
        inventory: 62.8, vacancy: 9.2, vacancyDelta: 2.5,
        absorption: 2100000, avgRent: 6.50, rentDelta: -2.0,
        newSupply: 4200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-northeast': {
        inventory: 48.5, vacancy: 7.8, vacancyDelta: 1.2,
        absorption: 1500000, avgRent: 5.90, rentDelta: -0.8,
        newSupply: 2800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-east': {
        inventory: 72.3, vacancy: 6.5, vacancyDelta: 0.5,
        absorption: 2800000, avgRent: 5.20, rentDelta: 0.5,
        newSupply: 1800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-southeast': {
        inventory: 55.1, vacancy: 7.2, vacancyDelta: 1.0,
        absorption: 1800000, avgRent: 6.80, rentDelta: -0.3,
        newSupply: 2200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-southwest': {
        inventory: 42.6, vacancy: 8.8, vacancyDelta: 2.2,
        absorption: 1200000, avgRent: 7.50, rentDelta: -1.8,
        newSupply: 3500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-west': {
        inventory: 68.9, vacancy: 10.2, vacancyDelta: 3.5,
        absorption: 2500000, avgRent: 7.20, rentDelta: -2.5,
        newSupply: 6800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-south': {
        inventory: 38.5, vacancy: 7.5, vacancyDelta: 1.5,
        absorption: 900000, avgRent: 6.00, rentDelta: -0.5,
        newSupply: 1500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-central': {
        inventory: 45.2, vacancy: 5.8, vacancyDelta: -0.2,
        absorption: 1100000, avgRent: 6.80, rentDelta: 1.0,
        newSupply: 800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-baytown': {
        inventory: 25.8, vacancy: 6.0, vacancyDelta: 0.3,
        absorption: 800000, avgRent: 5.50, rentDelta: 0.8,
        newSupply: 1200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'hou-tomball-magnolia': {
        inventory: 18.5, vacancy: 12.5, vacancyDelta: 5.0,
        absorption: 600000, avgRent: 7.00, rentDelta: -3.5,
        newSupply: 3200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },

    // ===== CHARLOTTE =====
    'clt-airport-west': {
        inventory: 52.8, vacancy: 7.8, vacancyDelta: 2.0,
        absorption: 2200000, avgRent: 7.50, rentDelta: -1.2,
        newSupply: 3500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'clt-north': {
        inventory: 35.2, vacancy: 8.5, vacancyDelta: 2.5,
        absorption: 1200000, avgRent: 7.80, rentDelta: -1.5,
        newSupply: 2800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'clt-northeast': {
        inventory: 28.5, vacancy: 9.2, vacancyDelta: 3.0,
        absorption: 900000, avgRent: 7.20, rentDelta: -2.0,
        newSupply: 2200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'clt-south': {
        inventory: 22.1, vacancy: 6.5, vacancyDelta: 0.8,
        absorption: 800000, avgRent: 8.00, rentDelta: 0.5,
        newSupply: 1200000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'clt-southeast': {
        inventory: 18.8, vacancy: 7.0, vacancyDelta: 1.2,
        absorption: 600000, avgRent: 7.50, rentDelta: -0.3,
        newSupply: 900000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'clt-southwest': {
        inventory: 15.5, vacancy: 8.0, vacancyDelta: 1.8,
        absorption: 500000, avgRent: 6.80, rentDelta: -1.0,
        newSupply: 1500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'clt-central': {
        inventory: 32.5, vacancy: 5.2, vacancyDelta: -0.5,
        absorption: 1000000, avgRent: 8.50, rentDelta: 1.2,
        newSupply: 600000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'clt-mooresville': {
        inventory: 12.8, vacancy: 10.0, vacancyDelta: 3.5,
        absorption: 400000, avgRent: 6.50, rentDelta: -2.5,
        newSupply: 1800000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    },
    'clt-gastonia': {
        inventory: 10.2, vacancy: 6.8, vacancyDelta: 0.5,
        absorption: 300000, avgRent: 5.80, rentDelta: 0.8,
        newSupply: 500000, source: 'CBRE Q4 2025', asOf: 'Q4 2025'
    }
};
