// San Antonio Industrial Submarkets — approximate CBRE boundaries
const SUBMARKETS_SAN_ANTONIO = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'sat-northeast', name: 'Northeast San Antonio', market: 'san-antonio', color: '#3b82f6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.42, 29.50], [-98.30, 29.50], [-98.30, 29.58],
                    [-98.42, 29.58], [-98.42, 29.50]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-east', name: 'East San Antonio', market: 'san-antonio', color: '#8b5cf6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.40, 29.40], [-98.28, 29.40], [-98.28, 29.50],
                    [-98.40, 29.50], [-98.40, 29.40]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-south', name: 'South San Antonio', market: 'san-antonio', color: '#06b6d4' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.58, 29.30], [-98.42, 29.30], [-98.42, 29.42],
                    [-98.58, 29.42], [-98.58, 29.30]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-northwest', name: 'Northwest San Antonio', market: 'san-antonio', color: '#f59e0b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.68, 29.50], [-98.52, 29.50], [-98.52, 29.62],
                    [-98.68, 29.62], [-98.68, 29.50]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-west', name: 'West San Antonio', market: 'san-antonio', color: '#10b981' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.68, 29.38], [-98.52, 29.38], [-98.52, 29.50],
                    [-98.68, 29.50], [-98.68, 29.38]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-central', name: 'Central San Antonio', market: 'san-antonio', color: '#ec4899' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.55, 29.40], [-98.45, 29.40], [-98.45, 29.50],
                    [-98.55, 29.50], [-98.55, 29.40]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-new-braunfels', name: 'New Braunfels/Seguin', market: 'san-antonio', color: '#14b8a6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.22, 29.52], [-98.02, 29.52], [-98.02, 29.72],
                    [-98.22, 29.72], [-98.22, 29.52]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'sat-north-central', name: 'North Central/Airport', market: 'san-antonio', color: '#f97316' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.55, 29.50], [-98.42, 29.50], [-98.42, 29.60],
                    [-98.55, 29.60], [-98.55, 29.50]
                ]]
            }
        }
    ]
};
