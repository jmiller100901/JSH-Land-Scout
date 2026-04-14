// Austin Industrial Submarkets — based on CBRE/Colliers/Aquila definitions
// Boundaries traced along actual highways: I-35, SH-130, SH-45, US-183, US-290, Colorado River, MoPac
const SUBMARKETS_AUSTIN = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'atx-northeast', name: 'Northeast Austin', market: 'austin', color: '#3b82f6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-35 west edge, SH-45N north, SH-130 east, US-290E/Loyola south
                    [-97.72, 30.34], [-97.72, 30.37], [-97.70, 30.40], [-97.69, 30.44],
                    [-97.68, 30.47], [-97.67, 30.50], [-97.65, 30.51],
                    [-97.62, 30.51], [-97.58, 30.50], [-97.55, 30.48],
                    [-97.52, 30.45], [-97.51, 30.42], [-97.52, 30.38],
                    [-97.54, 30.35], [-97.57, 30.34], [-97.60, 30.33],
                    [-97.64, 30.33], [-97.68, 30.33], [-97.72, 30.34]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-southeast', name: 'Southeast Austin', market: 'austin', color: '#8b5cf6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-35 west, Colorado River north, SH-130 east, SH-45S south
                    [-97.74, 30.26], [-97.72, 30.28], [-97.70, 30.30],
                    [-97.68, 30.31], [-97.64, 30.33], [-97.60, 30.33],
                    [-97.57, 30.34], [-97.54, 30.35], [-97.52, 30.33],
                    [-97.51, 30.30], [-97.50, 30.26], [-97.50, 30.22],
                    [-97.51, 30.18], [-97.53, 30.15], [-97.56, 30.14],
                    [-97.60, 30.14], [-97.64, 30.14], [-97.68, 30.16],
                    [-97.70, 30.18], [-97.72, 30.20], [-97.74, 30.23],
                    [-97.74, 30.26]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-east', name: 'East Austin', market: 'austin', color: '#06b6d4' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-35/US-183 west, US-290E south, SH-130 east, US-290E/Loyola north
                    [-97.72, 30.28], [-97.72, 30.30], [-97.72, 30.33], [-97.72, 30.34],
                    [-97.68, 30.33], [-97.64, 30.33], [-97.60, 30.33],
                    [-97.57, 30.34], [-97.54, 30.35], [-97.52, 30.33],
                    [-97.54, 30.31], [-97.57, 30.30], [-97.60, 30.29],
                    [-97.64, 30.28], [-97.68, 30.28], [-97.72, 30.28]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-south', name: 'South Austin', market: 'austin', color: '#10b981' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // MoPac/I-35 west, Ben White/SH-71 north, I-35 east, SH-45S/county line south
                    [-97.82, 30.24], [-97.80, 30.26], [-97.78, 30.26],
                    [-97.76, 30.25], [-97.74, 30.26], [-97.74, 30.23],
                    [-97.72, 30.20], [-97.70, 30.18], [-97.68, 30.16],
                    [-97.68, 30.12], [-97.70, 30.08], [-97.74, 30.06],
                    [-97.78, 30.06], [-97.82, 30.08], [-97.84, 30.10],
                    [-97.85, 30.14], [-97.84, 30.18], [-97.83, 30.22],
                    [-97.82, 30.24]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-north-central', name: 'North Central', market: 'austin', color: '#f59e0b' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // MoPac west, US-183/Research north, I-35 east, US-183 south
                    [-97.78, 30.34], [-97.76, 30.36], [-97.74, 30.38],
                    [-97.72, 30.38], [-97.72, 30.37], [-97.72, 30.34],
                    [-97.72, 30.31], [-97.72, 30.30], [-97.74, 30.28],
                    [-97.76, 30.28], [-97.78, 30.30], [-97.78, 30.32],
                    [-97.78, 30.34]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-northwest', name: 'Northwest Austin', market: 'austin', color: '#ec4899' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // FM-620/Lake Travis west, Parmer/FM-1431 north, MoPac east, US-183/Lake Austin south
                    [-97.88, 30.30], [-97.86, 30.34], [-97.84, 30.38],
                    [-97.82, 30.42], [-97.80, 30.44],
                    [-97.78, 30.42], [-97.78, 30.38], [-97.78, 30.34],
                    [-97.78, 30.30], [-97.80, 30.28], [-97.82, 30.27],
                    [-97.85, 30.27], [-97.88, 30.28], [-97.88, 30.30]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-round-rock', name: 'Round Rock / Georgetown', market: 'austin', color: '#14b8a6' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // Williamson County — north of SH-45N, along I-35 and SH-130
                    [-97.80, 30.50], [-97.78, 30.52], [-97.74, 30.54],
                    [-97.70, 30.56], [-97.66, 30.60], [-97.62, 30.64],
                    [-97.56, 30.66], [-97.50, 30.66], [-97.44, 30.64],
                    [-97.40, 30.60], [-97.38, 30.56], [-97.38, 30.52],
                    [-97.40, 30.48], [-97.44, 30.46], [-97.48, 30.44],
                    [-97.52, 30.45], [-97.55, 30.48], [-97.58, 30.50],
                    [-97.62, 30.51], [-97.65, 30.51], [-97.67, 30.50],
                    [-97.70, 30.50], [-97.74, 30.50], [-97.78, 30.50],
                    [-97.80, 30.50]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-hays', name: 'Hays County', market: 'austin', color: '#f97316' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // South of SH-45S/Travis County line, I-35 and SH-130 corridors
                    [-98.00, 30.06], [-97.96, 30.08], [-97.90, 30.08],
                    [-97.84, 30.10], [-97.78, 30.06], [-97.74, 30.06],
                    [-97.68, 30.06], [-97.64, 30.06], [-97.60, 30.04],
                    [-97.56, 30.00], [-97.54, 29.96], [-97.54, 29.92],
                    [-97.56, 29.88], [-97.60, 29.86], [-97.66, 29.84],
                    [-97.72, 29.82], [-97.80, 29.82], [-97.88, 29.84],
                    [-97.94, 29.86], [-97.98, 29.90], [-98.00, 29.94],
                    [-98.00, 29.98], [-98.00, 30.02], [-98.00, 30.06]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'atx-far-northeast', name: 'Far Northeast / Manor', market: 'austin', color: '#a855f7' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // East of SH-130, north of US-290E
                    [-97.52, 30.38], [-97.48, 30.40], [-97.44, 30.42],
                    [-97.40, 30.44], [-97.38, 30.42], [-97.36, 30.38],
                    [-97.36, 30.34], [-97.38, 30.30], [-97.40, 30.28],
                    [-97.44, 30.26], [-97.48, 30.28], [-97.50, 30.30],
                    [-97.51, 30.33], [-97.52, 30.35], [-97.52, 30.38]
                ]]
            }
        }
    ]
};
