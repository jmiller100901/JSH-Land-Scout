// San Antonio Industrial Submarkets — based on CBRE/Partners Real Estate definitions
// Boundaries traced along Loop 410, Loop 1604, I-35, I-10, US-281, I-37, county lines
const SUBMARKETS_SAN_ANTONIO = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'sat-cbd', name: 'CBD / Downtown', market: 'san-antonio', color: '#64748b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // Inside Loop 410 core — bounded by I-10N, I-35E, I-37S
                    [-98.52, 29.40], [-98.50, 29.42], [-98.48, 29.44],
                    [-98.46, 29.45], [-98.44, 29.44], [-98.43, 29.42],
                    [-98.44, 29.40], [-98.46, 29.39], [-98.48, 29.38],
                    [-98.50, 29.39], [-98.52, 29.40]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-north-central', name: 'North Central / Airport', market: 'san-antonio', color: '#3b82f6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // US-281 west, I-35 east, Loop 410 south, Loop 1604 north
                    [-98.52, 29.44], [-98.52, 29.48], [-98.52, 29.52],
                    [-98.52, 29.56], [-98.50, 29.58], [-98.48, 29.58],
                    [-98.44, 29.56], [-98.42, 29.54], [-98.40, 29.52],
                    [-98.40, 29.48], [-98.42, 29.46], [-98.44, 29.44],
                    [-98.46, 29.45], [-98.48, 29.44], [-98.52, 29.44]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-northeast', name: 'Northeast SA', market: 'san-antonio', color: '#8b5cf6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-35 west, Loop 410 south, FM-1516/Guadalupe Co east, Loop 1604+ north
                    [-98.42, 29.46], [-98.40, 29.48], [-98.40, 29.52],
                    [-98.42, 29.54], [-98.42, 29.58], [-98.40, 29.62],
                    [-98.36, 29.64], [-98.30, 29.64], [-98.26, 29.62],
                    [-98.22, 29.58], [-98.22, 29.54], [-98.24, 29.50],
                    [-98.26, 29.47], [-98.28, 29.45], [-98.30, 29.44],
                    [-98.34, 29.44], [-98.38, 29.45], [-98.42, 29.46]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-east', name: 'East SA', market: 'san-antonio', color: '#06b6d4' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-37/US-281S west, Loop 410 north, Loop 1604 east
                    [-98.46, 29.39], [-98.44, 29.40], [-98.43, 29.42],
                    [-98.44, 29.44], [-98.38, 29.45], [-98.34, 29.44],
                    [-98.30, 29.44], [-98.28, 29.42], [-98.28, 29.38],
                    [-98.30, 29.36], [-98.34, 29.34], [-98.38, 29.34],
                    [-98.42, 29.35], [-98.44, 29.36], [-98.46, 29.38],
                    [-98.46, 29.39]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-south', name: 'South SA', market: 'san-antonio', color: '#f59e0b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // Loop 410 south side, extends beyond Loop 1604, US-90 west, I-37/I-35S east
                    [-98.62, 29.34], [-98.58, 29.36], [-98.54, 29.38],
                    [-98.52, 29.40], [-98.50, 29.39], [-98.48, 29.38],
                    [-98.46, 29.38], [-98.44, 29.36], [-98.42, 29.35],
                    [-98.38, 29.34], [-98.36, 29.32], [-98.36, 29.28],
                    [-98.38, 29.24], [-98.42, 29.20], [-98.46, 29.18],
                    [-98.52, 29.18], [-98.56, 29.20], [-98.60, 29.24],
                    [-98.62, 29.28], [-98.62, 29.32], [-98.62, 29.34]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-northwest', name: 'Northwest SA', market: 'san-antonio', color: '#10b981' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-10/US-281 east, Loop 410 south, Helotes/SH-16 west, Loop 1604 north
                    [-98.66, 29.48], [-98.64, 29.52], [-98.62, 29.56],
                    [-98.58, 29.58], [-98.54, 29.58], [-98.52, 29.56],
                    [-98.52, 29.52], [-98.52, 29.48], [-98.52, 29.44],
                    [-98.54, 29.42], [-98.56, 29.42], [-98.58, 29.44],
                    [-98.60, 29.46], [-98.64, 29.47], [-98.66, 29.48]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-comal', name: 'Comal County', market: 'san-antonio', color: '#14b8a6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // North of SA — New Braunfels, I-35 spine, US-281 west
                    [-98.36, 29.64], [-98.30, 29.68], [-98.24, 29.72],
                    [-98.18, 29.76], [-98.10, 29.78], [-98.02, 29.78],
                    [-97.96, 29.76], [-97.92, 29.72], [-97.90, 29.68],
                    [-97.92, 29.64], [-97.96, 29.62], [-98.02, 29.60],
                    [-98.08, 29.60], [-98.14, 29.60], [-98.20, 29.60],
                    [-98.26, 29.62], [-98.30, 29.64], [-98.36, 29.64]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-guadalupe', name: 'Guadalupe County', market: 'san-antonio', color: '#f97316' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // East of NE SA — Seguin, Schertz east, I-10E, SH-130S
                    [-98.22, 29.58], [-98.18, 29.60], [-98.14, 29.60],
                    [-98.08, 29.60], [-98.02, 29.60], [-97.96, 29.58],
                    [-97.90, 29.56], [-97.86, 29.52], [-97.84, 29.48],
                    [-97.86, 29.44], [-97.90, 29.42], [-97.96, 29.42],
                    [-98.02, 29.44], [-98.08, 29.46], [-98.14, 29.48],
                    [-98.18, 29.50], [-98.20, 29.52], [-98.22, 29.54],
                    [-98.22, 29.58]
                ]]
            }
        }
    ]
};
