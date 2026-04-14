// Land Sites Database
// Each site has:
//   - Basic info (name, coords, acreage, submarket)
//   - Criteria scores (1-10 scale for each of 10 factors)
//   - Property info (zoning, tax rate, utilities)
//   - Links (listing, CAD, maps)
//
// Criteria keys:
//   hwAccess       — Major highway frontage/access
//   zoning         — Industrial/general commercial zoning
//   rawLand        — Raw land (no demo required)
//   laborPool      — Blue collar labor pockets
//   subFundamentals — Good submarket fundamentals
//   cityGrowth     — Growing city (population & jobs)
//   bizFriendly    — Business-friendly economy
//   airportProx    — Proximity to airports
//   infill         — Infill site characteristics
//   utilities      — Utilities to the site

const LAND_SITES = [
    // ===== DFW =====
    {
        id: 'dfw-001',
        name: 'I-20/Clark Rd Tract',
        market: 'dfw',
        submarket: 'dfw-south',
        coords: [32.665, -96.85],
        acreage: 45,
        zoning: 'PD (Industrial)',
        taxRate: 2.45,
        taxAuthority: 'Dallas County',
        forSale: false,
        listingUrl: null,
        notes: 'Flat topography, adjacent to I-20 interchange. City water and sewer available at property line.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 9, zoning: 9, rawLand: 8, laborPool: 8,
            subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 5,
            infill: 7, utilities: 9
        }
    },
    {
        id: 'dfw-002',
        name: 'Alliance Gateway Parcel',
        market: 'dfw',
        submarket: 'dfw-north-fort-worth',
        coords: [32.975, -97.31],
        acreage: 62,
        zoning: 'I (Industrial)',
        taxRate: 2.35,
        taxAuthority: 'Denton County',
        forSale: true,
        listingUrl: 'https://www.loopnet.com/search/land/fort-worth-tx/for-sale/',
        notes: 'Within Alliance Texas development corridor. BNSF intermodal nearby. Heavy industrial zoning in place.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 8, zoning: 10, rawLand: 9, laborPool: 7,
            subFundamentals: 6, cityGrowth: 9, bizFriendly: 9, airportProx: 9,
            infill: 5, utilities: 10
        }
    },
    {
        id: 'dfw-003',
        name: 'Mountain Creek Industrial Site',
        market: 'dfw',
        submarket: 'dfw-great-sw',
        coords: [32.725, -97.02],
        acreage: 28,
        zoning: 'IR (Industrial Research)',
        taxRate: 2.55,
        taxAuthority: 'Dallas County',
        forSale: false,
        listingUrl: null,
        notes: 'Near I-20 and SH-360 interchange. Graded pad-ready. Strong last-mile location.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        criteria: {
            hwAccess: 9, zoning: 8, rawLand: 9, laborPool: 9,
            subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 7,
            infill: 9, utilities: 8
        }
    },
    {
        id: 'dfw-004',
        name: 'DFW Airport South Pad',
        market: 'dfw',
        submarket: 'dfw-dfw-airport',
        coords: [32.845, -97.01],
        acreage: 35,
        zoning: 'CS (Commercial Services)',
        taxRate: 2.48,
        taxAuthority: 'Tarrant County',
        forSale: true,
        listingUrl: 'https://www.crexi.com/properties?type=land&location=irving-tx',
        notes: 'Airport-adjacent site with SH-183 frontage. Ideal for air cargo or logistics.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 8, zoning: 7, rawLand: 7, laborPool: 7,
            subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 10,
            infill: 8, utilities: 9
        }
    },
    {
        id: 'dfw-005',
        name: 'Sunnyvale Logistics Tract',
        market: 'dfw',
        submarket: 'dfw-east-dallas',
        coords: [32.78, -96.58],
        acreage: 55,
        zoning: 'LI (Light Industrial)',
        taxRate: 2.40,
        taxAuthority: 'Dallas County',
        forSale: false,
        listingUrl: null,
        notes: 'I-30 corridor site. Raw agricultural land with good drainage. ETJ of Mesquite.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        criteria: {
            hwAccess: 8, zoning: 8, rawLand: 10, laborPool: 7,
            subFundamentals: 7, cityGrowth: 7, bizFriendly: 9, airportProx: 5,
            infill: 6, utilities: 6
        }
    },

    // ===== AUSTIN =====
    {
        id: 'atx-001',
        name: 'SH-130/Harold Green Rd',
        market: 'austin',
        submarket: 'atx-southeast',
        coords: [30.22, -97.62],
        acreage: 40,
        zoning: 'LI (Light Industrial)',
        taxRate: 2.18,
        taxAuthority: 'Travis County',
        forSale: true,
        listingUrl: 'https://www.loopnet.com/search/land/austin-tx/for-sale/',
        notes: 'SH-130 toll corridor, fastest growing industrial node in Austin. Adjacent to Tesla Gigafactory.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 8, zoning: 9, rawLand: 9, laborPool: 7,
            subFundamentals: 8, cityGrowth: 10, bizFriendly: 8, airportProx: 7,
            infill: 6, utilities: 9
        }
    },
    {
        id: 'atx-002',
        name: 'Hutto Industrial Park Pad',
        market: 'austin',
        submarket: 'atx-round-rock',
        coords: [30.55, -97.55],
        acreage: 52,
        zoning: 'GC (General Commercial)',
        taxRate: 2.22,
        taxAuthority: 'Williamson County',
        forSale: false,
        listingUrl: null,
        notes: 'US-79/SH-130 access. Samsung semiconductor campus nearby driving industrial demand.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        criteria: {
            hwAccess: 7, zoning: 7, rawLand: 10, laborPool: 6,
            subFundamentals: 6, cityGrowth: 10, bizFriendly: 8, airportProx: 4,
            infill: 4, utilities: 8
        }
    },
    {
        id: 'atx-003',
        name: 'Burleson Rd Industrial Site',
        market: 'austin',
        submarket: 'atx-east',
        coords: [30.32, -97.62],
        acreage: 22,
        zoning: 'W/LO (Warehouse/Limited Office)',
        taxRate: 2.18,
        taxAuthority: 'Travis County',
        forSale: false,
        listingUrl: null,
        notes: 'Infill site in East Austin industrial core. US-183 access. Surrounded by existing industrial.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 7, zoning: 9, rawLand: 8, laborPool: 8,
            subFundamentals: 8, cityGrowth: 10, bizFriendly: 8, airportProx: 6,
            infill: 10, utilities: 10
        }
    },

    // ===== SAN ANTONIO =====
    {
        id: 'sat-001',
        name: 'I-35 South/Laredo Hwy Tract',
        market: 'san-antonio',
        submarket: 'sat-south',
        coords: [29.35, -98.50],
        acreage: 65,
        zoning: 'I-1 (Light Industrial)',
        taxRate: 2.30,
        taxAuthority: 'Bexar County',
        forSale: true,
        listingUrl: 'https://www.loopnet.com/search/land/san-antonio-tx/for-sale/',
        notes: 'I-35 frontage, primary logistics corridor to Mexico. Flat terrain. All utilities available.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 10, zoning: 9, rawLand: 9, laborPool: 9,
            subFundamentals: 8, cityGrowth: 8, bizFriendly: 9, airportProx: 5,
            infill: 6, utilities: 9
        }
    },
    {
        id: 'sat-002',
        name: 'Foster Rd Industrial Pad',
        market: 'san-antonio',
        submarket: 'sat-east',
        coords: [29.45, -98.35],
        acreage: 30,
        zoning: 'I-2 (Heavy Industrial)',
        taxRate: 2.30,
        taxAuthority: 'Bexar County',
        forSale: false,
        listingUrl: null,
        notes: 'Near I-10 East corridor. Established industrial area with strong blue-collar workforce.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        criteria: {
            hwAccess: 8, zoning: 10, rawLand: 8, laborPool: 10,
            subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 6,
            infill: 8, utilities: 8
        }
    },
    {
        id: 'sat-003',
        name: 'IH-10 West/Loop 1604',
        market: 'san-antonio',
        submarket: 'sat-west',
        coords: [29.45, -98.62],
        acreage: 48,
        zoning: 'C-3 (General Commercial)',
        taxRate: 2.30,
        taxAuthority: 'Bexar County',
        forSale: false,
        listingUrl: null,
        notes: 'I-10/Loop 1604 interchange visibility. Would need rezoning for industrial. Growing corridor.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 9, zoning: 5, rawLand: 9, laborPool: 6,
            subFundamentals: 7, cityGrowth: 8, bizFriendly: 9, airportProx: 4,
            infill: 5, utilities: 9
        }
    },

    // ===== HOUSTON =====
    {
        id: 'hou-001',
        name: 'US-290/Mueschke Rd Site',
        market: 'houston',
        submarket: 'hou-northwest',
        coords: [29.94, -95.60],
        acreage: 72,
        zoning: 'None (ETJ)',
        taxRate: 2.35,
        taxAuthority: 'Harris County',
        forSale: true,
        listingUrl: 'https://www.loopnet.com/search/land/cypress-tx/for-sale/',
        notes: 'US-290 frontage in rapidly growing NW Houston corridor. No Houston zoning applies. Unrestricted use.',
        utilities: { water: true, sewer: false, gas: true, electric: true, fiber: false },
        criteria: {
            hwAccess: 9, zoning: 8, rawLand: 10, laborPool: 7,
            subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 5,
            infill: 5, utilities: 6
        }
    },
    {
        id: 'hou-002',
        name: 'Beltway 8/I-10 East Pad',
        market: 'houston',
        submarket: 'hou-east',
        coords: [29.78, -95.15],
        acreage: 38,
        zoning: 'None (Houston)',
        taxRate: 2.35,
        taxAuthority: 'Harris County',
        forSale: false,
        listingUrl: null,
        notes: 'Ship Channel adjacent logistics site. I-10 and Beltway 8 access. Heavy industrial neighbors.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 10, zoning: 10, rawLand: 7, laborPool: 10,
            subFundamentals: 8, cityGrowth: 8, bizFriendly: 10, airportProx: 5,
            infill: 9, utilities: 10
        }
    },
    {
        id: 'hou-003',
        name: 'Grand Parkway/I-45N Tract',
        market: 'houston',
        submarket: 'hou-north',
        coords: [29.98, -95.38],
        acreage: 55,
        zoning: 'None (ETJ)',
        taxRate: 2.30,
        taxAuthority: 'Harris/Montgomery',
        forSale: true,
        listingUrl: 'https://www.crexi.com/properties?type=land&location=spring-tx',
        notes: 'Grand Parkway (SH-99) and I-45 interchange. Rapid growth corridor. Near IAH airport.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 10, zoning: 8, rawLand: 9, laborPool: 7,
            subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 8,
            infill: 5, utilities: 9
        }
    },
    {
        id: 'hou-004',
        name: 'I-69/Beltway 8 South',
        market: 'houston',
        submarket: 'hou-southwest',
        coords: [29.62, -95.55],
        acreage: 42,
        zoning: 'None (Sugar Land ETJ)',
        taxRate: 2.28,
        taxAuthority: 'Fort Bend County',
        forSale: false,
        listingUrl: null,
        notes: 'Sugar Land area, I-69/US-59 access. Fort Bend County tax advantages. Workforce from Missouri City/Stafford.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 8, zoning: 8, rawLand: 8, laborPool: 7,
            subFundamentals: 7, cityGrowth: 9, bizFriendly: 10, airportProx: 6,
            infill: 7, utilities: 9
        }
    },

    // ===== CHARLOTTE =====
    {
        id: 'clt-001',
        name: 'I-85/Westinghouse Blvd',
        market: 'charlotte',
        submarket: 'clt-airport-west',
        coords: [35.19, -80.97],
        acreage: 35,
        zoning: 'I-2 (General Industrial)',
        taxRate: 1.05,
        taxAuthority: 'Mecklenburg County',
        forSale: true,
        listingUrl: 'https://www.loopnet.com/search/land/charlotte-nc/for-sale/',
        notes: 'Airport submarket, I-85 access. CLT airport 5 min. Strong institutional demand. All utilities to site.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 9, zoning: 10, rawLand: 8, laborPool: 8,
            subFundamentals: 8, cityGrowth: 9, bizFriendly: 9, airportProx: 10,
            infill: 8, utilities: 10
        }
    },
    {
        id: 'clt-002',
        name: 'Northlake Industrial Site',
        market: 'charlotte',
        submarket: 'clt-north',
        coords: [35.38, -80.85],
        acreage: 28,
        zoning: 'I-1 (Light Industrial)',
        taxRate: 1.05,
        taxAuthority: 'Mecklenburg County',
        forSale: false,
        listingUrl: null,
        notes: 'I-77 access at Exit 28. Last-mile distribution location serving northern Charlotte metros.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: true },
        criteria: {
            hwAccess: 8, zoning: 9, rawLand: 7, laborPool: 7,
            subFundamentals: 7, cityGrowth: 9, bizFriendly: 9, airportProx: 6,
            infill: 8, utilities: 9
        }
    },
    {
        id: 'clt-003',
        name: 'Mooresville Commerce Park Pad',
        market: 'charlotte',
        submarket: 'clt-mooresville',
        coords: [35.58, -80.82],
        acreage: 50,
        zoning: 'HB (Highway Business)',
        taxRate: 0.68,
        taxAuthority: 'Iredell County',
        forSale: true,
        listingUrl: 'https://www.loopnet.com/search/land/mooresville-nc/for-sale/',
        notes: 'I-77 corridor in Iredell County. Lower tax rate. Growing logistics corridor between CLT and Statesville.',
        utilities: { water: true, sewer: true, gas: true, electric: true, fiber: false },
        criteria: {
            hwAccess: 8, zoning: 6, rawLand: 10, laborPool: 6,
            subFundamentals: 6, cityGrowth: 8, bizFriendly: 9, airportProx: 4,
            infill: 4, utilities: 8
        }
    }
];
