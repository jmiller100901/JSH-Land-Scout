// Houston Industrial Submarkets — approximate CBRE boundaries
const SUBMARKETS_HOUSTON = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'hou-northwest', name: 'Northwest Houston', market: 'houston', color: '#3b82f6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.65, 29.85], [-95.48, 29.85], [-95.48, 30.00],
                    [-95.65, 30.00], [-95.65, 29.85]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-north', name: 'North Houston/Greenspoint', market: 'houston', color: '#8b5cf6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.48, 29.90], [-95.32, 29.90], [-95.32, 30.05],
                    [-95.48, 30.05], [-95.48, 29.90]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-northeast', name: 'Northeast Houston/I-69', market: 'houston', color: '#06b6d4' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.32, 29.85], [-95.12, 29.85], [-95.12, 30.00],
                    [-95.32, 30.00], [-95.32, 29.85]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-east', name: 'East Houston/Ship Channel', market: 'houston', color: '#f59e0b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.28, 29.72], [-95.05, 29.72], [-95.05, 29.85],
                    [-95.28, 29.85], [-95.28, 29.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-southeast', name: 'Southeast Houston/Bay Area', market: 'houston', color: '#10b981' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.22, 29.55], [-95.00, 29.55], [-95.00, 29.72],
                    [-95.22, 29.72], [-95.22, 29.55]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-southwest', name: 'Southwest Houston/Sugar Land', market: 'houston', color: '#ec4899' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.68, 29.55], [-95.48, 29.55], [-95.48, 29.72],
                    [-95.68, 29.72], [-95.68, 29.55]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-west', name: 'West Houston/Katy', market: 'houston', color: '#14b8a6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.88, 29.72], [-95.65, 29.72], [-95.65, 29.88],
                    [-95.88, 29.88], [-95.88, 29.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-south', name: 'South Houston/Hobby', market: 'houston', color: '#f97316' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.40, 29.58], [-95.22, 29.58], [-95.22, 29.72],
                    [-95.40, 29.72], [-95.40, 29.58]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-central', name: 'Central Houston/Inner Loop', market: 'houston', color: '#a855f7' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.48, 29.72], [-95.32, 29.72], [-95.32, 29.85],
                    [-95.48, 29.85], [-95.48, 29.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-baytown', name: 'Baytown/Mont Belvieu', market: 'houston', color: '#eab308' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.05, 29.72], [-94.85, 29.72], [-94.85, 29.88],
                    [-95.05, 29.88], [-95.05, 29.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-tomball-magnolia', name: 'Tomball/Magnolia', market: 'houston', color: '#84cc16' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-95.70, 30.00], [-95.48, 30.00], [-95.48, 30.15],
                    [-95.70, 30.15], [-95.70, 30.00]
                ]]
            }
        }
    ]
};
