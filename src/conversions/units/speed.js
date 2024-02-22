const speed = {
    metric: {
        'm/s': { name: { singular: 'Meter per second', plural: 'Meters per second' }, to_anchor: 1 },
        'km/h': { name: { singular: 'Kilometer per hour', plural: 'Kilometers per hour' }, to_anchor: 1 / 3.6 }, // 1 km/h = 1/3.6 m/s
        'cm/s': { name: { singular: 'Centimeter per second', plural: 'Centimeters per second' }, to_anchor: 1 / 100 }, // 1 cm/s = 1/100 m/s
        'mm/s': { name: { singular: 'Millimeter per second', plural: 'Millimeters per second' }, to_anchor: 1 / 1000 }, // 1 mm/s = 1/1000 m/s
        'km/min': { name: { singular: 'Kilometer per minute', plural: 'Kilometers per minute' }, to_anchor: 1 / 60 }, // 1 km/min = 1/60 km/h
        'km/s': { name: { singular: 'Kilometer per second', plural: 'Kilometers per second' }, to_anchor: 1e3 }, // 1 km/s = 1000 m/s
    },
    imperial: {
        'ft/s': { name: { singular: 'Foot per second', plural: 'Feet per second' }, to_anchor: 0.3048 }, // 1 ft/s = 0.3048 m/s
        'mi/h': { name: { singular: 'Mile per hour', plural: 'Miles per hour' }, to_anchor: 0.44704 }, // 1 mi/h = 0.44704 m/s
        'ft/min': { name: { singular: 'Foot per minute', plural: 'Feet per minute' }, to_anchor: 0.3048 / 60 }, // 1 ft/min = 0.3048/60 m/s
        'ft/h': { name: { singular: 'Foot per hour', plural: 'Feet per hour' }, to_anchor: 0.3048 / 3600 }, // 1 ft/h = 0.3048/3600 m/s
        'mi/min': { name: { singular: 'Mile per minute', plural: 'Miles per minute' }, to_anchor: 0.44704 / 60 }, // 1 mi/min = 0.44704/60 m/s
        'mi/s': { name: { singular: 'Mile per second', plural: 'Miles per second' }, to_anchor: 0.44704 * 3600 }, // 1 mi/s = 0.44704*3600 m/s
        'kn': { name: { singular: 'Knot', plural: 'Knots' }, to_anchor: 0.514444 }, // 1 knot = 0.514444 m/s
    },
    _anchors: {
        metric: { unit: 'm/s', ratio: 1 },
        imperial: { unit: 'ft/s', ratio: 0.3048 }, // 1 ft/s = 0.3048 m/s
    }
};

export default speed;
