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
            to_anchor: 1,
            anchor_shift: 0,
        },
        K: {
            name: {
                singular: 'Kelvin',
                plural: 'Kelvin'
            },
            to_anchor: 1,
            anchor_shift: 273.15 // Celsius to Kelvin shift
        },
    },
    imperial: {
        F: {
            name: {
                singular: 'Fahrenheit',
                plural: 'Fahrenheit'
            },
            to_anchor: 1
        },
        R: {
            name: {
              singular: 'degree Rankine',
              plural: 'degrees Rankine',
            },
            to_anchor: 1,
            anchor_shift: 459.67,
        },
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
