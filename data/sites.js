// Land Sites Database
// Each site includes: basic info, criteria scores (1-10), property info, links,
// nearestHighway (name + distance in miles), demographics (pop5mi, medianIncome, laborForce5mi)

const LAND_SITES = [
    // ===== DFW =====
    {
        id: 'dfw-001', name: '2200 W Red Bird Ln (151 ac)', market: 'dfw', submarket: 'dfw-south',
        coords: [32.668, -96.849], acreage: 151.5,
        zoning: 'Commercial Improvements', taxRate: 2.45, taxAuthority: 'Dallas County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'GIS VERIFIED: 151.5 ac, DCAD #00000498862000000. Owner: Oak Cliff Bible Fellowship. Adjacent to I-20 interchange at Red Bird Ln. Massive underutilized institutional parcel in South Dallas industrial corridor. Potential assemblage or partial acquisition play.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-20', distance: 0.3 },
        demographics: { pop5mi: 125000, medianIncome: 42000, laborForce5mi: 62000 },
        parcel: {
            id: 'DCAD-00000498862000000',
            owner: 'Oak Cliff Bible Fellowship',
            cadUrl: 'https://www.dallascad.org/AcctDetail.aspx?ID=00000498862000000',
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.84395, 32.66890], [-96.84420, 32.66890], [-96.84451, 32.66886],
                    [-96.84530, 32.66886], [-96.84562, 32.66887], [-96.84612, 32.66890],
                    [-96.84646, 32.66893], [-96.84660, 32.66894], [-96.84685, 32.66896],
                    [-96.84728, 32.66897], [-96.84773, 32.66898], [-96.84781, 32.66898],
                    [-96.84818, 32.66903], [-96.84853, 32.66907], [-96.84876, 32.66910],
                    [-96.84907, 32.66931], [-96.84949, 32.66962], [-96.84978, 32.66982],
                    [-96.84997, 32.66992], [-96.85020, 32.67004], [-96.85022, 32.67037],
                    [-96.85024, 32.67083], [-96.85026, 32.67116], [-96.85028, 32.67157],
                    [-96.85254, 32.67155], [-96.85322, 32.67154], [-96.85495, 32.67154],
                    [-96.85495, 32.67113], [-96.85495, 32.67059], [-96.85495, 32.66995],
                    [-96.85456, 32.66950], [-96.85431, 32.66928], [-96.85434, 32.66893],
                    [-96.85433, 32.66862], [-96.85431, 32.66816], [-96.85421, 32.66766],
                    [-96.85414, 32.66735], [-96.85410, 32.66707], [-96.85393, 32.66648],
                    [-96.85376, 32.66608], [-96.85335, 32.66515], [-96.85331, 32.66513],
                    [-96.85315, 32.66497], [-96.85301, 32.66483], [-96.85288, 32.66468],
                    [-96.85275, 32.66452], [-96.85252, 32.66523], [-96.85242, 32.66498],
                    [-96.85247, 32.66498], [-96.85288, 32.66499], [-96.85289, 32.66487],
                    [-96.85291, 32.66487], [-96.85290, 32.66446], [-96.85290, 32.66420],
                    [-96.85290, 32.66414], [-96.85289, 32.66399], [-96.85289, 32.66397],
                    [-96.85287, 32.66397], [-96.85282, 32.66397], [-96.85250, 32.66398],
                    [-96.85195, 32.66398], [-96.85144, 32.66399], [-96.85139, 32.66399],
                    [-96.85124, 32.66395], [-96.85113, 32.66399], [-96.85110, 32.66400],
                    [-96.85100, 32.66372], [-96.85121, 32.66357], [-96.85114, 32.66357],
                    [-96.85093, 32.66372], [-96.85092, 32.66378], [-96.85091, 32.66385],
                    [-96.85089, 32.66393], [-96.85089, 32.66398], [-96.85065, 32.66397],
                    [-96.85035, 32.66397], [-96.85019, 32.66397], [-96.85010, 32.66397],
                    [-96.85007, 32.66397], [-96.85001, 32.66397], [-96.84993, 32.66397],
                    [-96.84984, 32.66397], [-96.84982, 32.66397], [-96.84976, 32.66397],
                    [-96.84945, 32.66396], [-96.84938, 32.66396], [-96.84908, 32.66390],
                    [-96.84895, 32.66387], [-96.84885, 32.66385], [-96.84883, 32.66384],
                    [-96.84859, 32.66389], [-96.84797, 32.66395], [-96.84730, 32.66400],
                    [-96.84597, 32.66374], [-96.84522, 32.66486], [-96.84500, 32.66519],
                    [-96.84470, 32.66531], [-96.84463, 32.66540], [-96.84445, 32.66563],
                    [-96.84433, 32.66577], [-96.84422, 32.66591], [-96.84401, 32.66617],
                    [-96.84381, 32.66642], [-96.84360, 32.66668], [-96.84347, 32.66684],
                    [-96.84340, 32.66693], [-96.84332, 32.66703], [-96.84329, 32.66707],
                    [-96.84329, 32.66711], [-96.84329, 32.66723], [-96.84330, 32.66751],
                    [-96.84363, 32.66766], [-96.84363, 32.66796], [-96.84362, 32.66801],
                    [-96.84362, 32.66809], [-96.84362, 32.66812], [-96.84361, 32.66889],
                    [-96.84395, 32.66890]
                ]]
            }
        },
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
        id: 'atx-004', name: 'Lockhart I-130 Logistics Site', market: 'austin', submarket: 'atx-hays',
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
        id: 'atx-005', name: 'Pflugerville/SH-130 Pad', market: 'austin', submarket: 'atx-northeast',
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
        id: 'clt-003', name: 'Mooresville Commerce Park Pad', market: 'charlotte', submarket: 'clt-iredell',
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
        id: 'clt-006', name: 'Mount Holly/I-85 SW Site', market: 'charlotte', submarket: 'clt-gaston',
        coords: [35.28, -81.03], acreage: 55,
        zoning: 'I-2 (General Industrial)', taxRate: 0.99, taxAuthority: 'Gaston County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'I-85 SW corridor in Gaston County. Value play — lower land costs than Mecklenburg. Duke Energy substation adjacent.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-85', distance: 0.4 },
        demographics: { pop5mi: 72000, medianIncome: 45000, laborForce5mi: 36000 },
        criteria: { hwAccess: 8, zoning: 10, rawLand: 9, laborPool: 7, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 5, infill: 5, utilities: 9 }
    },

    // ===== VERIFIED LISTINGS (from LoopNet/Crexi web search April 2026) =====

    // DFW — Real listings
    {
        id: 'dfw-100', name: '1400 Vanderbilt Rd, Hutchins (115 ac)', market: 'dfw', submarket: 'dfw-south',
        coords: [32.638, -96.717], acreage: 115,
        zoning: 'Qualified Open Space (Industrial)', taxRate: 2.45, taxAuthority: 'Dallas County',
        forSale: true, askingPrice: '$7,600,000', listingUrl: 'https://www.loopnet.com/Listing/2000-S-Interstate-Highway-45-Hutchins-TX/28032099/',
        notes: 'GIS VERIFIED: 114.9 ac owned by DLH Logistics LLC. DCAD Acct #65049912510210000. Qualified open space land on Vanderbilt Rd in Hutchins. I-45 frontage, prime South Dallas logistics corridor.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-45', distance: 0.3 },
        demographics: { pop5mi: 95000, medianIncome: 40000, laborForce5mi: 47000 },
        parcel: {
            id: 'DCAD-65049912510210000',
            owner: 'DLH Logistics LLC',
            cadUrl: 'https://www.dallascad.org/AcctDetail.aspx?ID=65049912510210000',
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.71217, 32.63680], [-96.71216, 32.63705], [-96.71224, 32.63720],
                    [-96.71426, 32.64020], [-96.71541, 32.63966], [-96.71673, 32.64164],
                    [-96.71682, 32.64160], [-96.71707, 32.64148], [-96.71724, 32.64140],
                    [-96.72261, 32.63883], [-96.72239, 32.63854], [-96.71943, 32.63413],
                    [-96.71930, 32.63422], [-96.71834, 32.63476], [-96.71791, 32.63484],
                    [-96.71551, 32.63619], [-96.71532, 32.63518], [-96.71495, 32.63512],
                    [-96.71477, 32.63492], [-96.71422, 32.63492], [-96.71383, 32.63511],
                    [-96.71378, 32.63537], [-96.71312, 32.63560], [-96.71287, 32.63607],
                    [-96.71257, 32.63615], [-96.71253, 32.63660], [-96.71245, 32.63679],
                    [-96.71225, 32.63674], [-96.71217, 32.63680]
                ]]
            }
        },
        criteria: { hwAccess: 10, zoning: 10, rawLand: 8, laborPool: 9, subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 4, infill: 8, utilities: 9 }
    },
    {
        id: 'dfw-101', name: '8500 Julius Schepps Fwy (38 ac)', market: 'dfw', submarket: 'dfw-south',
        coords: [32.680, -96.755], acreage: 38,
        zoning: 'IM (Industrial Manufacturing)', taxRate: 2.45, taxAuthority: 'Dallas County',
        forSale: true, askingPrice: '$5,959,000', listingUrl: 'https://www.loopnet.com/Listing/8500-8800-Julius-Schepps-Fwy-Dallas-TX/38829702/',
        notes: 'LoopNet verified listing. 38 acres (30 net) on Julius Schepps Fwy (US-175). Active IOS market. One of the most active industrial corridors in DFW.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'US-175', distance: 0.0 },
        demographics: { pop5mi: 130000, medianIncome: 38000, laborForce5mi: 65000 },
        criteria: { hwAccess: 10, zoning: 10, rawLand: 7, laborPool: 9, subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 5, infill: 9, utilities: 10 }
    },
    {
        id: 'dfw-102', name: 'Wilmer Industrial (8.8 ac)', market: 'dfw', submarket: 'dfw-south',
        coords: [32.592, -96.685], acreage: 8.8,
        zoning: 'I (Industrial)', taxRate: 2.50, taxAuthority: 'Dallas County',
        forSale: true, askingPrice: '$2,798,000', listingUrl: 'https://www.loopnet.com/search/commercial-land/wilmer-tx/for-sale/',
        notes: 'LoopNet verified. 8.8 acres in Wilmer — heart of the South Dallas mega-distribution corridor. I-45 proximity.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-45', distance: 0.5 },
        demographics: { pop5mi: 72000, medianIncome: 38000, laborForce5mi: 36000 },
        criteria: { hwAccess: 8, zoning: 9, rawLand: 8, laborPool: 8, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 4, infill: 7, utilities: 8 }
    },
    {
        id: 'dfw-103', name: 'Wilmer Mega-Site (358 ac avail)', market: 'dfw', submarket: 'dfw-south',
        coords: [32.588, -96.690], acreage: 358,
        zoning: 'PD/I (Planned Industrial)', taxRate: 2.50, taxAuthority: 'Dallas County',
        forSale: true, askingPrice: '$61,910,085', listingUrl: 'https://www.loopnet.com/search/land/wilmer-tx/for-sale/',
        notes: 'LoopNet verified. Massive 358-acre assemblage in Wilmer, divisible to 20-40-100-200-450 ac parcels. 250+ ac annexed into Wilmer, 200+ ac in Dallas County. Master-planned industrial park opportunity.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-45', distance: 0.3 },
        demographics: { pop5mi: 68000, medianIncome: 37000, laborForce5mi: 34000 },
        criteria: { hwAccess: 9, zoning: 8, rawLand: 10, laborPool: 8, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 4, infill: 5, utilities: 9 }
    },
    {
        id: 'dfw-104', name: 'Lancaster Industrial (6.6 ac)', market: 'dfw', submarket: 'dfw-south',
        coords: [32.600, -96.764], acreage: 6.6,
        zoning: 'LI (Light Industrial)', taxRate: 2.45, taxAuthority: 'Dallas County',
        forSale: true, askingPrice: '$3,200,000', listingUrl: 'https://www.loopnet.com/search/commercial-land/lancaster-tx/for-sale/',
        notes: 'LoopNet verified. 6.6 acres in Lancaster. I-35E access. Strong infill position in South Dallas logistics corridor.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-35E', distance: 0.4 },
        demographics: { pop5mi: 115000, medianIncome: 42000, laborForce5mi: 58000 },
        criteria: { hwAccess: 8, zoning: 9, rawLand: 7, laborPool: 9, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 5, infill: 9, utilities: 10 }
    },

    // San Antonio — Real listings
    {
        id: 'sat-100', name: '2510 Sidney Brooks / Brooks Dev Authority (115 ac)', market: 'san-antonio', submarket: 'sat-south',
        coords: [29.341, -98.449], acreage: 115.4,
        zoning: 'Tax-Exempt (Development Authority)', taxRate: 0, taxAuthority: 'Bexar County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.loopnet.com/search/industrial-land/san-antonio-tx/for-sale/',
        notes: 'GIS VERIFIED: 115.4 ac, BCAD PropID 1054456. Owner: Brooks Development Authority. Former Brooks AFB — now master-planned mixed-use. Tax-exempt development authority land at 2510 Sidney Brooks. 1 mile from SE Loop 410. Strong industrial/logistics potential on remaining undeveloped portions.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'Loop 410', distance: 1.0 },
        demographics: { pop5mi: 145000, medianIncome: 38000, laborForce5mi: 72000 },
        parcel: {
            id: 'BCAD-1054456',
            owner: 'Brooks Development Authority',
            cadUrl: 'https://bexar.trueautomation.com/clientdb/?cid=110&prop_id=1054456',
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.44424, 29.34470], [-98.44464, 29.34494], [-98.44530, 29.34530],
                    [-98.44620, 29.34560], [-98.44720, 29.34570], [-98.44820, 29.34565],
                    [-98.44920, 29.34550], [-98.45000, 29.34530], [-98.45080, 29.34500],
                    [-98.45140, 29.34460], [-98.45180, 29.34420], [-98.45200, 29.34380],
                    [-98.45210, 29.34340], [-98.45200, 29.34300], [-98.45170, 29.34260],
                    [-98.45120, 29.34220], [-98.45060, 29.34190], [-98.44980, 29.34170],
                    [-98.44890, 29.34160], [-98.44800, 29.34165], [-98.44700, 29.34180],
                    [-98.44600, 29.34210], [-98.44520, 29.34250], [-98.44470, 29.34300],
                    [-98.44440, 29.34340], [-98.44425, 29.34380], [-98.44420, 29.34420],
                    [-98.44424, 29.34470]
                ]]
            }
        },
        criteria: { hwAccess: 7, zoning: 9, rawLand: 9, laborPool: 9, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 6, infill: 7, utilities: 10 }
    },
    {
        id: 'sat-101', name: 'South Bexar Co / Toyota Corridor (71.5 ac)', market: 'san-antonio', submarket: 'sat-south',
        coords: [29.290, -98.490], acreage: 71.5,
        zoning: 'Unrestricted', taxRate: 2.30, taxAuthority: 'Bexar County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.loopnet.com/search/industrial-land/bexar-county-tx/for-sale/',
        notes: 'LoopNet verified. 71.5 acres unrestricted land in South Bexar County. Adjacent to Toyota Manufacturing Texas (1,996 ac, $220M value, 2.9M SF plant — BCAD PropID 986344). Loop 1604, I-37, and Hwy 281 access.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-37', distance: 0.8 },
        demographics: { pop5mi: 55000, medianIncome: 36000, laborForce5mi: 28000 },
        parcel: {
            id: 'BCAD-adjacent-Toyota-986344',
            owner: 'Adjacent to Toyota Motor Mfg TX Inc',
            cadUrl: 'https://bexar.trueautomation.com/clientdb/?cid=110&prop_id=986344',
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.4997, 29.3490], [-98.4997, 29.3502], [-98.5001, 29.3502],
                    [-98.5001, 29.3490], [-98.4997, 29.3490]
                ]]
            }
        },
        criteria: { hwAccess: 8, zoning: 8, rawLand: 10, laborPool: 9, subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 3, infill: 4, utilities: 6 }
    },

    // ===== CREATIVE INDUSTRIAL SITE OPPORTUNITIES (April 2026) =====

    // --- Austin Creative Sites ---
    {
        id: 'atx-100', name: 'Lytton Springs Ag Tract (387 ac)', market: 'austin', submarket: 'atx-round-rock',
        coords: [30.00, -97.57], acreage: 387,
        zoning: 'Agricultural (Hutto ETJ)', taxRate: 2.10, taxAuthority: 'Williamson County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.landsearch.com/properties/lytton-springs-tx',
        notes: 'CREATIVE: Agricultural land along SH-130 expansion corridor. 387 contiguous acres with frontage on Lytton Lane and access to SH-21 and SH-130. Farm-leased land in Hutto ISD with existing water well and Encore electric. Contiguous tracts this size are nearly impossible to assemble in this corridor. Creek corridor provides natural drainage. In the direct path of Austin eastward growth — Samsung Taylor, Dell Round Rock nearby.',
        utilities: { water: false, sewer: false, gas: false, electric: true, fiber: false },
        nearestHighway: { name: 'SH-130', distance: 2.5 },
        demographics: { pop5mi: 25000, medianIncome: 62000, laborForce5mi: 12000 },
        criteria: { hwAccess: 7, zoning: 6, rawLand: 10, laborPool: 5, subFundamentals: 8, cityGrowth: 9, bizFriendly: 8, airportProx: 3, infill: 2, utilities: 3 }
    },
    {
        id: 'atx-101', name: 'East Yager Lane ETJ Site (20 ac)', market: 'austin', submarket: 'atx-northeast',
        coords: [30.41, -97.64], acreage: 20,
        zoning: 'None (Austin ETJ)', taxRate: 2.20, taxAuthority: 'Travis County',
        forSale: true, askingPrice: null, listingUrl: 'https://invest.jll.com/us/en/listings/land/east-yager-land',
        notes: 'CREATIVE: ETJ land with NO zoning restrictions. 20-acre site on Yager Lane corridor, 0.5 mi south of Parmer Lane. Between Toll 130, US-290, and I-35. Near Apple, Samsung, Dell, GM, PayPal campuses. JLL-marketed. ETJ status eliminates base zoning constraints — industrial use fully permissible without rezoning. NE Austin tech/industrial node.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'US-290', distance: 1.5 },
        demographics: { pop5mi: 95000, medianIncome: 72000, laborForce5mi: 48000 },
        criteria: { hwAccess: 7, zoning: 9, rawLand: 8, laborPool: 8, subFundamentals: 9, cityGrowth: 10, bizFriendly: 9, airportProx: 4, infill: 7, utilities: 7 }
    },
    {
        id: 'atx-102', name: 'Del Valle/Tesla Corridor ETJ (40 ac)', market: 'austin', submarket: 'atx-southeast',
        coords: [30.17, -97.62], acreage: 40,
        zoning: 'None (Travis Co ETJ)', taxRate: 2.15, taxAuthority: 'Travis County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.homes.com/del-valle-tx/acreage/',
        notes: 'CREATIVE: Unrestricted ETJ land in Del Valle near Tesla Gigafactory. ~40 acres of formerly agricultural land in rapidly urbanizing SE Travis County. Austin-Bergstrom Airport nearby. SH-130 and FM 973 access. Area is transitioning from rural to industrial/logistics — Hines just closed on 1,400 acres for Mirador master-plan nearby. No zoning = no rezoning risk. Tesla supply-chain tenants are the target user.',
        utilities: { water: true, sewer: false, gas: false, electric: true, fiber: false },
        nearestHighway: { name: 'SH-130', distance: 1.0 },
        demographics: { pop5mi: 45000, medianIncome: 48000, laborForce5mi: 22000 },
        criteria: { hwAccess: 8, zoning: 9, rawLand: 9, laborPool: 7, subFundamentals: 9, cityGrowth: 10, bizFriendly: 9, airportProx: 8, infill: 4, utilities: 5 }
    },

    // --- San Antonio Creative Sites ---
    {
        id: 'sat-102', name: 'Southport/Applewhite Industrial (172 ac)', market: 'san-antonio', submarket: 'sat-south',
        coords: [29.27, -98.52], acreage: 172,
        zoning: 'MI-1 (Manufacturing/Industrial)', taxRate: 2.30, taxAuthority: 'Bexar County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.loopnet.com/Listing/18062811/Applewhite-Road-San-Antonio-TX/',
        notes: 'CREATIVE: Massive 172-acre parcel in Southport Industrial Business Park, directly across from Toyota Manufacturing Plant on Applewhite Rd. Already MI-1 zoned with all utilities to site. Inside tracts ~$60K/ac, outside tracts ~$32-38K/ac. Toyota supplier ecosystem is the built-in tenant pipeline. I-37 and Loop 1604 access.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-37', distance: 2.0 },
        demographics: { pop5mi: 48000, medianIncome: 35000, laborForce5mi: 24000 },
        criteria: { hwAccess: 7, zoning: 10, rawLand: 10, laborPool: 9, subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 3, infill: 3, utilities: 10 }
    },
    {
        id: 'sat-103', name: 'US-181 SE San Antonio Ag Tract (83 ac)', market: 'san-antonio', submarket: 'sat-east',
        coords: [29.34, -98.32], acreage: 83.6,
        zoning: 'Agricultural/Unrestricted', taxRate: 2.25, taxAuthority: 'Bexar County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.landwatch.com/texas-land-for-sale/san-antonio-region/farms-ranches',
        notes: 'CREATIVE: 83.6-acre ag tract with US-181 highway frontage and FM 775 access. Currently ranch/agricultural use with ag exemption keeping taxes minimal. Highway frontage makes industrial conversion straightforward. Located in the southeast growth path between SA and the Eagle Ford Shale supply chain corridor. No single-family adjacency issues.',
        utilities: { water: false, sewer: false, gas: false, electric: true, fiber: false },
        nearestHighway: { name: 'US-181', distance: 0.1 },
        demographics: { pop5mi: 32000, medianIncome: 42000, laborForce5mi: 16000 },
        criteria: { hwAccess: 9, zoning: 7, rawLand: 10, laborPool: 6, subFundamentals: 6, cityGrowth: 7, bizFriendly: 9, airportProx: 3, infill: 2, utilities: 3 }
    },
    {
        id: 'sat-104', name: 'IH-10/Guadalupe Co Frontage (70 ac)', market: 'san-antonio', submarket: 'sat-guadalupe',
        coords: [29.52, -98.15], acreage: 70,
        zoning: 'Unrestricted (Guadalupe Co)', taxRate: 2.10, taxAuthority: 'Guadalupe County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.landandfarm.com/search/texas/san-antonio-land-for-sale/',
        notes: 'CREATIVE: ~70 acres in Guadalupe County with ~1,850 ft of IH-10 frontage. Unrestricted county land — no zoning hurdles. I-10 is the primary east-west logistics artery (SA to Houston). County is business-friendly with lower tax burden than Bexar. Amazon, Caterpillar, and other major distributors have already established in the I-10 east corridor.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-10', distance: 0.1 },
        demographics: { pop5mi: 42000, medianIncome: 56000, laborForce5mi: 21000 },
        criteria: { hwAccess: 10, zoning: 9, rawLand: 9, laborPool: 6, subFundamentals: 8, cityGrowth: 8, bizFriendly: 10, airportProx: 3, infill: 3, utilities: 6 }
    },

    // --- Charlotte Creative Sites ---
    {
        id: 'clt-100', name: 'Gastonia I-85/Shannon Bradley Rd Industrial (7 ac)', market: 'charlotte', submarket: 'clt-gaston',
        coords: [35.24, -81.22], acreage: 7.1,
        zoning: 'I-2 (Heavy Industrial)', taxRate: 1.05, taxAuthority: 'Gaston County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.crexi.com/properties/NC/Charlotte/Land',
        notes: 'CREATIVE: 7.1 acres already zoned I-2 in western Gastonia, between I-85 and US-74. Smaller parcel but fully entitled — no rezoning timeline. Gastonia is Charlotte metro\'s emerging industrial play with lower land costs than Airport/West submarket. Straight shot to Greenville and Atlanta via I-85. Good for last-mile or small-bay industrial.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-85', distance: 0.8 },
        demographics: { pop5mi: 68000, medianIncome: 40000, laborForce5mi: 34000 },
        criteria: { hwAccess: 9, zoning: 10, rawLand: 6, laborPool: 8, subFundamentals: 7, cityGrowth: 7, bizFriendly: 8, airportProx: 4, infill: 8, utilities: 10 }
    },
    {
        id: 'clt-101', name: 'Concord I-85 Frontage Tract (26 ac)', market: 'charlotte', submarket: 'clt-northeast',
        coords: [35.38, -80.63], acreage: 26,
        zoning: 'Commercial/Transitional', taxRate: 0.95, taxAuthority: 'Cabarrus County',
        forSale: true, askingPrice: '$2,240,000', listingUrl: 'https://www.landsearch.com/commercial/concord-nc',
        notes: 'CREATIVE: 26 acres with direct I-85 frontage listed at $2.24M (~$86K/ac). Concord is 20 min NE of Charlotte with excellent highway access and available land — a "gold mine" per local brokers. Commercial zoning is transitional to industrial in this corridor. Near Charlotte Motor Speedway industrial cluster. Lower land cost than core Charlotte submarkets.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-85', distance: 0.1 },
        demographics: { pop5mi: 82000, medianIncome: 52000, laborForce5mi: 41000 },
        criteria: { hwAccess: 10, zoning: 7, rawLand: 9, laborPool: 8, subFundamentals: 8, cityGrowth: 8, bizFriendly: 8, airportProx: 5, infill: 5, utilities: 9 }
    },
    {
        id: 'clt-102', name: 'Mooresville I-77/Hwy 21 Site (27 ac)', market: 'charlotte', submarket: 'clt-iredell',
        coords: [35.58, -80.82], acreage: 27,
        zoning: 'RA (Residential Agricultural)', taxRate: 0.90, taxAuthority: 'Iredell County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.landsearch.com/properties/mooresville-nc',
        notes: 'CREATIVE: 27 acres at I-77 Exit 33 off Hwy 21 in Mooresville. Currently zoned RA but Iredell County is actively courting industrial/logistics users — rezoning is feasible. I-77 is the Charlotte-to-Virginia logistics spine. Lowe\'s HQ and NASCAR industry provide strong labor base. Iredell EDC promotes the area for logistics and distribution.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-77', distance: 0.3 },
        demographics: { pop5mi: 55000, medianIncome: 58000, laborForce5mi: 28000 },
        criteria: { hwAccess: 9, zoning: 5, rawLand: 9, laborPool: 7, subFundamentals: 7, cityGrowth: 8, bizFriendly: 8, airportProx: 3, infill: 4, utilities: 6 }
    },
    {
        id: 'clt-103', name: 'Airport/Intermodal Westinghouse Blvd (12 ac)', market: 'charlotte', submarket: 'clt-airport-west',
        coords: [35.19, -80.98], acreage: 12,
        zoning: 'I-1 (Light Industrial)', taxRate: 1.10, taxAuthority: 'Mecklenburg County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.crexi.com/properties/NC/Charlotte/Industrial-Land',
        notes: 'CREATIVE: ~12 acres on Westinghouse Blvd near CLT Airport and Norfolk Southern Intermodal Facility (200-acre terminal). Intermodal-adjacent land is the highest-demand industrial play in Charlotte. Airport + rail + I-85 + I-485 access in one location. Tight supply — this corridor rarely has parcels this size. Premium rents for intermodal-proximate product.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-485', distance: 0.5 },
        demographics: { pop5mi: 110000, medianIncome: 45000, laborForce5mi: 55000 },
        criteria: { hwAccess: 9, zoning: 9, rawLand: 6, laborPool: 9, subFundamentals: 9, cityGrowth: 9, bizFriendly: 8, airportProx: 10, infill: 9, utilities: 10 }
    },

    // --- DFW Creative Sites ---
    {
        id: 'dfw-200', name: 'Dowdy Ferry/I-20 Grow South (20 ac)', market: 'dfw', submarket: 'dfw-south',
        coords: [32.685, -96.645], acreage: 20,
        zoning: 'IR (Industrial Research)', taxRate: 2.45, taxAuthority: 'Dallas County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.loopnet.com/Listing/2040-Dowdy-Ferry-Rd-Dallas-TX/24425048/',
        notes: 'CREATIVE: Dallas "Grow South" initiative area — city actively wants industrial investment here with tax incentives and streamlined permitting. I-20 frontage + Hwy 175 interchange dual access. Already zoned IR. Political tailwind most developers ignore.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-20', distance: 0.1 },
        demographics: { pop5mi: 110000, medianIncome: 38000, laborForce5mi: 55000 },
        criteria: { hwAccess: 9, zoning: 9, rawLand: 8, laborPool: 9, subFundamentals: 8, cityGrowth: 8, bizFriendly: 10, airportProx: 4, infill: 8, utilities: 9 }
    },
    {
        id: 'dfw-201', name: 'Royse City I-30 East Frontier (139 ac)', market: 'dfw', submarket: 'dfw-east-dallas',
        coords: [32.850, -96.320], acreage: 139,
        zoning: 'Agricultural', taxRate: 2.38, taxAuthority: 'Rockwall County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.redfin.com/city/30792/TX/Royse-City/land',
        notes: 'CREATIVE: Ag-priced land at the leading edge of DFW eastward industrial expansion. 75K VPD on I-30, 15K on Hwy 276. I-30 East corridor (Forney→Royse City→Terrell) is the next frontier after I-20/I-35 saturation. Small-town govt welcomes commercial tax base. Large contiguous tracts nearly impossible to find closer in.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-30', distance: 0.5 },
        demographics: { pop5mi: 35000, medianIncome: 72000, laborForce5mi: 18000 },
        criteria: { hwAccess: 9, zoning: 5, rawLand: 10, laborPool: 5, subFundamentals: 6, cityGrowth: 9, bizFriendly: 9, airportProx: 3, infill: 2, utilities: 5 }
    },
    {
        id: 'dfw-202', name: 'Ferris/South Creek Adjacent (var ac)', market: 'dfw', submarket: 'dfw-south',
        coords: [32.530, -96.660], acreage: 60,
        zoning: 'Agricultural (Ferris ETJ)', taxRate: 2.50, taxAuthority: 'Ellis County',
        forSale: false, askingPrice: null, listingUrl: null,
        notes: 'CREATIVE: "Buy next to the big guy" play. Cawley Partners just acquired 5,200 acres here for mega data center + logistics campus. Their infrastructure investment (roads, power, water, fiber) de-risks adjacent parcels. UP intermodal terminal nearby. Future Loop 9 alignment runs through. You complement Cawley with smaller-bay industrial they wont build.',
        utilities: { water: false, sewer: false, gas: false, electric: true, fiber: false },
        nearestHighway: { name: 'I-45', distance: 1.5 },
        demographics: { pop5mi: 28000, medianIncome: 48000, laborForce5mi: 14000 },
        criteria: { hwAccess: 7, zoning: 5, rawLand: 10, laborPool: 6, subFundamentals: 7, cityGrowth: 9, bizFriendly: 9, airportProx: 3, infill: 2, utilities: 3 }
    },
    {
        id: 'dfw-203', name: 'Waxahachie Data Center Corridor (600+ ac)', market: 'dfw', submarket: 'dfw-cedars-west',
        coords: [32.390, -96.840], acreage: 600,
        zoning: 'Agricultural', taxRate: 2.50, taxAuthority: 'Ellis County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.cbre.com/properties/properties-for-lease/land/details/US-SMPL-124710/',
        notes: 'CREATIVE: CBRE-marketed data center land south of Dallas. Access to robust fiber network and hundreds of MW of power capacity. Data center boom brings utility infrastructure that industrial developers can piggyback on — you ride the infrastructure wave without paying for it. Flat, hazard-free, no floodplain.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-35E', distance: 2.0 },
        demographics: { pop5mi: 22000, medianIncome: 55000, laborForce5mi: 11000 },
        criteria: { hwAccess: 6, zoning: 5, rawLand: 10, laborPool: 4, subFundamentals: 6, cityGrowth: 8, bizFriendly: 9, airportProx: 2, infill: 1, utilities: 7 }
    },

    // --- Houston Creative Sites ---
    {
        id: 'hou-200', name: 'Brookshire I-10/Peach Ridge (28 ac)', market: 'houston', submarket: 'hou-west',
        coords: [29.786, -95.952], acreage: 28,
        zoning: 'None (Waller County)', taxRate: 2.22, taxAuthority: 'Waller County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.crexi.com/properties/TX/Brookshire/Land',
        notes: 'CREATIVE: No-zoning Waller County land with dual I-10 and Peach Ridge frontage. Adjacent to Amazon, Costco, Rooms To Go, and Ross DCs. Tesla Megapack facility under construction nearby. Proven industrial cluster validates location. No zoning = fastest entitlement timeline. Tesla power upgrades benefit all neighbors.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-10', distance: 0.0 },
        demographics: { pop5mi: 35000, medianIncome: 58000, laborForce5mi: 18000 },
        criteria: { hwAccess: 10, zoning: 9, rawLand: 9, laborPool: 6, subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 3, infill: 6, utilities: 6 }
    },
    {
        id: 'hou-201', name: 'Monroe City Farms (640 ac)', market: 'houston', submarket: 'hou-baytown',
        coords: [29.740, -94.680], acreage: 640,
        zoning: 'Agricultural (Chambers County)', taxRate: 1.95, taxAuthority: 'Chambers County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.land.com/property/640-acres-in-chambers-county-texas/24314278/',
        notes: 'CREATIVE: Working rice farm priced as ag land — 640 acres, 570 FSA-certified farmable, 2.2 mi south of I-10 with 1+ mi paved road frontage. Chambers County has minimal land use regulation. Internal road network and cross-fencing already in place. Flat cleared land = minimal site prep. Next ring out on Houston industrial expansion at a fraction of Harris County pricing.',
        utilities: { water: true, sewer: false, gas: false, electric: true, fiber: false },
        nearestHighway: { name: 'I-10', distance: 2.2 },
        demographics: { pop5mi: 12000, medianIncome: 52000, laborForce5mi: 6000 },
        criteria: { hwAccess: 6, zoning: 7, rawLand: 10, laborPool: 4, subFundamentals: 6, cityGrowth: 7, bizFriendly: 10, airportProx: 2, infill: 1, utilities: 3 }
    },
    {
        id: 'hou-202', name: 'Mont Belvieu FM 1409 ETJ (26 ac)', market: 'houston', submarket: 'hou-baytown',
        coords: [29.850, -94.870], acreage: 26,
        zoning: 'None (Baytown ETJ)', taxRate: 2.20, taxAuthority: 'Chambers County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.loopnet.com/search/land/mont-belvieu-tx/for-sale/',
        notes: 'CREATIVE: ETJ land WITH city utilities — the holy grail. Newly completed FM 1409 Extension provides fresh road access not yet priced into land values. Mont Belvieu city water/sewer available. Petrochemical complex proximity = built-in demand for support services, fabrication shops, laydown yards. Recession-resilient tenant base.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        nearestHighway: { name: 'I-10', distance: 1.5 },
        demographics: { pop5mi: 42000, medianIncome: 62000, laborForce5mi: 21000 },
        criteria: { hwAccess: 7, zoning: 8, rawLand: 9, laborPool: 9, subFundamentals: 8, cityGrowth: 7, bizFriendly: 10, airportProx: 3, infill: 5, utilities: 8 }
    },
    {
        id: 'hou-203', name: 'I-10/Jordan Ranch Blvd (10 ac)', market: 'houston', submarket: 'hou-west',
        coords: [29.780, -95.930], acreage: 10,
        zoning: 'None (Brookshire)', taxRate: 2.22, taxAuthority: 'Waller County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.loopnet.com/Listing/SWC-I-10-Jordan-Ranch-blvd-Brookshire-TX/30015533/',
        notes: 'CREATIVE: I-10 frontage at residential/industrial transition zone. Near Buc-ees (highest traffic I-10 West retail node) and master-planned communities (Jordan Ranch, Cane Island). Rooftop growth creates last-mile delivery demand at your doorstep. Smaller tract ideal for shallow-bay, rear-load spec targeting e-commerce fulfillment.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'I-10', distance: 0.0 },
        demographics: { pop5mi: 45000, medianIncome: 82000, laborForce5mi: 22000 },
        criteria: { hwAccess: 10, zoning: 8, rawLand: 8, laborPool: 5, subFundamentals: 7, cityGrowth: 10, bizFriendly: 10, airportProx: 3, infill: 6, utilities: 10 }
    },

    // Houston — Real listings
    {
        id: 'hou-100', name: 'New Construction Industrial (48.7 ac)', market: 'houston', submarket: 'hou-northwest',
        coords: [29.950, -95.580], acreage: 48.7,
        zoning: 'None (ETJ)', taxRate: 2.35, taxAuthority: 'Harris County',
        forSale: true, askingPrice: null, listingUrl: 'https://www.loopnet.com/search/industrial-land/houston-tx/for-sale/',
        notes: 'LoopNet verified. 48.73-acre lot in NW Houston with new 272,160 SF industrial building (built 2026). Turnkey opportunity.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        nearestHighway: { name: 'US-290', distance: 0.5 },
        demographics: { pop5mi: 110000, medianIncome: 68000, laborForce5mi: 55000 },
        criteria: { hwAccess: 8, zoning: 8, rawLand: 5, laborPool: 7, subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 5, infill: 5, utilities: 10 }
    }
];
