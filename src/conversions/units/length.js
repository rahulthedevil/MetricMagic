/**
 * Length conversion units.
 * @namespace length
 */
const length = {
    metric: {
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
        dm: {
            name: {
                singular: 'Decimeter',
                plural: 'Decimeters'
            },
            to_anchor: 0.1
        },
        cm: {
            name: {
                singular: 'Centimeter',
                plural: 'Centimeters'
            },
            to_anchor: 1/100
        },
        mm: {
            name: {
                singular: 'Millimeter',
                plural: 'Millimeters'
            },
            to_anchor: 0.001
        },
        µm: {
            name: {
                singular: 'Micrometer',
                plural: 'Micrometers'
            },
            to_anchor: 1e-6
        },
        nm: {
            name: {
                singular: 'Nanometer',
                plural: 'Nanometers'
            },
            to_anchor: 1e-9
        },
        ly: {
            name: {
                singular: 'Light Year',
                plural: 'Light Years'
            },
            to_anchor: 9460730472580800
        },
        Em: {
            name: {
                singular: 'Exameter',
                plural: 'Exameters'
            },
            to_anchor: 1e-18
        },
        Pm: {
            name: {
                singular: 'Petameter',
                plural: 'Petameters'
            },
            to_anchor: 1e-15
        },
        Tm: {
            name: {
                singular: 'Terameter',
                plural: 'Terameters'
            },
            to_anchor: 1e-12
        },
        Gm: {
            name: {
                singular: 'Gigameter',
                plural: 'Gigameters'
            },
            to_anchor: 1e-9
        },
        Mm: {
            name: {
                singular: 'Megameter',
                plural: 'Megameters'
            },
            to_anchor: 1e-6
        },
        hm: {
            name: {
                singular: 'Hectometer',
                plural: 'Hectometers'
            },
            to_anchor: 1e-2
        },
        dam: {
            name: {
                singular: 'Dekameter',
                plural: 'Dekameters'
            },
            to_anchor: 1e-1
        },
        µin: {
            name: {
                singular: 'Micron',
                plural: 'Microns'
            },
            to_anchor: 1e-6
        },
        pm: {
            name: {
                singular: 'Picometer',
                plural: 'Picometers'
            },
            to_anchor: 1e-12
        },
        fm: {
            name: {
                singular: 'Femtometer',
                plural: 'Femtometers'
            },
            to_anchor: 1e-15
        },
        am: {
            name: {
                singular: 'Attometer',
                plural: 'Attometers'
            },
            to_anchor: 1e-18
        },
        Mpc: {
            name: {
                singular: 'Megaparsec',
                plural: 'Megaparsecs'
            },
            to_anchor: 3.08567758149137e22
        },
        kpc: {
            name: {
                singular: 'Kiloparsec',
                plural: 'Kiloparsecs'
            },
            to_anchor: 3.08567758149137e19
        },
        pc: {
            name: {
                singular: 'Parsec',
                plural: 'Parsecs'
            },
            to_anchor: 3.08567758149137e16
        },
        au: {
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
        league_stat: {
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
        mile_stat: {
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
        kyd: {
            name: {
                singular: 'Kiloyard',
                plural: 'Kiloyards'
            },
            to_anchor: 914.4
        },
        fur: {
            name: {
                singular: 'Furlong',
                plural: 'Furlongs'
            },
            to_anchor: 201.168
        },
        fur_us_survey: {
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
        fmth: {
            name: {
                singular: 'Fathom',
                plural: 'Fathoms'
            },
            to_anchor: 1.8288
        },
        fmth_us_survey: {
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
        ft_us_survey: {
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
        in_us_survey: {
            name: {
                singular: 'Inch (US survey)',
                plural: 'Inches (US survey)'
            },
            to_anchor: 0.0254000508001016
        },
        bc: {
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
        µin: {
            name: {
                singular: 'Microinch',
                plural: 'Microinches'
            },
            to_anchor: 2.54e-8
        },
        Å: {
            name: {
                singular: 'Angstrom',
                plural: 'Angstroms'
            },
            to_anchor: 1e-10
        },
        AU: {
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
        fm: {
            name: {
                singular: 'Fermi',
                plural: 'Fermis'
            },
            to_anchor: 1e-15
        },
        arp: {
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
        cal: {
            name: {
                singular: 'Caliber',
                plural: 'Calibers'
            },
            to_anchor: 0.000254
        },
        cin: {
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
        ra: {
            name: {
                singular: 'Russian Archin',
                plural: 'Russian Archins'
            },
            to_anchor: 0.7112
        },
        act: {
            name: {
                singular: 'Roman Actus',
                plural: 'Roman Actus'
            },
            to_anchor: 1.48644864
        },
        vt: {
            name: {
                singular: 'Vara de Tarea',
                plural: 'Vara de Tarea'
            },
            to_anchor: 0.7056
        },
        vc: {
            name: {
                singular: 'Vara Conuquera',
                plural: 'Vara Conuquera'
            },
            to_anchor: 0.8336
        },
        vcst: {
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
        lr: {
            name: {
                singular: 'Long Reed',
                plural: 'Long Reeds'
            },
            to_anchor: 6.096
        },
        rd: {
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
        hbr: {
            name: {
                singular: 'Handbreadth',
                plural: 'Handbreadths'
            },
            to_anchor: 0.1016
        },
        fbr: {
            name: {
                singular: 'Fingerbreadth',
                plural: 'Fingerbreadths'
            },
            to_anchor: 0.0254
        },
        pl: {
            name: {
                singular: 'Planck Length',
                plural: 'Planck Lengths'
            },
            to_anchor: 1.616255e-35
        },
        erc: {
            name: {
                singular: 'Electron Radius (classical)',
                plural: 'Electron Radius (classical)'
            },
            to_anchor: 2.81794e-15
        },
        br: {
            name: {
                singular: 'Bohr Radius',
                plural: 'Bohr Radii'
            },
            to_anchor: 5.29177e-11
        },
        eer: {
            name: {
                singular: 'Earth\'s Equatorial Radius',
                plural: 'Earth\'s Equatorial Radii'
            },
            to_anchor: 6378137
        },
        per: {
            name: {
                singular: 'Earth\'s Polar Radius',
                plural: 'Earth\'s Polar Radii'
            },
            to_anchor: 6356752.3
        },
        eds: {
            name: {
                singular: 'Earth\'s Distance from Sun',
                plural: 'Earth\'s Distances from Sun'
            },
            to_anchor: 149597870700
        },
        sr: {
            name: {
                singular: 'Sun\'s Radius',
                plural: 'Sun\'s Radii'
            },
            to_anchor: 696340000
        }
    },
    imperial: {
        in: {
            name: {
                singular: 'Inch',
                plural: 'Inches'
            },
            to_anchor: 1/12
        },
        ft: {
            name: {
                singular: 'Foot',
                plural: 'Feet'
            },
            to_anchor: 1
        },
        yd: {
            name: {
                singular: 'Yard',
                plural: 'Yards'
            },
            to_anchor: 3
        },
        mi: {
            name: {
                singular: 'Mile',
                plural: 'Miles'
            },
            to_anchor: 5280
        }
    },
    _anchors: {
        metric: {
            unit: 'm',
            ratio: 3.28084
        },
        imperial: {
            unit: 'ft',
            ratio: 0.3048
        }
    }
};

export default length;
