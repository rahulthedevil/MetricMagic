/**
 * Temperature conversion units.
 * @namespace temperature
 */
const temperature = {
    metric: {
        C: {
            name: {
                singular: 'Celsius',
                plural: 'Celsius'
            },
            to_anchor: 1
        },
        K: {
            name: {
                singular: 'Kelvin',
                plural: 'Kelvin'
            },
            to_anchor: 1,
            anchor_shift: 273.15 // Celsius to Kelvin shift
        },
        // Add other metric temperature units and their conversion factors here
    },
    imperial: {
        F: {
            name: {
                singular: 'Fahrenheit',
                plural: 'Fahrenheit'
            },
            to_anchor: 1
        },
        // Add other imperial temperature units and their conversion factors here
    },
    _anchors: {
        metric: {
            unit: 'C',
            transform: (val) => (val - 32) * 5/9 // Fahrenheit to Celsius formula
        },
        imperial: {
            unit: 'F',
            transform: (val) => val * 9/5 + 32 // Celsius to Fahrenheit formula
        }
    }
};

export default temperature;
