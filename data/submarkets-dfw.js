// DFW Industrial Submarkets — based on CBRE/Holt Lunsford/Bradford definitions
// 15 submarkets traced along actual highways: I-20, I-30, I-35E/W, I-635, SH-183, SH-360, SH-121, SH-161
// West-to-east bands: Fort Worth column | Mid-corridor | Dallas column | Far east
const SUBMARKETS_DFW = {
    type: 'FeatureCollection',
    features: [
        // ===== FORT WORTH COLUMN (west of SH-360/I-35W) =====
        {
            type: 'Feature',
            properties: { id: 'dfw-north-fort-worth', name: 'North Fort Worth / Alliance', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // SH-170/I-820N south, I-35W east, Denton Co line/US-380 north, FM-156/US-287 west
                    [-97.48, 32.88], [-97.42, 32.88], [-97.36, 32.90], [-97.32, 32.92],
                    [-97.30, 32.96], [-97.28, 33.00], [-97.26, 33.05], [-97.28, 33.10],
                    [-97.34, 33.12], [-97.40, 33.12], [-97.46, 33.10], [-97.50, 33.06],
                    [-97.52, 33.00], [-97.52, 32.95], [-97.50, 32.90], [-97.48, 32.88]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-central-fort-worth', name: 'Central Fort Worth / Meacham', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-30 south, I-35W east, SH-170/I-820N north, I-820W/SH-199 west
                    [-97.46, 32.75], [-97.40, 32.75], [-97.35, 32.76], [-97.30, 32.78],
                    [-97.28, 32.82], [-97.28, 32.86], [-97.30, 32.88], [-97.36, 32.90],
                    [-97.42, 32.88], [-97.48, 32.88], [-97.50, 32.86], [-97.50, 32.82],
                    [-97.50, 32.78], [-97.48, 32.76], [-97.46, 32.75]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-south-fort-worth', name: 'South Fort Worth', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-20 north, I-35W east, Johnson Co line south, US-377/Chisholm Trail west
                    [-97.46, 32.68], [-97.40, 32.68], [-97.35, 32.68], [-97.30, 32.68],
                    [-97.28, 32.70], [-97.28, 32.74], [-97.30, 32.78], [-97.35, 32.76],
                    [-97.40, 32.75], [-97.46, 32.75], [-97.48, 32.76], [-97.50, 32.74],
                    [-97.50, 32.70], [-97.48, 32.68], [-97.46, 32.68]
                ]]
            }
        },

        // ===== MID-CORRIDOR (between SH-360 and SH-161/I-35E) =====
        {
            type: 'Feature',
            properties: { id: 'dfw-dfw-airport', name: 'DFW Airport', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // SH-183 south, SH-121/Sam Rayburn north, I-35E/Belt Line east, SH-360/SH-114 west
                    [-97.10, 32.84], [-97.05, 32.84], [-97.00, 32.85], [-96.95, 32.86],
                    [-96.90, 32.87], [-96.88, 32.90], [-96.88, 32.94], [-96.90, 32.97],
                    [-96.94, 32.98], [-97.00, 32.98], [-97.06, 32.96], [-97.10, 32.94],
                    [-97.12, 32.90], [-97.12, 32.87], [-97.10, 32.84]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-great-sw', name: 'Great Southwest / Arlington', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-20 south, SH-183 north, SH-161/PGBT east, SH-360 west
                    [-97.10, 32.72], [-97.06, 32.72], [-97.02, 32.72], [-96.98, 32.72],
                    [-96.94, 32.74], [-96.92, 32.76], [-96.90, 32.80], [-96.90, 32.84],
                    [-96.95, 32.86], [-97.00, 32.85], [-97.05, 32.84], [-97.10, 32.84],
                    [-97.12, 32.82], [-97.12, 32.78], [-97.12, 32.74], [-97.10, 32.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-midcities', name: 'Mid-Cities', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-20 south, SH-183/SH-121 north, SH-360 east, I-820E west
                    [-97.22, 32.72], [-97.16, 32.72], [-97.12, 32.72], [-97.12, 32.74],
                    [-97.12, 32.78], [-97.12, 32.82], [-97.12, 32.84], [-97.14, 32.86],
                    [-97.18, 32.88], [-97.22, 32.88], [-97.26, 32.86], [-97.28, 32.82],
                    [-97.28, 32.78], [-97.28, 32.74], [-97.26, 32.72], [-97.22, 32.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-cedars-west', name: 'Cedar Hill / West I-20', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-20/I-30 north, I-35E east, Ellis Co south, US-67/SH-360 west
                    [-97.10, 32.62], [-97.04, 32.60], [-96.98, 32.58], [-96.92, 32.58],
                    [-96.88, 32.60], [-96.86, 32.64], [-96.86, 32.68], [-96.88, 32.72],
                    [-96.92, 32.72], [-96.98, 32.72], [-97.02, 32.72], [-97.06, 32.72],
                    [-97.10, 32.72], [-97.12, 32.70], [-97.12, 32.66], [-97.10, 32.62]
                ]]
            }
        },

        // ===== DALLAS COLUMN (east of I-35E) =====
        {
            type: 'Feature',
            properties: { id: 'dfw-northwest-dallas', name: 'Northwest Dallas / Valwood', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-635 south, SH-121 north, DNT/Midway east, Denton Creek/I-35E west
                    [-96.94, 32.90], [-96.90, 32.90], [-96.86, 32.91], [-96.82, 32.92],
                    [-96.80, 32.94], [-96.80, 32.97], [-96.82, 33.00], [-96.86, 33.01],
                    [-96.90, 33.00], [-96.94, 32.98], [-96.96, 32.96], [-96.96, 32.92],
                    [-96.94, 32.90]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-stemmons', name: 'Stemmons Freeway', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // SH-183/Mockingbird south, I-635 north, DNT/Midway east, Elm Fork Trinity/I-35E west
                    [-96.94, 32.84], [-96.90, 32.84], [-96.86, 32.85], [-96.82, 32.86],
                    [-96.80, 32.88], [-96.80, 32.90], [-96.82, 32.92], [-96.86, 32.91],
                    [-96.90, 32.90], [-96.94, 32.90], [-96.96, 32.88], [-96.96, 32.86],
                    [-96.94, 32.84]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-south-stemmons', name: 'South Stemmons / Brookhollow', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-30/Trinity south, SH-183/Mockingbird north, I-35E/Harry Hines east, Loop 12 west
                    [-96.94, 32.78], [-96.90, 32.78], [-96.88, 32.80], [-96.86, 32.82],
                    [-96.84, 32.84], [-96.82, 32.86], [-96.86, 32.85], [-96.90, 32.84],
                    [-96.94, 32.84], [-96.96, 32.82], [-96.96, 32.80], [-96.94, 32.78]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-south', name: 'South Dallas / Inland Port', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-20 north, I-35E west, I-45 east/south, Ellis Co line south
                    [-96.88, 32.72], [-96.84, 32.72], [-96.80, 32.72], [-96.76, 32.72],
                    [-96.72, 32.70], [-96.68, 32.68], [-96.66, 32.64], [-96.66, 32.58],
                    [-96.68, 32.54], [-96.72, 32.52], [-96.78, 32.52], [-96.84, 32.54],
                    [-96.88, 32.58], [-96.90, 32.62], [-96.90, 32.66], [-96.90, 32.70],
                    [-96.88, 32.72]
                ]]
            }
        },

        // ===== FAR EAST =====
        {
            type: 'Feature',
            properties: { id: 'dfw-richardson-plano', name: 'Richardson / Plano', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-635/PGBT south, US-380/SH-121 north, PGBT east, DNT west
                    [-96.80, 32.94], [-96.76, 32.94], [-96.72, 32.96], [-96.68, 32.98],
                    [-96.66, 33.02], [-96.66, 33.06], [-96.68, 33.08], [-96.72, 33.08],
                    [-96.76, 33.06], [-96.80, 33.04], [-96.82, 33.00], [-96.80, 32.97],
                    [-96.80, 32.94]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-allen-mckinney', name: 'Allen / McKinney', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // North of Plano — US-380 area, US-75 spine, DNT west
                    [-96.76, 33.06], [-96.72, 33.08], [-96.68, 33.10], [-96.64, 33.14],
                    [-96.62, 33.18], [-96.62, 33.22], [-96.66, 33.24], [-96.70, 33.22],
                    [-96.74, 33.18], [-96.78, 33.14], [-96.80, 33.10], [-96.80, 33.06],
                    [-96.76, 33.06]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-northeast-dallas', name: 'Northeast Dallas / Garland', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-30 south, I-635/PGBT north, PGBT east, US-75 west
                    [-96.80, 32.82], [-96.76, 32.82], [-96.72, 32.82], [-96.68, 32.84],
                    [-96.64, 32.86], [-96.60, 32.88], [-96.58, 32.92], [-96.58, 32.96],
                    [-96.62, 32.98], [-96.66, 32.98], [-96.68, 32.98], [-96.72, 32.96],
                    [-96.76, 32.94], [-96.80, 32.94], [-96.80, 32.90], [-96.80, 32.86],
                    [-96.80, 32.82]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-east-dallas', name: 'East Dallas / Mesquite', market: 'dfw' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-30 north, I-20 south, Kaufman Co east, I-45/US-175 west
                    [-96.76, 32.72], [-96.72, 32.72], [-96.68, 32.72], [-96.62, 32.72],
                    [-96.56, 32.72], [-96.50, 32.72], [-96.44, 32.74], [-96.40, 32.76],
                    [-96.38, 32.80], [-96.40, 32.84], [-96.44, 32.86], [-96.50, 32.86],
                    [-96.56, 32.86], [-96.60, 32.86], [-96.64, 32.86], [-96.68, 32.84],
                    [-96.72, 32.82], [-96.76, 32.82], [-96.78, 32.78], [-96.76, 32.74],
                    [-96.76, 32.72]
                ]]
            }
        }
    ]
};
