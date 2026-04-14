// DFW Industrial Submarkets — approximate CBRE boundaries
// Polygons are [lng, lat] per GeoJSON spec
const SUBMARKETS_DFW = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'dfw-south', name: 'South Dallas', market: 'dfw', color: '#3b82f6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.92, 32.62], [-96.72, 32.62], [-96.72, 32.70],
                    [-96.78, 32.72], [-96.92, 32.72], [-96.92, 32.62]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-great-sw', name: 'Great Southwest/Arlington', market: 'dfw', color: '#8b5cf6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.12, 32.70], [-96.98, 32.70], [-96.98, 32.78],
                    [-97.12, 32.78], [-97.12, 32.70]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-dfw-airport', name: 'DFW Airport', market: 'dfw', color: '#06b6d4' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.12, 32.83], [-96.96, 32.83], [-96.96, 32.95],
                    [-97.12, 32.95], [-97.12, 32.83]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-north-fort-worth', name: 'North Fort Worth/Alliance', market: 'dfw', color: '#f59e0b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.42, 32.88], [-97.22, 32.88], [-97.22, 33.05],
                    [-97.42, 33.05], [-97.42, 32.88]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-east-dallas', name: 'East Dallas/Mesquite', market: 'dfw', color: '#10b981' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.72, 32.72], [-96.55, 32.72], [-96.55, 32.82],
                    [-96.72, 32.82], [-96.72, 32.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-stemmons', name: 'Stemmons Freeway', market: 'dfw', color: '#ec4899' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.92, 32.78], [-96.82, 32.78], [-96.82, 32.86],
                    [-96.92, 32.86], [-96.92, 32.78]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-allen-mckinney', name: 'Allen/McKinney', market: 'dfw', color: '#14b8a6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.72, 33.05], [-96.55, 33.05], [-96.55, 33.22],
                    [-96.72, 33.22], [-96.72, 33.05]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-northwest-dallas', name: 'Northwest Dallas', market: 'dfw', color: '#f97316' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.96, 32.86], [-96.82, 32.86], [-96.82, 32.96],
                    [-96.96, 32.96], [-96.96, 32.86]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-south-fort-worth', name: 'South Fort Worth', market: 'dfw', color: '#a855f7' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.42, 32.60], [-97.22, 32.60], [-97.22, 32.75],
                    [-97.42, 32.75], [-97.42, 32.60]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-northeast-dallas', name: 'Northeast Dallas/Garland', market: 'dfw', color: '#eab308' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.72, 32.82], [-96.55, 32.82], [-96.55, 32.95],
                    [-96.72, 32.95], [-96.72, 32.82]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-richardson-plano', name: 'Richardson/Plano', market: 'dfw', color: '#22d3ee' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.82, 32.95], [-96.68, 32.95], [-96.68, 33.08],
                    [-96.82, 33.08], [-96.82, 32.95]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-central-fort-worth', name: 'Central Fort Worth', market: 'dfw', color: '#84cc16' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.42, 32.75], [-97.22, 32.75], [-97.22, 32.88],
                    [-97.42, 32.88], [-97.42, 32.75]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-midcities', name: 'Mid-Cities', market: 'dfw', color: '#d946ef' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.22, 32.78], [-97.05, 32.78], [-97.05, 32.88],
                    [-97.22, 32.88], [-97.22, 32.78]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-south-stemmons', name: 'South Stemmons/Brookhollow', market: 'dfw', color: '#fb923c' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-96.92, 32.72], [-96.82, 32.72], [-96.82, 32.78],
                    [-96.92, 32.78], [-96.92, 32.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'dfw-cedars-west', name: 'Cedar Hill/West I-20', market: 'dfw', color: '#2dd4bf' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-97.05, 32.58], [-96.92, 32.58], [-96.92, 32.70],
                    [-97.05, 32.70], [-97.05, 32.58]
                ]]
            }
        }
    ]
};
