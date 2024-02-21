/**
 * Mass conversion units.
 * @namespace mass
 */
const mass = {
    metric: {
        kg: {
            name: {
                singular: 'Kilogram',
                plural: 'Kilograms'
            },
            to_anchor: 1
        },
        g: {
            name: {
                singular: 'Gram',
                plural: 'Grams'
            },
            to_anchor: 1 / 1000
        },
        mg: {
            name: {
                singular: 'Milligram',
                plural: 'Milligrams'
            },
            to_anchor: 1 / 1000000
        },
        t: {
            name: {
                singular: 'Metric Ton',
                plural: 'Metric Tons'
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
        u: {
            name: {
                singular: 'Atomic Mass Unit',
                plural: 'Atomic Mass Units'
            },
            to_anchor: 6.0221366516752e+26
        },
        Eg: {
            name: {
                singular: 'Exagram',
                plural: 'Exagrams'
            },
            to_anchor: 1e+18
        },
        Pg: {
            name: {
                singular: 'Petagram',
                plural: 'Petagrams'
            },
            to_anchor: 1e+15
        },
        Tg: {
            name: {
                singular: 'Teragram',
                plural: 'Teragrams'
            },
            to_anchor: 1e+12
        },
        Gg: {
            name: {
                singular: 'Gigagram',
                plural: 'Gigagrams'
            },
            to_anchor: 1e+9
        },
        Mg: {
            name: {
                singular: 'Megagram',
                plural: 'Megagrams'
            },
            to_anchor: 1e+6
        },
        hg: {
            name: {
                singular: 'Hectogram',
                plural: 'Hectograms'
            },
            to_anchor: 1e+2
        },
        dag: {
            name: {
                singular: 'Dekagram',
                plural: 'Dekagrams'
            },
            to_anchor: 1e+1
        },
        dg: {
            name: {
                singular: 'Decigram',
                plural: 'Decigrams'
            },
            to_anchor: 1e-1
        },
        cg: {
            name: {
                singular: 'Centigram',
                plural: 'Centigrams'
            },
            to_anchor: 1e-2
        },
        μg: {
            name: {
                singular: 'Microgram',
                plural: 'Micrograms'
            },
            to_anchor: 1e-3
        },
        ng: {
            name: {
                singular: 'Nanogram',
                plural: 'Nanograms'
            },
            to_anchor: 1e-6
        },
        pg: {
            name: {
                singular: 'Picogram',
                plural: 'Picograms'
            },
            to_anchor: 1e-9
        },
        fg: {
            name: {
                singular: 'Femtogram',
                plural: 'Femtograms'
            },
            to_anchor: 1e-12
        },
        ag: {
            name: {
                singular: 'Attogram',
                plural: 'Attograms'
            },
            to_anchor: 1e-15
        },
        Dalton: {
            name: {
                singular: 'Dalton',
                plural: 'Daltons'
            },
            to_anchor: 1.66053906660e-27
        },
        kgfspm: {
            name: {
                singular: 'Kilogram-force square second/meter',
                plural: 'Kilograms-force square second/meter'
            },
            to_anchor: 1.0197162129779e+14
        },
        kips: {
            name: {
                singular: 'Kilopound',
                plural: 'Kilopounds'
            },
            to_anchor: 2.2046226218488e+15
        },
        lbfpsf: {
            name: {
                singular: 'Pound-force square second/foot',
                plural: 'Pounds-force square second/foot'
            },
            to_anchor: 6.8947572931783e+3
        },
        gammar: {
            name: {
                singular: 'Gamma',
                plural: 'Gammas'
            },
            to_anchor: 1
        },
        talentBH: {
            name: {
                singular: 'Talent (Biblical Hebrew)',
                plural: 'Talents (Biblical Hebrew)'
            },
            to_anchor: 2.9392163178579e+13
        },
        minaBH: {
            name: {
                singular: 'Mina (Biblical Hebrew)',
                plural: 'Minas (Biblical Hebrew)'
            },
            to_anchor: 1.7635297907148e+15
        },
        shekelBH: {
            name: {
                singular: 'Shekel (Biblical Hebrew)',
                plural: 'Shekels (Biblical Hebrew)'
            },
            to_anchor: 8.817648953574e+16
        },
        bekaniBH: {
            name: {
                singular: 'Bekan (Biblical Hebrew)',
                plural: 'Bekans (Biblical Hebrew)'
            },
            to_anchor: 1.7635297907148e+17
        },
        gerahBH: {
            name: {
                singular: 'Gerah (Biblical Hebrew)',
                plural: 'Gerahs (Biblical Hebrew)'
            },
            to_anchor: 1.7635297907148e+18
        },
        talentBG: {
            name: {
                singular: 'Talent (Biblical Greek)',
                plural: 'Talents (Biblical Greek)'
            },
            to_anchor: 4.8917746107484e+13
        },
        minaBG: {
            name: {
                singular: 'Mina (Biblical Greek)',
                plural: 'Minas (Biblical Greek)'
            },
            to_anchor: 2.934464766449e+15
        },
        tetradrachmaBG: {
            name: {
                singular: 'Tetradrachma (Biblical Greek)',
                plural: 'Tetradrachmas (Biblical Greek)'
            },
            to_anchor: 7.3361619161225e+16
        },
        didrachmaBG: {
            name: {
                singular: 'Didrachma (Biblical Greek)',
                plural: 'Didrachmas (Biblical Greek)'
            },
            to_anchor: 1.4672323832245e+17
        },
        drachmaBG: {
            name: {
                singular: 'Drachma (Biblical Greek)',
                plural: 'Drachmas (Biblical Greek)'
            },
            to_anchor: 2.934464766449e+17
        },
        denariusBR: {
            name: {
                singular: 'Denarius (Biblical Roman)',
                plural: 'Denarii (Biblical Roman)'
            },
            to_anchor: 2.5866716118896e+17
        },
        assarionBR: {
            name: {
                singular: 'Assarion (Biblical Roman)',
                plural: 'Assarions (Biblical Roman)'
            },
            to_anchor: 4.1386745782234e+18
        },
        quadransBR: {
            name: {
                singular: 'Quadrans (Biblical Roman)',
                plural: 'Quadrans (Biblical Roman)'
            },
            to_anchor: 1.655469831289e+19
        },
        leptonBR: {
            name: {
                singular: 'Lepton (Biblical Roman)',
                plural: 'Leptons (Biblical Roman)'
            },
            to_anchor: 3.310939662578e+19
        },
        Planck_mass: {
            name: {
                singular: 'Planck Mass',
                plural: 'Planck Masses'
            },
            to_anchor: 2.176434E-8
        },
        Electron_mass_rest: {
            name: {
                singular: 'Electron Mass (rest)',
                plural: 'Electron Masses (rest)'
            },
            to_anchor: 5.4857990946e+25
        },
        Muon_mass: {
            name: {
                singular: 'Muon Mass',
                plural: 'Muon Masses'
            },
            to_anchor: 2.636661000334e+23
        },
        Proton_mass: {
            name: {
                singular: 'Proton Mass',
                plural: 'Proton Masses'
            },
            to_anchor: 2.952152988801e+22
        },
        Neutron_mass: {
            name: {
                singular: 'Neutron Mass',
                plural: 'Neutron Masses'
            },
            to_anchor: 2.947594042822e+22
        },
        Deuteron_mass: {
            name: {
                singular: 'Deuteron Mass',
                plural: 'Deuteron Masses'
            },
            to_anchor: 1.473911760707e+22
        },
        Earth_mass: {
            name: {
                singular: 'Earth\'s Mass',
                plural: 'Earth\'s Masses'
            },
            to_anchor: 5.9721986e+36
        },
        Sun_mass: {
            name: {
                singular: 'Sun\'s Mass',
                plural: 'Sun\'s Masses'
            },
            to_anchor: 1.989e+33
        }
    },
    imperial: {
        lbs: {
            name: {
                singular: 'Pound',
                plural: 'Pounds'
            },
            to_anchor: 1 / 453.59237
        },
        oz: {
            name: {
                singular: 'Ounce',
                plural: 'Ounces'
            },
            to_anchor: 1 / 28.349523125
        },
        kip: {
            name: {
                singular: 'Kip',
                plural: 'Kips'
            },
            to_anchor: 1000
        },
        slug: {
            name: {
                singular: 'Slug',
                plural: 'Slugs'
            },
            to_anchor: 1 / 14.59390294
        }
    },
    _anchors: {
        metric: {
            unit: 'kg',
            ratio: 1
        },
        imperial: {
            unit: 'lbs',
            ratio: 1
        }
    }
};

module.exports = mass;
