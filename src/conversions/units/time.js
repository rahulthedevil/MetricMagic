/**
 * Time conversion units.
 * @namespace time
 */
const time = {
    metric: {
        s: {
            name: {
                singular: 'Second',
                plural: 'Seconds'
            },
            to_anchor: 1
        },
        ms: {
            name: {
                singular: 'Millisecond',
                plural: 'Milliseconds'
            },
            to_anchor: 1 / 1000
        },
        µs: {
            name: {
                singular: 'Microsecond',
                plural: 'Microseconds'
            },
            to_anchor: 1 / 1000000
        },
        ns: {
            name: {
                singular: 'Nanosecond',
                plural: 'Nanoseconds'
            },
            to_anchor: 1 / 1000000000
        },
        ps: {
            name: {
                singular: 'Picosecond',
                plural: 'Picoseconds'
            },
            to_anchor: 1 / 1000000000000
        },
        fs: {
            name: {
                singular: 'Femtosecond',
                plural: 'Femtoseconds'
            },
            to_anchor: 1 / 1000000000000000
        },
        as: {
            name: {
                singular: 'Attosecond',
                plural: 'Attoseconds'
            },
            to_anchor: 1 / 1000000000000000000
        }
    },
    imperial: {
        min: {
            name: {
                singular: 'Minute',
                plural: 'Minutes'
            },
            to_anchor: 60
        },
        h: {
            name: {
                singular: 'Hour',
                plural: 'Hours'
            },
            to_anchor: 3600
        },
        d: {
            name: {
                singular: 'Day',
                plural: 'Days'
            },
            to_anchor: 86400
        },
        wk: {
            name: {
                singular: 'Week',
                plural: 'Weeks'
            },
            to_anchor: 604800
        },
        mo: {
            name: {
                singular: 'Month',
                plural: 'Months'
            },
            to_anchor: 2628000
        },
        yr: {
            name: {
                singular: 'Year',
                plural: 'Years'
            },
            to_anchor: 31536000
        },
        decade: {
            name: {
                singular: 'Decade',
                plural: 'Decades'
            },
            to_anchor: 315360000
        },
        century: {
            name: {
                singular: 'Century',
                plural: 'Centuries'
            },
            to_anchor: 3153600000
        },
        millennium: {
            name: {
                singular: 'Millennium',
                plural: 'Millennia'
            },
            to_anchor: 31536000000
        }
    },
    _anchors: {
        metric: {
            unit: 's',
            ratio: 1
        },
        imperial: {
            unit: 's',
            ratio: 1
        }
    }
};

export default time;
