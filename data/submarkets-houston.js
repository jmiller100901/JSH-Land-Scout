// Houston Industrial Submarkets — based on CBRE/Colliers/Partners definitions
// Radial+ring system: Loop 610 (inner), Beltway 8 (middle), SH-99/Grand Parkway (outer)
// Radial freeways divide directional wedges: I-45, US-59/I-69, I-10, US-290, SH-288, SH-225
const SUBMARKETS_HOUSTON = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'hou-northwest', name: 'Northwest Houston', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-45N east, I-10/Memorial south, Grand Parkway/Waller Co west, Tomball/Magnolia north
                    // US-290 and SH-249 are spines
                    [-95.80, 29.82], [-95.72, 29.82], [-95.64, 29.82], [-95.56, 29.84],
                    [-95.48, 29.86], [-95.42, 29.88], [-95.38, 29.92], [-95.36, 29.96],
                    [-95.36, 30.02], [-95.38, 30.08], [-95.42, 30.12], [-95.48, 30.14],
                    [-95.56, 30.16], [-95.64, 30.16], [-95.72, 30.14], [-95.78, 30.10],
                    [-95.82, 30.04], [-95.84, 29.98], [-95.84, 29.92], [-95.82, 29.86],
                    [-95.80, 29.82]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-north', name: 'North Houston / IAH', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-45N spine, US-59/I-69 east boundary, Loop 610N south, Montgomery Co north
                    [-95.38, 29.86], [-95.34, 29.86], [-95.30, 29.88], [-95.26, 29.90],
                    [-95.22, 29.94], [-95.20, 29.98], [-95.20, 30.04], [-95.22, 30.10],
                    [-95.26, 30.14], [-95.30, 30.16], [-95.36, 30.16], [-95.38, 30.14],
                    [-95.42, 30.12], [-95.38, 30.08], [-95.36, 30.02], [-95.36, 29.96],
                    [-95.38, 29.92], [-95.38, 29.86]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-northeast', name: 'Northeast Houston', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // US-59/I-69N west, Ship Channel/I-10E south, Crosby/Liberty Co east, Grand Parkway north
                    [-95.22, 29.78], [-95.16, 29.78], [-95.10, 29.80], [-95.04, 29.82],
                    [-94.98, 29.84], [-94.92, 29.86], [-94.88, 29.90], [-94.88, 29.96],
                    [-94.92, 30.00], [-94.98, 30.02], [-95.06, 30.04], [-95.14, 30.04],
                    [-95.20, 30.04], [-95.20, 29.98], [-95.22, 29.94], [-95.24, 29.90],
                    [-95.24, 29.84], [-95.22, 29.80], [-95.22, 29.78]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-east', name: 'East / Ship Channel', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // Ship Channel spine, Loop 610E/Turning Basin west, Beltway 8E/Baytown east,
                    // SH-225 south boundary
                    [-95.32, 29.72], [-95.26, 29.72], [-95.22, 29.74], [-95.18, 29.76],
                    [-95.14, 29.78], [-95.10, 29.78], [-95.04, 29.78], [-94.98, 29.78],
                    [-94.94, 29.76], [-94.92, 29.74], [-94.92, 29.70], [-94.96, 29.68],
                    [-95.02, 29.66], [-95.08, 29.66], [-95.14, 29.68], [-95.20, 29.68],
                    [-95.26, 29.70], [-95.32, 29.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-southeast', name: 'Southeast Houston / Port', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // SH-225/Ship Channel north, SH-146/Galveston Bay east, I-45S/SH-288 west, Texas City south
                    [-95.20, 29.68], [-95.14, 29.68], [-95.08, 29.66], [-95.02, 29.66],
                    [-94.96, 29.66], [-94.92, 29.64], [-94.90, 29.60], [-94.90, 29.56],
                    [-94.94, 29.52], [-95.00, 29.50], [-95.08, 29.48], [-95.16, 29.48],
                    [-95.22, 29.50], [-95.26, 29.54], [-95.28, 29.58], [-95.28, 29.62],
                    [-95.26, 29.66], [-95.22, 29.68], [-95.20, 29.68]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-south', name: 'South Houston', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // SH-288/US-59S west, I-45S east, Loop 610S north, Grand Parkway/Pearland south
                    [-95.42, 29.62], [-95.38, 29.62], [-95.34, 29.62], [-95.30, 29.64],
                    [-95.28, 29.66], [-95.28, 29.70], [-95.30, 29.72], [-95.32, 29.72],
                    [-95.34, 29.72], [-95.38, 29.72], [-95.42, 29.72], [-95.44, 29.70],
                    [-95.46, 29.68], [-95.46, 29.64], [-95.44, 29.62], [-95.42, 29.62]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-southwest', name: 'Southwest Houston / Sugar Land', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-10 north, US-59/I-69S east/spine, Grand Parkway/Fort Bend south, Grand Parkway west
                    [-95.64, 29.58], [-95.58, 29.58], [-95.52, 29.60], [-95.48, 29.62],
                    [-95.44, 29.64], [-95.42, 29.68], [-95.40, 29.72], [-95.38, 29.76],
                    [-95.40, 29.80], [-95.44, 29.82], [-95.48, 29.82], [-95.52, 29.82],
                    [-95.56, 29.82], [-95.60, 29.82], [-95.64, 29.80], [-95.66, 29.76],
                    [-95.68, 29.72], [-95.68, 29.66], [-95.66, 29.62], [-95.64, 29.58]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-west', name: 'West Houston / Katy', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // I-10 spine, US-290 north boundary, Beltway 8W east, Grand Parkway/Brookshire west
                    [-95.96, 29.74], [-95.90, 29.74], [-95.84, 29.76], [-95.78, 29.78],
                    [-95.72, 29.80], [-95.68, 29.82], [-95.64, 29.82], [-95.64, 29.80],
                    [-95.66, 29.76], [-95.68, 29.72], [-95.68, 29.66], [-95.72, 29.64],
                    [-95.78, 29.64], [-95.84, 29.64], [-95.90, 29.66], [-95.94, 29.68],
                    [-95.96, 29.72], [-95.96, 29.74]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-central', name: 'Central Houston / Inner Loop', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // Inside Loop 610 — limited industrial
                    [-95.48, 29.72], [-95.44, 29.72], [-95.40, 29.72], [-95.38, 29.74],
                    [-95.36, 29.76], [-95.34, 29.78], [-95.34, 29.80], [-95.36, 29.82],
                    [-95.38, 29.84], [-95.40, 29.86], [-95.42, 29.86], [-95.44, 29.86],
                    [-95.48, 29.86], [-95.50, 29.84], [-95.52, 29.82], [-95.52, 29.78],
                    [-95.52, 29.76], [-95.50, 29.74], [-95.48, 29.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-baytown', name: 'Baytown / Mont Belvieu', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // East of Beltway 8E, I-10 corridor, Chambers County
                    [-95.04, 29.72], [-94.98, 29.72], [-94.92, 29.74], [-94.86, 29.76],
                    [-94.80, 29.78], [-94.76, 29.80], [-94.74, 29.84], [-94.76, 29.88],
                    [-94.80, 29.90], [-94.86, 29.90], [-94.92, 29.88], [-94.96, 29.86],
                    [-94.98, 29.84], [-95.02, 29.82], [-95.04, 29.80], [-95.06, 29.78],
                    [-95.06, 29.74], [-95.04, 29.72]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { id: 'hou-tomball-magnolia', name: 'Tomball / Magnolia', market: 'houston' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    // North of Grand Parkway on US-290/SH-249, Montgomery County fringe
                    [-95.72, 30.06], [-95.66, 30.06], [-95.60, 30.08], [-95.56, 30.12],
                    [-95.52, 30.16], [-95.48, 30.20], [-95.50, 30.24], [-95.56, 30.26],
                    [-95.62, 30.26], [-95.68, 30.24], [-95.74, 30.20], [-95.76, 30.16],
                    [-95.76, 30.12], [-95.74, 30.08], [-95.72, 30.06]
                ]]
            }
        }
    ]
};
