/**
 * Mass conversion units.
 * @namespace mass
 */
export const mass = {
    metric: {
        mcg: {
            name: {
                singular: 'Microgram',
                plural: 'Micrograms'
            },
            to_anchor: 1 / 1000000
        },
        mg: {
            name: {
                singular: 'Milligram',
                plural: 'Milligrams'
            },
            to_anchor: 1 / 1000
        },
        g: {
            name: {
                singular: 'Gram',
                plural: 'Grams'
            },
            to_anchor: 1
        },
        dag: {
            name: {
                singular: 'Decagram',
                plural: 'Decagrams'
            },
            to_anchor: 10
        },
        hg: {
            name: {
                singular: 'Hectogram',
                plural: 'Hectograms'
            },
            to_anchor: 100
        },
        dkg: {
            name: {
                singular: 'Dekagram',
                plural: 'Dekagrams'
            },
            to_anchor: 10
        },
        kg: {
            name: {
                singular: 'Kilogram',
                plural: 'Kilograms'
            },
            to_anchor: 1000
        },
        Mg: {
            name: {
                singular: 'Megagram',
                plural: 'Megagrams'
            },
            to_anchor: 1000000
        },
        mt: {
            name: {
                singular: 'Metric Ton',
                plural: 'Metric Tons'
            },
            to_anchor: 1000000
        },
        t: {
            name: {
                singular: 'Tonne',
                plural: 'Tonnes'
            },
            to_anchor: 1000
        },
        ct: {
            name: {
                singular: 'Carat',
                plural: 'Carats'
            },
            to_anchor: 0.2
        },
        amu: {
            name: {
                singular: 'Atomic Mass Unit',
                plural: 'Atomic Mass Units'
            },
            to_anchor: 1.66054e-24
        }
    },
    imperial: {
        oz: {
            name: {
                singular: 'Ounce',
                plural: 'Ounces'
            },
            to_anchor: 1 / 16
        },
        lb: {
            name: {
                singular: 'Pound',
                plural: 'Pounds'
            },
            to_anchor: 1
        },
        t: {
            name: {
                singular: 'Ton',
                plural: 'Tons'
            },
            to_anchor: 2000
        }
    },
    _anchors: {
        metric: {
            unit: 'g',
            ratio: 1 / 453.592
        },
        imperial: {
            unit: 'lb',
            ratio: 453.592
        }
    }
};
