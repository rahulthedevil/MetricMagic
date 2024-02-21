/**
 * Length conversion units.
 * @namespace length
 */
const length = {
    metric: {
        meter: {
            name: {
                singular: 'Meter',
                plural: 'Meters'
            },
            to_anchor: 1
        },
        kilometer: {
            name: {
                singular: 'Kilometer',
                plural: 'Kilometers'
            },
            to_anchor: 1000
        },
        decimeter: {
            name: {
                singular: 'Decimeter',
                plural: 'Decimeters'
            },
            to_anchor: 0.1
        },
        centimeter: {
            name: {
                singular: 'Centimeter',
                plural: 'Centimeters'
            },
            to_anchor: 0.01
        },
        millimeter: {
            name: {
                singular: 'Millimeter',
                plural: 'Millimeters'
            },
            to_anchor: 0.001
        },
        micrometer: {
            name: {
                singular: 'Micrometer',
                plural: 'Micrometers'
            },
            to_anchor: 1e-6
        },
        nanometer: {
            name: {
                singular: 'Nanometer',
                plural: 'Nanometers'
            },
            to_anchor: 1e-9
        },
        light_year: {
            name: {
                singular: 'Light Year',
                plural: 'Light Years'
            },
            to_anchor: 9460730472580800
        },
        exameter: {
            name: {
                singular: 'Exameter',
                plural: 'Exameters'
            },
            to_anchor: 1e18
        },
        petameter: {
            name: {
                singular: 'Petameter',
                plural: 'Petameters'
            },
            to_anchor: 1e15
        },
        terameter: {
            name: {
                singular: 'Terameter',
                plural: 'Terameters'
            },
            to_anchor: 1e12
        },
        gigameter: {
            name: {
                singular: 'Gigameter',
                plural: 'Gigameters'
            },
            to_anchor: 1e9
        },
        megameter: {
            name: {
                singular: 'Megameter',
                plural: 'Megameters'
            },
            to_anchor: 1e6
        },
        hectometer: {
            name: {
                singular: 'Hectometer',
                plural: 'Hectometers'
            },
            to_anchor: 1e2
        },
        dekameter: {
            name: {
                singular: 'Dekameter',
                plural: 'Dekameters'
            },
            to_anchor: 1e1
        },
        micron: {
            name: {
                singular: 'Micron',
                plural: 'Microns'
            },
            to_anchor: 1e-6
        },
        picometer: {
            name: {
                singular: 'Picometer',
                plural: 'Picometers'
            },
            to_anchor: 1e-12
        },
        femtometer: {
            name: {
                singular: 'Femtometer',
                plural: 'Femtometers'
            },
            to_anchor: 1e-15
        },
        attometer: {
            name: {
                singular: 'Attometer',
                plural: 'Attometers'
            },
            to_anchor: 1e-18
        },
        megaparsec: {
            name: {
                singular: 'Megaparsec',
                plural: 'Megaparsecs'
            },
            to_anchor: 3.08567758149137e22
        },
        kiloparsec: {
            name: {
                singular: 'Kiloparsec',
                plural: 'Kiloparsecs'
            },
            to_anchor: 3.08567758149137e19
        },
        parsec: {
            name: {
                singular: 'Parsec',
                plural: 'Parsecs'
            },
            to_anchor: 3.08567758149137e16
        },
        astronomical_unit: {
            name: {
                singular: 'Astronomical Unit',
                plural: 'Astronomical Units'
            },
            to_anchor: 149597870700
        },
        league: {
            name: {
                singular: 'League',
                plural: 'Leagues'
            },
            to_anchor: 4828.032
        },
        nautical_league_uk: {
            name: {
                singular: 'Nautical League (UK)',
                plural: 'Nautical Leagues (UK)'
            },
            to_anchor: 5556
        },
        nautical_league_int: {
            name: {
                singular: 'Nautical League (int.)',
                plural: 'Nautical Leagues (int.)'
            },
            to_anchor: 5556
        },
        league_statute: {
            name: {
                singular: 'League (statute)',
                plural: 'Leagues (statute)'
            },
            to_anchor: 4828.0417
        },
        nautical_mile_uk: {
            name: {
                singular: 'Nautical Mile (UK)',
                plural: 'Nautical Miles (UK)'
            },
            to_anchor: 1853.184
        },
        nautical_mile_int: {
            name: {
                singular: 'Nautical Mile (international)',
                plural: 'Nautical Miles (international)'
            },
            to_anchor: 1852
        },
        mile_statute: {
            name: {
                singular: 'Mile (statute)',
                plural: 'Miles (statute)'
            },
            to_anchor: 1609.344
        },
        mile_us_survey: {
            name: {
                singular: 'Mile (US survey)',
                plural: 'Miles (US survey)'
            },
            to_anchor: 1609.3472186944373
        },
        mile_roman: {
            name: {
                singular: 'Mile (Roman)',
                plural: 'Miles (Roman)'
            },
            to_anchor: 1471.5
        },
        kiloyard: {
            name: {
                singular: 'Kiloyard',
                plural: 'Kiloyards'
            },
            to_anchor: 914.4
        },
        furlong: {
            name: {
                singular: 'Furlong',
                plural: 'Furlongs'
            },
            to_anchor: 201.168
        },
        furlong_us_survey: {
            name: {
                singular: 'Furlong (US survey)',
                plural: 'Furlongs (US survey)'
            },
            to_anchor: 201.168402336
        },
        chain: {
            name: {
                singular: 'Chain',
                plural: 'Chains'
            },
            to_anchor: 20.1168
        },
        chain_us_survey: {
            name: {
                singular: 'Chain (US survey)',
                plural: 'Chains (US survey)'
            },
            to_anchor: 20.1168402336
        },
        rope: {
            name: {
                singular: 'Rope',
                plural: 'Ropes'
            },
            to_anchor: 6.096
        },
        rod: {
            name: {
                singular: 'Rod',
                plural: 'Rods'
            },
            to_anchor: 5.0292
        },
        rod_us_survey: {
            name: {
                singular: 'Rod (US survey)',
                plural: 'Rods (US survey)'
            },
            to_anchor: 5.0292100584
        },
        perch: {
            name: {
                singular: 'Perch',
                plural: 'Perches'
            },
            to_anchor: 5.0292
        },
        pole: {
            name: {
                singular: 'Pole',
                plural: 'Poles'
            },
            to_anchor: 5.0292
        },
        fathom: {
            name: {
                singular: 'Fathom',
                plural: 'Fathoms'
            },
            to_anchor: 1.8288
        },
        fathom_us_survey: {
            name: {
                singular: 'Fathom (US survey)',
                plural: 'Fathoms (US survey)'
            },
            to_anchor: 1.8288036576
        },
        ell: {
            name: {
                singular: 'Ell',
                plural: 'Ells'
            },
            to_anchor: 1.143
        },
        foot_us_survey: {
            name: {
                singular: 'Foot (US survey)',
                plural: 'Feet (US survey)'
            },
            to_anchor: 0.304800609601
        },
        link: {
            name: {
                singular: 'Link',
                plural: 'Links'
            },
            to_anchor: 0.201168
        },
        link_us_survey: {
            name: {
                singular: 'Link (US survey)',
                plural: 'Links (US survey)'
            },
            to_anchor: 0.201168402336
        },
        cubit_uk: {
            name: {
                singular: 'Cubit (UK)',
                plural: 'Cubits (UK)'
            },
            to_anchor: 0.4572
        },
        hand: {
            name: {
                singular: 'Hand',
                plural: 'Hands'
            },
            to_anchor: 0.1016
        },
        span_cloth: {
            name: {
                singular: 'Span (cloth)',
                plural: 'Spans (cloth)'
            },
            to_anchor: 0.2286
        },
        finger_cloth: {
            name: {
                singular: 'Finger (cloth)',
                plural: 'Fingers (cloth)'
            },
            to_anchor: 0.1143
        },
        nail_cloth: {
            name: {
                singular: 'Nail (cloth)',
                plural: 'Nails (cloth)'
            },
            to_anchor: 0.05715
        },
        inch_us_survey: {
            name: {
                singular: 'Inch (US survey)',
                plural: 'Inches (US survey)'
            },
            to_anchor: 0.0254000508001016
        },
        barleycorn: {
            name: {
                singular: 'Barleycorn',
                plural: 'Barleycorns'
            },
            to_anchor: 0.0084666666666667
        },
        mil: {
            name: {
                singular: 'Mil',
                plural: 'Mils'
            },
            to_anchor: 2.54e-5
        },
        microinch: {
            name: {
                singular: 'Microinch',
                plural: 'Microinches'
            },
            to_anchor: 2.54e-8
        },
        angstrom: {
            name: {
                singular: 'Angstrom',
                plural: 'Angstroms'
            },
            to_anchor: 1e-10
        },
        au_of_length: {
            name: {
                singular: 'A.U. of length',
                plural: 'A.U. of length'
            },
            to_anchor: 149597870700
        },
        x_unit: {
            name: {
                singular: 'X-Unit',
                plural: 'X-Units'
            },
            to_anchor: 1.0021e-13
        },
        fermi: {
            name: {
                singular: 'Fermi',
                plural: 'Fermis'
            },
            to_anchor: 1e-15
        },
        arpent: {
            name: {
                singular: 'Arpent',
                plural: 'Arpents'
            },
            to_anchor: 58.471308
        },
        pica: {
            name: {
                singular: 'Pica',
                plural: 'Picas'
            },
            to_anchor: 0.0042333333333333
        },
        point: {
            name: {
                singular: 'Point',
                plural: 'Points'
            },
            to_anchor: 0.00035277777777778
        },
        twip: {
            name: {
                singular: 'Twip',
                plural: 'Twips'
            },
            to_anchor: 1.7638888888889e-5
        },
        aln: {
            name: {
                singular: 'Aln',
                plural: 'Alns'
            },
            to_anchor: 0.593545
        },
        famn: {
            name: {
                singular: 'Famn',
                plural: 'Famn'
            },
            to_anchor: 1.97848
        },
        caliber: {
            name: {
                singular: 'Caliber',
                plural: 'Calibers'
            },
            to_anchor: 0.000254
        },
        centiinch: {
            name: {
                singular: 'Centiinch',
                plural: 'Centiinchs'
            },
            to_anchor: 0.00254
        },
        ken: {
            name: {
                singular: 'Ken',
                plural: 'Ken'
            },
            to_anchor: 1.81818
        },
        russian_archin: {
            name: {
                singular: 'Russian Archin',
                plural: 'Russian Archins'
            },
            to_anchor: 0.7112
        },
        roman_actus: {
            name: {
                singular: 'Roman Actus',
                plural: 'Roman Actus'
            },
            to_anchor: 1.48644864
        },
        vara_de_tarea: {
            name: {
                singular: 'Vara de Tarea',
                plural: 'Vara de Tarea'
            },
            to_anchor: 0.7056
        },
        vara_conuquera: {
            name: {
                singular: 'Vara Conuquera',
                plural: 'Vara Conuquera'
            },
            to_anchor: 0.8336
        },
        vara_castellana: {
            name: {
                singular: 'Vara Castellana',
                plural: 'Vara Castellanas'
            },
            to_anchor: 0.835905
        },
        cubit_greek: {
            name: {
                singular: 'Cubit (Greek)',
                plural: 'Cubit (Greek)'
            },
            to_anchor: 0.462
        },
        long_reed: {
            name: {
                singular: 'Long Reed',
                plural: 'Long Reeds'
            },
            to_anchor: 6.096
        },
        reed: {
            name: {
                singular: 'Reed',
                plural: 'Reeds'
            },
            to_anchor: 3.048
        },
        long_cubit: {
            name: {
                singular: 'Long Cubit',
                plural: 'Long Cubits'
            },
            to_anchor: 0.4572
        },
        handbreadth: {
            name: {
                singular: 'Handbreadth',
                plural: 'Handbreadths'
            },
            to_anchor: 0.1016
        },
        fingerbreadth: {
            name: {
                singular: 'Fingerbreadth',
                plural: 'Fingerbreadths'
            },
            to_anchor: 0.0254
        },
        planck_length: {
            name: {
                singular: 'Planck Length',
                plural: 'Planck Lengths'
            },
            to_anchor: 1.616255e-35
        },
        electron_radius_classical: {
            name: {
                singular: 'Electron Radius (classical)',
                plural: 'Electron Radius (classical)'
            },
            to_anchor: 2.81794e-15
        },
        bohr_radius: {
            name: {
                singular: 'Bohr Radius',
                plural: 'Bohr Radii'
            },
            to_anchor: 5.29177e-11
        },
        earth_equatorial_radius: {
            name: {
                singular: 'Earth\'s Equatorial Radius',
                plural: 'Earth\'s Equatorial Radii'
            },
            to_anchor: 6378137
        },
        earth_polar_radius: {
            name: {
                singular: 'Earth\'s Polar Radius',
                plural: 'Earth\'s Polar Radii'
            },
            to_anchor: 6356752.3
        },
        earth_distance_sun: {
            name: {
                singular: 'Earth\'s Distance from Sun',
                plural: 'Earth\'s Distances from Sun'
            },
            to_anchor: 149597870700
        },
        sun_radius: {
            name: {
                singular: 'Sun\'s Radius',
                plural: 'Sun\'s Radii'
            },
            to_anchor: 696340000
        }
    },
    imperial: {
        inch: {
            name: {
                singular: 'Inch',
                plural: 'Inches'
            },
            to_anchor: 0.0254
        },
        foot: {
            name: {
                singular: 'Foot',
                plural: 'Feet'
            },
            to_anchor: 0.3048
        },
        yard: {
            name: {
                singular: 'Yard',
                plural: 'Yards'
            },
            to_anchor: 0.9144
        },
        mile: {
            name: {
                singular: 'Mile',
                plural: 'Miles'
            },
            to_anchor: 1609.34
        }
    },
    _anchors: {
        metric: {
            unit: 'meter',
            ratio: 1
        },
        imperial: {
            unit: 'foot',
            ratio: 0.3048
        }
    }
};

module.exports = length;