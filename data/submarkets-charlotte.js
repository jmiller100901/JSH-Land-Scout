// Charlotte Industrial Submarkets — approximate CBRE boundaries
const SUBMARKETS_CHARLOTTE = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'clt-airport-west', name: 'Airport/West Charlotte', market: 'charlotte', color: '#3b82f6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-81.05, 35.16], [-80.92, 35.16], [-80.92, 35.25],
                    [-81.05, 35.25], [-81.05, 35.16]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-north', name: 'North Charlotte/I-77', market: 'charlotte', color: '#8b5cf6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-80.92, 35.30], [-80.78, 35.30], [-80.78, 35.42],
                    [-80.92, 35.42], [-80.92, 35.30]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-northeast', name: 'Northeast Charlotte/I-85N', market: 'charlotte', color: '#06b6d4' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-80.78, 35.25], [-80.60, 35.25], [-80.60, 35.38],
                    [-80.78, 35.38], [-80.78, 35.25]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-south', name: 'South Charlotte/I-77S', market: 'charlotte', color: '#f59e0b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-80.92, 35.05], [-80.78, 35.05], [-80.78, 35.18],
                    [-80.92, 35.18], [-80.92, 35.05]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-southeast', name: 'Southeast Charlotte/I-485', market: 'charlotte', color: '#10b981' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-80.78, 35.08], [-80.60, 35.08], [-80.60, 35.22],
                    [-80.78, 35.22], [-80.78, 35.08]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-southwest', name: 'Southwest Charlotte/I-85S', market: 'charlotte', color: '#ec4899' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-81.12, 35.05], [-80.95, 35.05], [-80.95, 35.18],
                    [-81.12, 35.18], [-81.12, 35.05]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-central', name: 'Central Charlotte', market: 'charlotte', color: '#14b8a6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-80.92, 35.18], [-80.78, 35.18], [-80.78, 35.30],
                    [-80.92, 35.30], [-80.92, 35.18]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-mooresville', name: 'Mooresville/Statesville', market: 'charlotte', color: '#f97316' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-80.90, 35.50], [-80.72, 35.50], [-80.72, 35.65],
                    [-80.90, 35.65], [-80.90, 35.50]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-gastonia', name: 'Gastonia/I-85W', market: 'charlotte', color: '#a855f7' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-81.25, 35.20], [-81.08, 35.20], [-81.08, 35.32],
                    [-81.25, 35.32], [-81.25, 35.20]
                ]]
            }
        }
    ]
};
