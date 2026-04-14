// Land Sites Database
// Each site includes: basic info, criteria scores (1-10), property info, links,
// nearestHighway (name + distance in miles), demographics (pop5mi, medianIncome, laborForce5mi)

const LAND_SITES = [
    // ===== DFW =====
    {
        id: 'dfw-001', name: 'I-20/Clark Rd Tract', market: 'dfw', submarket: 'dfw-south',
        coords: [32.665, -96.85], acreage: 45,
        zoning: 'PD (Industrial)', taxRate: 2.45, taxAuthority: 'Dallas County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Flat topography, adjacent to I-20 interchange. City water and sewer available at property line.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-20', distance: 0.2 },
        demographics: { pop5mi: 125000, medianIncome: 42000, laborForce5mi: 62000 },
        criteria: { hwAccess: 9, zoning: 9, rawLand: 8, laborPool: 8, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 5, infill: 7, utilities: 9 }
    },
    {
        id: 'dfw-002', name: 'Alliance Gateway Parcel', market: 'dfw', submarket: 'dfw-north-fort-worth',
        coords: [32.975, -97.31], acreage: 62,
        zoning: 'I (Industrial)', taxRate: 2.22, taxAuthority: 'Denton County',
        forSale: true, askingPrice: '$4,200,000', listingUrl: 'https://www.loopnet.com/search/land/fort-worth-tx/for-sale/',
        notes: 'Within Alliance Texas development corridor. BNSF intermodal nearby. Heavy industrial zoning in place.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-35W', distance: 1.2 },
        demographics: { pop5mi: 85000, medianIncome: 55000, laborForce5mi: 42000 },
        criteria: { hwAccess: 8, zoning: 10, rawLand: 9, laborPool: 7, subFundamentals: 6, cityGrowth: 9, bizFriendly: 9, airportProx: 9, infill: 5, utilities: 10 }
    },
    {
        id: 'dfw-003', name: 'Mountain Creek Industrial Site', market: 'dfw', submarket: 'dfw-great-sw',
        coords: [32.725, -97.02], acreage: 28,
        zoning: 'IR (Industrial Research)', taxRate: 2.55, taxAuthority: 'Dallas County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Near I-20 and SH-360 interchange. Graded pad-ready. Strong last-mile location.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-20', distance: 0.4 },
        demographics: { pop5mi: 185000, medianIncome: 48000, laborForce5mi: 92000 },
        criteria: { hwAccess: 9, zoning: 8, rawLand: 9, laborPool: 9, subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 7, infill: 9, utilities: 8 }
    },
    {
        id: 'dfw-004', name: 'DFW Airport South Pad', market: 'dfw', submarket: 'dfw-dfw-airport',
        coords: [32.845, -97.01], acreage: 35,
        zoning: 'CS (Commercial Services)', taxRate: 2.48, taxAuthority: 'Tarrant County',
        forSale: true, askingPrice: '$3,850,000', listingUrl: 'https://www.crexi.com/properties?type=land&location=irving-tx',
        notes: 'Airport-adjacent site with SH-183 frontage. Ideal for air cargo or logistics.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'SH-183', distance: 0.1 },
        demographics: { pop5mi: 165000, medianIncome: 52000, laborForce5mi: 82000 },
        criteria: { hwAccess: 8, zoning: 7, rawLand: 7, laborPool: 7, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 10, infill: 8, utilities: 9 }
    },
    {
        id: 'dfw-005', name: 'Sunnyvale Logistics Tract', market: 'dfw', submarket: 'dfw-east-dallas',
        coords: [32.78, -96.58], acreage: 55,
        zoning: 'LI (Light Industrial)', taxRate: 2.40, taxAuthority: 'Dallas County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'I-30 corridor site. Raw agricultural land with good drainage. ETJ of Mesquite.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-30', distance: 0.8 },
        demographics: { pop5mi: 95000, medianIncome: 58000, laborForce5mi: 47000 },
        criteria: { hwAccess: 8, zoning: 8, rawLand: 10, laborPool: 7, subFundamentals: 7, cityGrowth: 7, bizFriendly: 9, airportProx: 5, infill: 6, utilities: 6 }
    },
    {
        id: 'dfw-006', name: 'Wintergreen Rd/I-45 Site', market: 'dfw', submarket: 'dfw-south',
        coords: [32.590, -96.70], acreage: 80,
        zoning: 'HI (Heavy Industrial)', taxRate: 2.50, taxAuthority: 'Ellis County',
        forSale: true, askingPrice: '$5,600,000', listingUrl: 'https://www.loopnet.com/search/land/wilmer-tx/for-sale/',
        notes: 'I-45 frontage near Wilmer. Amazon HQ2 distribution hub nearby. Flat, cleared land. UPRR rail access potential.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-45', distance: 0.1 },
        demographics: { pop5mi: 78000, medianIncome: 39000, laborForce5mi: 38000 },
        criteria: { hwAccess: 10, zoning: 10, rawLand: 9, laborPool: 9, subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 4, infill: 7, utilities: 9 }
    },
    {
        id: 'dfw-007', name: 'Lancaster Logistics Corridor', market: 'dfw', submarket: 'dfw-south',
        coords: [32.610, -96.76], acreage: 38,
        zoning: 'LI (Light Industrial)', taxRate: 2.45, taxAuthority: 'Dallas County',
        forSale: true, askingPrice: '$2,850,000', listingUrl: 'https://www.loopnet.com/search/land/lancaster-tx/for-sale/',
        notes: 'I-35E access, Lancaster city limits. Inland port proximity. Growing last-mile distribution corridor.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-35E', distance: 0.5 },
        demographics: { pop5mi: 110000, medianIncome: 41000, laborForce5mi: 55000 },
        criteria: { hwAccess: 9, zoning: 9, rawLand: 8, laborPool: 9, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 5, infill: 8, utilities: 8 }
    },
    {
        id: 'dfw-008', name: 'Midlothian US-287 Tract', market: 'dfw', submarket: 'dfw-cedars-west',
        coords: [32.50, -96.98], acreage: 95,
        zoning: 'PD (Planned Development)', taxRate: 2.50, taxAuthority: 'Ellis County',
        forSale: true, askingPrice: '$7,125,000', listingUrl: 'https://www.loopnet.com/search/land/midlothian-tx/for-sale/',
        notes: 'US-287/US-67 crossroads. Large acreage for master-planned industrial park. Midlothian pro-development.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'US-287', distance: 0.3 },
        demographics: { pop5mi: 45000, medianIncome: 62000, laborForce5mi: 22000 },
        criteria: { hwAccess: 8, zoning: 7, rawLand: 10, laborPool: 6, subFundamentals: 6, cityGrowth: 8, bizFriendly: 9, airportProx: 3, infill: 4, utilities: 7 }
    },
    {
        id: 'dfw-009', name: 'SH-360/I-20 Interchange Pad', market: 'dfw', submarket: 'dfw-great-sw',
        coords: [32.700, -97.06], acreage: 22,
        zoning: 'LI (Light Industrial)', taxRate: 2.48, taxAuthority: 'Tarrant County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Prime interchange location, SH-360 and I-20. Surrounded by 10M+ SF of existing industrial. True infill.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-20/SH-360', distance: 0.1 },
        demographics: { pop5mi: 210000, medianIncome: 47000, laborForce5mi: 105000 },
        criteria: { hwAccess: 10, zoning: 9, rawLand: 8, laborPool: 10, subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 7, infill: 10, utilities: 10 }
    },
    {
        id: 'dfw-010', name: 'Forney I-20 East Site', market: 'dfw', submarket: 'dfw-east-dallas',
        coords: [32.748, -96.47], acreage: 68,
        zoning: 'GC (General Commercial)', taxRate: 2.38, taxAuthority: 'Kaufman County',
        forSale: true, askingPrice: '$4,080,000', listingUrl: 'https://www.loopnet.com/search/land/forney-tx/for-sale/',
        notes: 'I-20 frontage east of Forney. Kaufman County growth corridor. Large format site for BTS.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-20', distance: 0.2 },
        demographics: { pop5mi: 55000, medianIncome: 65000, laborForce5mi: 27000 },
        criteria: { hwAccess: 9, zoning: 7, rawLand: 10, laborPool: 6, subFundamentals: 6, cityGrowth: 9, bizFriendly: 9, airportProx: 3, infill: 3, utilities: 5 }
    },
    {
        id: 'dfw-011', name: 'Saginaw/Blue Mound Industrial', market: 'dfw', submarket: 'dfw-north-fort-worth',
        coords: [32.870, -97.36], acreage: 40,
        zoning: 'I (Industrial)', taxRate: 2.35, taxAuthority: 'Tarrant County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Adjacent to Alliance corridor, I-35W access. BNSF rail spur nearby. Established industrial area.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-35W', distance: 0.6 },
        demographics: { pop5mi: 120000, medianIncome: 50000, laborForce5mi: 60000 },
        criteria: { hwAccess: 8, zoning: 10, rawLand: 7, laborPool: 8, subFundamentals: 6, cityGrowth: 9, bizFriendly: 9, airportProx: 8, infill: 7, utilities: 10 }
    },
    {
        id: 'dfw-012', name: 'Stemmons/Manana Dr Infill', market: 'dfw', submarket: 'dfw-stemmons',
        coords: [32.835, -96.88], acreage: 15,
        zoning: 'IM (Industrial Manufacturing)', taxRate: 2.45, taxAuthority: 'Dallas County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Rare Stemmons corridor infill parcel. I-35E frontage. Dense labor pool. Last-mile gold.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-35E', distance: 0.1 },
        demographics: { pop5mi: 280000, medianIncome: 38000, laborForce5mi: 140000 },
        criteria: { hwAccess: 10, zoning: 10, rawLand: 6, laborPool: 10, subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 7, infill: 10, utilities: 10 }
    },

    // ===== AUSTIN =====
    {
        id: 'atx-001', name: 'SH-130/Harold Green Rd', market: 'austin', submarket: 'atx-southeast',
        coords: [30.22, -97.62], acreage: 40,
        zoning: 'LI (Light Industrial)', taxRate: 2.18, taxAuthority: 'Travis County',
        forSale: true, askingPrice: '$3,200,000', listingUrl: 'https://www.loopnet.com/search/land/austin-tx/for-sale/',
        notes: 'SH-130 toll corridor, fastest growing industrial node in Austin. Adjacent to Tesla Gigafactory.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'SH-130', distance: 0.3 },
        demographics: { pop5mi: 75000, medianIncome: 52000, laborForce5mi: 38000 },
        criteria: { hwAccess: 8, zoning: 9, rawLand: 9, laborPool: 7, subFundamentals: 8, cityGrowth: 10, bizFriendly: 8, airportProx: 7, infill: 6, utilities: 9 }
    },
    {
        id: 'atx-002', name: 'Hutto Industrial Park Pad', market: 'austin', submarket: 'atx-round-rock',
        coords: [30.55, -97.55], acreage: 52,
        zoning: 'GC (General Commercial)', taxRate: 2.22, taxAuthority: 'Williamson County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'US-79/SH-130 access. Samsung semiconductor campus nearby driving industrial demand.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'SH-130', distance: 1.5 },
        demographics: { pop5mi: 65000, medianIncome: 68000, laborForce5mi: 32000 },
        criteria: { hwAccess: 7, zoning: 7, rawLand: 10, laborPool: 6, subFundamentals: 6, cityGrowth: 10, bizFriendly: 8, airportProx: 4, infill: 4, utilities: 8 }
    },
    {
        id: 'atx-003', name: 'Burleson Rd Industrial Site', market: 'austin', submarket: 'atx-east',
        coords: [30.32, -97.62], acreage: 22,
        zoning: 'W/LO (Warehouse/Limited Office)', taxRate: 2.18, taxAuthority: 'Travis County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Infill site in East Austin industrial core. US-183 access. Surrounded by existing industrial.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'US-183', distance: 0.5 },
        demographics: { pop5mi: 145000, medianIncome: 45000, laborForce5mi: 72000 },
        criteria: { hwAccess: 7, zoning: 9, rawLand: 8, laborPool: 8, subFundamentals: 8, cityGrowth: 10, bizFriendly: 8, airportProx: 6, infill: 10, utilities: 10 }
    },
    {
        id: 'atx-004', name: 'Lockhart I-130 Logistics Site', market: 'austin', submarket: 'atx-san-marcos',
        coords: [29.90, -97.68], acreage: 75,
        zoning: 'HI (Heavy Industrial)', taxRate: 2.15, taxAuthority: 'Caldwell County',
        forSale: true, askingPrice: '$4,500,000', listingUrl: 'https://www.loopnet.com/search/land/lockhart-tx/for-sale/',
        notes: 'SH-130/US-183 junction. Massive industrial corridor emerging. Low land cost. Lockhart offers tax incentives.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'SH-130', distance: 0.4 },
        demographics: { pop5mi: 28000, medianIncome: 42000, laborForce5mi: 14000 },
        criteria: { hwAccess: 8, zoning: 9, rawLand: 10, laborPool: 5, subFundamentals: 6, cityGrowth: 8, bizFriendly: 8, airportProx: 3, infill: 3, utilities: 7 }
    },
    {
        id: 'atx-005', name: 'Pflugerville/SH-130 Pad', market: 'austin', submarket: 'atx-north',
        coords: [30.44, -97.60], acreage: 30,
        zoning: 'LI (Light Industrial)', taxRate: 2.22, taxAuthority: 'Travis/Williamson',
        forSale: true, askingPrice: '$2,700,000', listingUrl: null,
        notes: 'SH-130 and SH-45 access. Pflugerville ETJ. Emerging industrial node near Dell/Samsung labor pools.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'SH-130', distance: 0.2 },
        demographics: { pop5mi: 95000, medianIncome: 72000, laborForce5mi: 48000 },
        criteria: { hwAccess: 8, zoning: 8, rawLand: 9, laborPool: 7, subFundamentals: 7, cityGrowth: 10, bizFriendly: 8, airportProx: 5, infill: 6, utilities: 9 }
    },
    {
        id: 'atx-006', name: 'Buda/I-35 Industrial Tract', market: 'austin', submarket: 'atx-south',
        coords: [30.09, -97.84], acreage: 45,
        zoning: 'GC (General Commercial)', taxRate: 2.15, taxAuthority: 'Hays County',
        forSale: true, askingPrice: '$3,600,000', listingUrl: 'https://www.loopnet.com/search/land/buda-tx/for-sale/',
        notes: 'I-35 frontage in Buda. Hays County growth explosion. Amazon fulfillment center nearby.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-35', distance: 0.2 },
        demographics: { pop5mi: 68000, medianIncome: 65000, laborForce5mi: 34000 },
        criteria: { hwAccess: 9, zoning: 7, rawLand: 9, laborPool: 7, subFundamentals: 7, cityGrowth: 10, bizFriendly: 8, airportProx: 5, infill: 6, utilities: 9 }
    },

    // ===== SAN ANTONIO =====
    {
        id: 'sat-001', name: 'I-35 South/Laredo Hwy Tract', market: 'san-antonio', submarket: 'sat-south',
        coords: [29.35, -98.50], acreage: 65,
        zoning: 'I-1 (Light Industrial)', taxRate: 2.30, taxAuthority: 'Bexar County',
        forSale: true, askingPrice: '$3,900,000', listingUrl: 'https://www.loopnet.com/search/land/san-antonio-tx/for-sale/',
        notes: 'I-35 frontage, primary logistics corridor to Mexico. Flat terrain. All utilities available.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-35', distance: 0.1 },
        demographics: { pop5mi: 135000, medianIncome: 38000, laborForce5mi: 67000 },
        criteria: { hwAccess: 10, zoning: 9, rawLand: 9, laborPool: 9, subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 5, infill: 6, utilities: 9 }
    },
    {
        id: 'sat-002', name: 'Foster Rd Industrial Pad', market: 'san-antonio', submarket: 'sat-east',
        coords: [29.45, -98.35], acreage: 30,
        zoning: 'I-2 (Heavy Industrial)', taxRate: 2.30, taxAuthority: 'Bexar County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Near I-10 East corridor. Established industrial area with strong blue-collar workforce.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-10', distance: 0.7 },
        demographics: { pop5mi: 155000, medianIncome: 36000, laborForce5mi: 78000 },
        criteria: { hwAccess: 8, zoning: 10, rawLand: 8, laborPool: 10, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 6, infill: 8, utilities: 8 }
    },
    {
        id: 'sat-003', name: 'IH-10 West/Loop 1604', market: 'san-antonio', submarket: 'sat-west',
        coords: [29.45, -98.62], acreage: 48,
        zoning: 'C-3 (General Commercial)', taxRate: 2.30, taxAuthority: 'Bexar County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'I-10/Loop 1604 interchange visibility. Would need rezoning for industrial. Growing corridor.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-10', distance: 0.2 },
        demographics: { pop5mi: 88000, medianIncome: 55000, laborForce5mi: 44000 },
        criteria: { hwAccess: 9, zoning: 5, rawLand: 9, laborPool: 6, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 4, infill: 5, utilities: 9 }
    },
    {
        id: 'sat-004', name: 'Schertz/FM 3009 Industrial', market: 'san-antonio', submarket: 'sat-northeast',
        coords: [29.55, -98.27], acreage: 42,
        zoning: 'M-1 (Light Manufacturing)', taxRate: 2.30, taxAuthority: 'Guadalupe County',
        forSale: true, askingPrice: '$2,940,000', listingUrl: 'https://www.loopnet.com/search/land/schertz-tx/for-sale/',
        notes: 'I-35 NE corridor, Schertz city limits. Toyota plant and Amazon nearby. Strong labor shed.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-35', distance: 0.8 },
        demographics: { pop5mi: 92000, medianIncome: 58000, laborForce5mi: 46000 },
        criteria: { hwAccess: 8, zoning: 9, rawLand: 9, laborPool: 8, subFundamentals: 8, cityGrowth: 9, bizFriendly: 9, airportProx: 5, infill: 7, utilities: 9 }
    },
    {
        id: 'sat-005', name: 'Applewhite Rd/I-37 South', market: 'san-antonio', submarket: 'sat-south',
        coords: [29.32, -98.45], acreage: 100,
        zoning: 'I-1 (Light Industrial)', taxRate: 2.30, taxAuthority: 'Bexar County',
        forSale: true, askingPrice: '$6,000,000', listingUrl: null,
        notes: 'I-37 South corridor to Corpus Christi port. Massive site for mega-warehouse or industrial park. SA port corridor.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-37', distance: 0.5 },
        demographics: { pop5mi: 65000, medianIncome: 35000, laborForce5mi: 32000 },
        criteria: { hwAccess: 9, zoning: 9, rawLand: 10, laborPool: 8, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 3, infill: 4, utilities: 6 }
    },

    // ===== HOUSTON =====
    {
        id: 'hou-001', name: 'US-290/Mueschke Rd Site', market: 'houston', submarket: 'hou-northwest',
        coords: [29.94, -95.60], acreage: 72,
        zoning: 'None (ETJ)', taxRate: 2.35, taxAuthority: 'Harris County',
        forSale: true, askingPrice: '$5,760,000', listingUrl: 'https://www.loopnet.com/search/land/cypress-tx/for-sale/',
        notes: 'US-290 frontage in rapidly growing NW Houston corridor. No Houston zoning applies. Unrestricted use.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'US-290', distance: 0.2 },
        demographics: { pop5mi: 115000, medianIncome: 72000, laborForce5mi: 58000 },
        criteria: { hwAccess: 9, zoning: 8, rawLand: 10, laborPool: 7, subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 5, infill: 5, utilities: 6 }
    },
    {
        id: 'hou-002', name: 'Beltway 8/I-10 East Pad', market: 'houston', submarket: 'hou-east',
        coords: [29.78, -95.15], acreage: 38,
        zoning: 'None (Houston)', taxRate: 2.35, taxAuthority: 'Harris County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Ship Channel adjacent logistics site. I-10 and Beltway 8 access. Heavy industrial neighbors.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-10', distance: 0.3 },
        demographics: { pop5mi: 175000, medianIncome: 42000, laborForce5mi: 88000 },
        criteria: { hwAccess: 10, zoning: 10, rawLand: 7, laborPool: 10, subFundamentals: 8, cityGrowth: 8, bizFriendly: 10, airportProx: 5, infill: 9, utilities: 10 }
    },
    {
        id: 'hou-003', name: 'Grand Parkway/I-45N Tract', market: 'houston', submarket: 'hou-north',
        coords: [29.98, -95.38], acreage: 55,
        zoning: 'None (ETJ)', taxRate: 2.30, taxAuthority: 'Harris/Montgomery',
        forSale: true, askingPrice: '$4,400,000', listingUrl: 'https://www.crexi.com/properties?type=land&location=spring-tx',
        notes: 'Grand Parkway (SH-99) and I-45 interchange. Rapid growth corridor. Near IAH airport.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'SH-99', distance: 0.1 },
        demographics: { pop5mi: 135000, medianIncome: 62000, laborForce5mi: 68000 },
        criteria: { hwAccess: 10, zoning: 8, rawLand: 9, laborPool: 7, subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 8, infill: 5, utilities: 9 }
    },
    {
        id: 'hou-004', name: 'I-69/Beltway 8 South', market: 'houston', submarket: 'hou-southwest',
        coords: [29.62, -95.55], acreage: 42,
        zoning: 'None (Sugar Land ETJ)', taxRate: 2.28, taxAuthority: 'Fort Bend County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Sugar Land area, I-69/US-59 access. Fort Bend County tax advantages. Workforce from Missouri City/Stafford.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-69/US-59', distance: 0.4 },
        demographics: { pop5mi: 145000, medianIncome: 68000, laborForce5mi: 72000 },
        criteria: { hwAccess: 8, zoning: 8, rawLand: 8, laborPool: 7, subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 6, infill: 7, utilities: 9 }
    },
    {
        id: 'hou-005', name: 'Katy Grand Parkway West', market: 'houston', submarket: 'hou-west',
        coords: [29.78, -95.80], acreage: 85,
        zoning: 'None (Katy ETJ)', taxRate: 2.28, taxAuthority: 'Fort Bend/Harris',
        forSale: true, askingPrice: '$6,800,000', listingUrl: 'https://www.loopnet.com/search/land/katy-tx/for-sale/',
        notes: 'I-10/Grand Parkway interchange. Katy mega-growth. Massive e-commerce distribution corridor.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-10', distance: 0.3 },
        demographics: { pop5mi: 125000, medianIncome: 82000, laborForce5mi: 62000 },
        criteria: { hwAccess: 10, zoning: 8, rawLand: 9, laborPool: 6, subFundamentals: 6, cityGrowth: 10, bizFriendly: 10, airportProx: 4, infill: 5, utilities: 9 }
    },
    {
        id: 'hou-006', name: 'Baytown/Garth Rd Industrial', market: 'houston', submarket: 'hou-baytown',
        coords: [29.76, -94.96], acreage: 45,
        zoning: 'HI (Heavy Industrial)', taxRate: 2.35, taxAuthority: 'Harris/Chambers',
        forSale: true, askingPrice: '$2,700,000', listingUrl: null,
        notes: 'Baytown industrial core. Petrochemical labor pool. I-10 and SH-146 access. Low land cost.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-10', distance: 0.6 },
        demographics: { pop5mi: 95000, medianIncome: 48000, laborForce5mi: 48000 },
        criteria: { hwAccess: 8, zoning: 10, rawLand: 8, laborPool: 10, subFundamentals: 8, cityGrowth: 7, bizFriendly: 10, airportProx: 4, infill: 8, utilities: 8 }
    },
    {
        id: 'hou-007', name: 'Humble/Beltway 8 NE Site', market: 'houston', submarket: 'hou-northeast',
        coords: [29.92, -95.22], acreage: 50,
        zoning: 'None (Houston)', taxRate: 2.35, taxAuthority: 'Harris County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'Beltway 8 and US-59/I-69 access. 8 miles from IAH. E-commerce distribution sweet spot.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'Beltway 8', distance: 0.2 },
        demographics: { pop5mi: 155000, medianIncome: 55000, laborForce5mi: 78000 },
        criteria: { hwAccess: 9, zoning: 8, rawLand: 8, laborPool: 8, subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 8, infill: 7, utilities: 9 }
    },

    // ===== CHARLOTTE =====
    {
        id: 'clt-001', name: 'I-85/Westinghouse Blvd', market: 'charlotte', submarket: 'clt-airport-west',
        coords: [35.19, -80.97], acreage: 35,
        zoning: 'I-2 (General Industrial)', taxRate: 1.05, taxAuthority: 'Mecklenburg County',
        forSale: true, askingPrice: '$4,200,000', listingUrl: 'https://www.loopnet.com/search/land/charlotte-nc/for-sale/',
        notes: 'Airport submarket, I-85 access. CLT airport 5 min. Strong institutional demand. All utilities to site.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-85', distance: 0.3 },
        demographics: { pop5mi: 165000, medianIncome: 52000, laborForce5mi: 82000 },
        criteria: { hwAccess: 9, zoning: 10, rawLand: 8, laborPool: 8, subFundamentals: 8, cityGrowth: 9, bizFriendly: 9, airportProx: 10, infill: 8, utilities: 10 }
    },
    {
        id: 'clt-002', name: 'Northlake Industrial Site', market: 'charlotte', submarket: 'clt-north',
        coords: [35.38, -80.85], acreage: 28,
        zoning: 'I-1 (Light Industrial)', taxRate: 1.05, taxAuthority: 'Mecklenburg County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'I-77 access at Exit 28. Last-mile distribution location serving northern Charlotte metros.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-77', distance: 0.5 },
        demographics: { pop5mi: 142000, medianIncome: 62000, laborForce5mi: 71000 },
        criteria: { hwAccess: 8, zoning: 9, rawLand: 7, laborPool: 7, subFundamentals: 7, cityGrowth: 9, bizFriendly: 9, airportProx: 6, infill: 8, utilities: 9 }
    },
    {
        id: 'clt-003', name: 'Mooresville Commerce Park Pad', market: 'charlotte', submarket: 'clt-mooresville',
        coords: [35.58, -80.82], acreage: 50,
        zoning: 'HB (Highway Business)', taxRate: 0.68, taxAuthority: 'Iredell County',
        forSale: true, askingPrice: '$2,500,000', listingUrl: 'https://www.loopnet.com/search/land/mooresville-nc/for-sale/',
        notes: 'I-77 corridor in Iredell County. Lower tax rate. Growing logistics corridor between CLT and Statesville.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-77', distance: 0.4 },
        demographics: { pop5mi: 55000, medianIncome: 58000, laborForce5mi: 28000 },
        criteria: { hwAccess: 8, zoning: 6, rawLand: 10, laborPool: 6, subFundamentals: 6, cityGrowth: 8, bizFriendly: 9, airportProx: 4, infill: 4, utilities: 8 }
    },
    {
        id: 'clt-004', name: 'I-485/Brookshire Fwy Pad', market: 'charlotte', submarket: 'clt-airport-west',
        coords: [35.21, -81.02], acreage: 32,
        zoning: 'I-1 (Light Industrial)', taxRate: 1.05, taxAuthority: 'Mecklenburg County',
        forSale: true, askingPrice: '$3,520,000', listingUrl: null,
        notes: 'I-485 outer loop and I-85 proximity. West Charlotte industrial explosion. Near CLT airport cargo.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-485', distance: 0.2 },
        demographics: { pop5mi: 125000, medianIncome: 48000, laborForce5mi: 62000 },
        criteria: { hwAccess: 9, zoning: 9, rawLand: 8, laborPool: 8, subFundamentals: 8, cityGrowth: 9, bizFriendly: 9, airportProx: 9, infill: 7, utilities: 10 }
    },
    {
        id: 'clt-005', name: 'Concord/I-85 NE Tract', market: 'charlotte', submarket: 'clt-northeast',
        coords: [35.35, -80.62], acreage: 40,
        zoning: 'IND (Industrial)', taxRate: 0.78, taxAuthority: 'Cabarrus County',
        forSale: true, askingPrice: '$2,800,000', listingUrl: 'https://www.loopnet.com/search/land/concord-nc/for-sale/',
        notes: 'I-85 NE corridor near Charlotte Motor Speedway. Cabarrus County lower taxes. Growing industrial node.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-85', distance: 0.6 },
        demographics: { pop5mi: 98000, medianIncome: 55000, laborForce5mi: 49000 },
        criteria: { hwAccess: 8, zoning: 9, rawLand: 9, laborPool: 7, subFundamentals: 7, cityGrowth: 9, bizFriendly: 9, airportProx: 5, infill: 6, utilities: 8 }
    },
    {
        id: 'clt-006', name: 'Mount Holly/I-85 SW Site', market: 'charlotte', submarket: 'clt-southwest',
        coords: [35.28, -81.03], acreage: 55,
        zoning: 'I-2 (General Industrial)', taxRate: 0.99, taxAuthority: 'Gaston County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'I-85 SW corridor in Gaston County. Value play — lower land costs than Mecklenburg. Duke Energy substation adjacent.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-85', distance: 0.4 },
        demographics: { pop5mi: 72000, medianIncome: 45000, laborForce5mi: 36000 },
        criteria: { hwAccess: 8, zoning: 10, rawLand: 9, laborPool: 7, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 5, infill: 5, utilities: 9 }
    }
];
