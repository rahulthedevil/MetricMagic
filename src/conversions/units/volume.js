/**
 * Volume conversion units.
 * @namespace volume
 */
const volume = {
    metric: {
        m3: {
            name: {
                singular: 'Cubic Meter',
                plural: 'Cubic Meters'
            },
            to_anchor: 1
        },
        km3: {
            name: {
                singular: 'Cubic Kilometer',
                plural: 'Cubic Kilometers'
            },
            to_anchor: 1000000000
        },
        cm3: {
            name: {
                singular: 'Cubic Centimeter',
                plural: 'Cubic Centimeters'
            },
            to_anchor: 1 / 1000000
        },
        mm3: {
            name: {
                singular: 'Cubic Millimeter',
                plural: 'Cubic Millimeters'
            },
            to_anchor: 1 / 1000000000
        },
        l: {
            name: {
                singular: 'Liter',
                plural: 'Liters'
            },
            to_anchor: 1000
        },
        ml: {
            name: {
                singular: 'Milliliter',
                plural: 'Milliliters'
            },
            to_anchor: 1
        },
        el: {
            name: {
                singular: 'Exaliter',
                plural: 'Exaliters'
            },
            to_anchor: 1e-15
        },
        pl: {
            name: {
                singular: 'Petaliter',
                plural: 'Petaliters'
            },
            to_anchor: 1e-12
        },
        tl: {
            name: {
                singular: 'Teraliter',
                plural: 'Teraliters'
            },
            to_anchor: 1e-9
        },
        gl: {
            name: {
                singular: 'Gigaliter',
                plural: 'Gigaliters'
            },
            to_anchor: 1e-6
        },
        ml: {
            name: {
                singular: 'Megaliter',
                plural: 'Megaliters'
            },
            to_anchor: 0.001
        },
        hl: {
            name: {
                singular: 'Hectoliter',
                plural: 'Hectoliters'
            },
            to_anchor: 0.1
        },
        dal: {
            name: {
                singular: 'Dekaliter',
                plural: 'Dekaliters'
            },
            to_anchor: 10
        },
        dl: {
            name: {
                singular: 'Deciliter',
                plural: 'Deciliters'
            },
            to_anchor: 100
        },
        cl: {
            name: {
                singular: 'Centiliter',
                plural: 'Centiliters'
            },
            to_anchor: 1000
        },
        µl: {
            name: {
                singular: 'Microliter',
                plural: 'Microliters'
            },
            to_anchor: 1e6
        },
        nl: {
            name: {
                singular: 'Nanoliter',
                plural: 'Nanoliters'
            },
            to_anchor: 1e9
        },
        pl: {
            name: {
                singular: 'Picoliter',
                plural: 'Picoliters'
            },
            to_anchor: 1e12
        },
        fl: {
            name: {
                singular: 'Femtoliter',
                plural: 'Femtoliters'
            },
            to_anchor: 1e15
        },
        al: {
            name: {
                singular: 'Attoliter',
                plural: 'Attoliters'
            },
            to_anchor: 1e18
        },
        cc: {
            name: {
                singular: 'Cubic Centimeter',
                plural: 'Cubic Centimeters'
            },
            to_anchor: 1
        },
        dp: {
            name: {
                singular: 'Drop',
                plural: 'Drops'
            },
            to_anchor: 20000
        },
        bl: {
            name: {
                singular: 'Barrel (oil)',
                plural: 'Barrels (oil)'
            },
            to_anchor: 158.987
        },
        bu: {
            name: {
                singular: 'Barrel (US)',
                plural: 'Barrels (US)'
            },
            to_anchor: 119.24
        },
        bu: {
            name: {
                singular: 'Barrel (UK)',
                plural: 'Barrels (UK)'
            },
            to_anchor: 163.659
        },
        gu: {
            name: {
                singular: 'Gallon (US)',
                plural: 'Gallons (US)'
            },
            to_anchor: 264.172
        },
        qu: {
            name: {
                singular: 'Quart (US)',
                plural: 'Quarts (US)'
            },
            to_anchor: 1056.69
        },
        pu: {
            name: {
                singular: 'Pint (US)',
                plural: 'Pints (US)'
            },
            to_anchor: 2113.38
        },
        cu: {
            name: {
                singular: 'Cup (US)',
                plural: 'Cups (US)'
            },
            to_anchor: 4226.75
        },
        tbu: {
            name: {
                singular: 'Tablespoon (US)',
                plural: 'Tablespoons (US)'
            },
            to_anchor: 76800
        },
        tspu: {
            name: {
                singular: 'Teaspoon (US)',
                plural: 'Teaspoons (US)'
            },
            to_anchor: 230400
        }
    },
    imperial: {
        mi3: {
            name: {
                singular: 'Cubic Mile',
                plural: 'Cubic Miles'
            },
            to_anchor: 4168181825.440579584
        },
        yd3: {
            name: {
                singular: 'Cubic Yard',
                plural: 'Cubic Yards'
            },
            to_anchor: 46656
        },
        ft3: {
            name: {
                singular: 'Cubic Foot',
                plural: 'Cubic Feet'
            },
            to_anchor: 1728
        },
        in3: {
            name: {
                singular: 'Cubic Inch',
                plural: 'Cubic Inches'
            },
            to_anchor: 1
        },
        gal: {
            name: {
                singular: 'Gallon',
                plural: 'Gallons'
            },
            to_anchor: 231
        },
        qt: {
            name: {
                singular: 'Quart',
                plural: 'Quarts'
            },
            to_anchor: 57.75
        },
        pt: {
            name: {
                singular: 'Pint',
                plural: 'Pints'
            },
            to_anchor: 28.875
        },
        cup: {
            name: {
                singular: 'Cup',
                plural: 'Cups'
            },
            to_anchor: 14.438
        },
        fl_oz: {
            name: {
                singular: 'Fluid Ounce',
                plural: 'Fluid Ounces'
            },
            to_anchor: 1.805
        },
        tbsp: {
            name: {
                singular: 'Tablespoon',
                plural: 'Tablespoons'
            },
            to_anchor: 1.04167
        },
        tsp: {
            name: {
                singular: 'Teaspoon',
                plural: 'Teaspoons'
            },
            to_anchor: 0.333333
        },
        igal: {
            name: {
                singular: 'Imperial Gallon',
                plural: 'Imperial Gallons'
            },
            to_anchor: 277.419
        },
        iqt: {
            name: {
                singular: 'Imperial Quart',
                plural: 'Imperial Quarts'
            },
            to_anchor: 69.355
        },
        ipt: {
            name: {
                singular: 'Imperial Pint',
                plural: 'Imperial Pints'
            },
            to_anchor: 34.677
        },
        ifl_oz: {
            name: {
                singular: 'Imperial Fluid Ounce',
                plural: 'Imperial Fluid Ounces'
            },
            to_anchor: 1.73387
        },
        itbsp: {
            name: {
                singular: 'Imperial Tablespoon',
                plural: 'Imperial Tablespoons'
            },
            to_anchor: 1
        },
        itsp: {
            name: {
                singular: 'Imperial Teaspoon',
                plural: 'Imperial Teaspoons'
            },
            to_anchor: 0.333333
        },
        ccf: {
            name: {
                singular: 'Hundred-cubic foot',
                plural: 'Hundred-cubic feet'
            },
            to_anchor: 748.052
        },
        acre_ft: {
            name: {
                singular: 'Acre-foot',
                plural: 'Acre-feet'
            },
            to_anchor: 1.60469e+6
        },
        ac_ft: {
            name: {
                singular: 'Acre-foot (US survey)',
                plural: 'Acre-feet (US survey)'
            },
            to_anchor: 1.60469e+6
        },
        ac_in: {
            name: {
                singular: 'Acre-inch',
                plural: 'Acre-inches'
            },
            to_anchor: 133724
        }
    },
    _anchors: {
        metric: {
            unit: 'l',
            ratio: 33.814
        },
        imperial: {
            unit: 'fl_oz',
            ratio: 1 / 33.814
        }
    }
};

export default volume;
