// Charlotte Industrial Submarkets — based on CBRE/Savills/Avison Young definitions
// Boundaries traced along I-485 beltway, I-85, I-77, county lines, NC/SC state line
const SUBMARKETS_CHARLOTTE = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'clt-airport-west', name: 'Airport / West', market: 'charlotte', color: '#3b82f6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-77 east, I-85 north (east-west segment), Catawba River/Gaston Co west, I-485 south
                    [-81.08, 35.19], [-81.05, 35.22], [-81.02, 35.24],
                    [-80.98, 35.25], [-80.94, 35.25], [-80.90, 35.24],
                    [-80.88, 35.22], [-80.86, 35.20], [-80.86, 35.18],
                    [-80.88, 35.14], [-80.90, 35.12], [-80.94, 35.10],
                    [-80.98, 35.10], [-81.02, 35.12], [-81.05, 35.14],
                    [-81.08, 35.16], [-81.08, 35.19]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-cbd', name: 'CBD / Uptown', market: 'charlotte', color: '#64748b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // Inside I-277 loop / central Charlotte
                    [-80.86, 35.22], [-80.85, 35.23], [-80.84, 35.24],
                    [-80.83, 35.23], [-80.83, 35.22], [-80.84, 35.21],
                    [-80.85, 35.21], [-80.86, 35.22]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-north', name: 'I-77 North', market: 'charlotte', color: '#8b5cf6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-85 south (east-west), I-77 spine, I-85 east (angling NE), Iredell Co north
                    [-80.94, 35.25], [-80.92, 35.28], [-80.90, 35.32],
                    [-80.88, 35.36], [-80.86, 35.40], [-80.84, 35.44],
                    [-80.82, 35.46], [-80.78, 35.46], [-80.76, 35.44],
                    [-80.74, 35.40], [-80.74, 35.36], [-80.76, 35.32],
                    [-80.78, 35.28], [-80.80, 35.26], [-80.82, 35.25],
                    [-80.86, 35.24], [-80.90, 35.24], [-80.94, 35.25]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-northeast', name: 'Northeast / Cabarrus Co', market: 'charlotte', color: '#06b6d4' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-85 NE corridor — Concord, Kannapolis, Harrisburg
                    [-80.76, 35.28], [-80.72, 35.30], [-80.68, 35.32],
                    [-80.62, 35.36], [-80.56, 35.40], [-80.50, 35.42],
                    [-80.46, 35.42], [-80.44, 35.38], [-80.46, 35.34],
                    [-80.50, 35.30], [-80.54, 35.28], [-80.58, 35.26],
                    [-80.62, 35.24], [-80.66, 35.22], [-80.70, 35.22],
                    [-80.74, 35.24], [-80.76, 35.26], [-80.76, 35.28]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-east', name: 'East Charlotte', market: 'charlotte', color: '#10b981' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-77/US-74 west, I-485 NE north, I-485 SE south, Union Co east
                    [-80.82, 35.18], [-80.82, 35.22], [-80.78, 35.24],
                    [-80.74, 35.24], [-80.70, 35.22], [-80.66, 35.22],
                    [-80.62, 35.20], [-80.60, 35.18], [-80.58, 35.14],
                    [-80.60, 35.10], [-80.64, 35.08], [-80.68, 35.08],
                    [-80.72, 35.10], [-80.76, 35.12], [-80.80, 35.14],
                    [-80.82, 35.16], [-80.82, 35.18]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-south', name: 'South Charlotte', market: 'charlotte', color: '#f59e0b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-485 south arc, I-77, Pineville, Indian Trail
                    [-80.94, 35.10], [-80.90, 35.12], [-80.88, 35.14],
                    [-80.86, 35.16], [-80.82, 35.16], [-80.80, 35.14],
                    [-80.76, 35.12], [-80.72, 35.10], [-80.68, 35.08],
                    [-80.64, 35.06], [-80.64, 35.02], [-80.68, 35.00],
                    [-80.74, 34.99], [-80.80, 34.99], [-80.86, 35.00],
                    [-80.90, 35.02], [-80.92, 35.04], [-80.94, 35.08],
                    [-80.94, 35.10]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-stateline', name: 'Stateline (SC)', market: 'charlotte', color: '#ec4899' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // NC/SC state line, I-77 south corridor — Fort Mill, Rock Hill
                    [-81.06, 35.00], [-81.00, 35.02], [-80.94, 35.04],
                    [-80.90, 35.02], [-80.86, 35.00], [-80.80, 34.99],
                    [-80.74, 34.99], [-80.74, 34.95], [-80.76, 34.92],
                    [-80.80, 34.90], [-80.86, 34.88], [-80.92, 34.88],
                    [-80.98, 34.90], [-81.02, 34.92], [-81.06, 34.96],
                    [-81.06, 35.00]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-northwest', name: 'Northwest Charlotte', market: 'charlotte', color: '#a855f7' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-77 east, I-85 south, Catawba River/Lincoln Co west, Iredell Co north
                    [-81.08, 35.25], [-81.06, 35.30], [-81.04, 35.34],
                    [-81.02, 35.38], [-80.98, 35.42], [-80.94, 35.44],
                    [-80.90, 35.44], [-80.88, 35.40], [-80.88, 35.36],
                    [-80.90, 35.32], [-80.92, 35.28], [-80.94, 35.25],
                    [-80.98, 35.25], [-81.02, 35.24], [-81.05, 35.24],
                    [-81.08, 35.25]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-gaston', name: 'Gaston County', market: 'charlotte', color: '#f97316' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // West of Catawba River — Gastonia, Belmont, Mount Holly
                    [-81.30, 35.18], [-81.26, 35.22], [-81.22, 35.26],
                    [-81.18, 35.30], [-81.14, 35.34], [-81.10, 35.36],
                    [-81.06, 35.34], [-81.04, 35.30], [-81.06, 35.26],
                    [-81.08, 35.22], [-81.08, 35.19], [-81.08, 35.16],
                    [-81.10, 35.12], [-81.14, 35.10], [-81.18, 35.10],
                    [-81.22, 35.12], [-81.26, 35.14], [-81.28, 35.16],
                    [-81.30, 35.18]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-iredell', name: 'Iredell County', market: 'charlotte', color: '#22d3ee' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // North of Mecklenburg — Mooresville, Statesville, I-77/I-40
                    [-80.98, 35.44], [-80.94, 35.48], [-80.90, 35.52],
                    [-80.86, 35.56], [-80.82, 35.60], [-80.78, 35.64],
                    [-80.74, 35.66], [-80.68, 35.66], [-80.64, 35.64],
                    [-80.60, 35.60], [-80.60, 35.56], [-80.62, 35.52],
                    [-80.66, 35.48], [-80.70, 35.46], [-80.74, 35.44],
                    [-80.78, 35.46], [-80.82, 35.46], [-80.86, 35.44],
                    [-80.90, 35.44], [-80.94, 35.44], [-80.98, 35.44]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'clt-rowan', name: 'Rowan County', market: 'charlotte', color: '#84cc16' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // NE of Iredell — Salisbury, I-85 NE corridor
                    [-80.50, 35.42], [-80.46, 35.46], [-80.42, 35.50],
                    [-80.38, 35.54], [-80.34, 35.58], [-80.30, 35.60],
                    [-80.26, 35.60], [-80.24, 35.56], [-80.26, 35.52],
                    [-80.30, 35.48], [-80.34, 35.44], [-80.38, 35.42],
                    [-80.42, 35.40], [-80.46, 35.42], [-80.50, 35.42]
                ]]
            }
        }
    ]
};
