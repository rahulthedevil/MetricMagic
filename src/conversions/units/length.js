/**
 * @file This file contains the definition of the length conversion units.
 * @module conversions/units/length
 */

/**
 * Object containing the length conversion units.
 * @type {Object}
 */
const length = {
    metric: {
        mm: {
            name: {
                singular: 'Millimeter',
                plural: 'Millimeters'
            },
            to_anchor: 1 / 1000
        },
        cm: {
            name: {
                singular: 'Centimeter',
                plural: 'Centimeters'
            },
            to_anchor: 1 / 100
        },
        m: {
            name: {
                singular: 'Meter',
                plural: 'Meters'
            },
            to_anchor: 1
        },
        km: {
            name: {
                singular: 'Kilometer',
                plural: 'Kilometers'
            },
            to_anchor: 1000
        },
        ly: {
            name: {
                singular: 'Light Year',
                plural: 'Light Years'
            },
            to_anchor: 9460730472580800
        },
        pc: {
            name: {
                singular: 'Parsec',
                plural: 'Parsecs'
            },
            to_anchor: 30856775814671900
        },
        nm: {
            name: {
                singular: 'Nanometer',
                plural: 'Nanometers'
            },
            to_anchor: 1e-9
        },
        um: {
            name: {
                singular: 'Micrometer',
                plural: 'Micrometers'
            },
            to_anchor: 1e-6
        },
        nmi: {
            name: {
                singular: 'Nautical Mile',
                plural: 'Nautical Miles'
            },
            to_anchor: 1852
        },
        fm: {
            name: {
                singular: 'Fathom',
                plural: 'Fathoms'
            },
            to_anchor: 1.8288
        }
    },
    imperial: {
        inch: {
            name: {
                singular: 'Inch',
                plural: 'Inches'
            },
            to_anchor: 1
        },
        ft: {
            name: {
                singular: 'Foot',
                plural: 'Feet'
            },
            to_anchor: 12
        },
        yd: {
            name: {
                singular: 'Yard',
                plural: 'Yards'
            },
            to_anchor: 36
        },
        mi: {
            name: {
                singular: 'Mile',
                plural: 'Miles'
            },
            to_anchor: 63360
        }
    },
    _anchors: {
        metric: {
            unit: 'm',
            ratio: 3.28084
        },
        imperial: {
            unit: 'ft',
            ratio: 1 / 3.28084
        }
    }
};

export default length;
