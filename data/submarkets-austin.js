// Austin Industrial Submarkets — approximate CBRE boundaries
const SUBMARKETS_AUSTIN = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'atx-southeast', name: 'Southeast Austin', market: 'austin', color: '#3b82f6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.72, 30.16], [-97.58, 30.16], [-97.58, 30.28],
                    [-97.72, 30.28], [-97.72, 30.16]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-east', name: 'East Austin', market: 'austin', color: '#8b5cf6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.70, 30.28], [-97.58, 30.28], [-97.58, 30.38],
                    [-97.70, 30.38], [-97.70, 30.28]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-north', name: 'North Austin/Tech Ridge', market: 'austin', color: '#06b6d4' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.72, 30.38], [-97.62, 30.38], [-97.62, 30.50],
                    [-97.72, 30.50], [-97.72, 30.38]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-round-rock', name: 'Round Rock/Georgetown', market: 'austin', color: '#f59e0b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.75, 30.48], [-97.60, 30.48], [-97.60, 30.65],
                    [-97.75, 30.65], [-97.75, 30.48]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-south', name: 'South Austin/Buda', market: 'austin', color: '#10b981' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.88, 30.05], [-97.72, 30.05], [-97.72, 30.20],
                    [-97.88, 30.20], [-97.88, 30.05]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-southwest', name: 'Southwest Austin', market: 'austin', color: '#ec4899' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.88, 30.20], [-97.75, 30.20], [-97.75, 30.32],
                    [-97.88, 30.32], [-97.88, 30.20]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-northwest', name: 'Northwest Austin/Cedar Park', market: 'austin', color: '#14b8a6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.88, 30.38], [-97.75, 30.38], [-97.75, 30.52],
                    [-97.88, 30.52], [-97.88, 30.38]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-san-marcos', name: 'San Marcos/Kyle', market: 'austin', color: '#f97316' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.98, 29.85], [-97.82, 29.85], [-97.82, 30.05],
                    [-97.98, 30.05], [-97.98, 29.85]
                ]]
            }
        }
    ]
};
