/**
 * Area conversion units.
 * @namespace area
 */
const area = {
    metric: {
        m2: { name: { singular: 'Square Meter', plural: 'Square Meters' }, to_anchor: 1 },
        km2: { name: { singular: 'Square Kilometer', plural: 'Square Kilometers' }, to_anchor: 1000000 },
        cm2: { name: { singular: 'Square Centimeter', plural: 'Square Centimeters' }, to_anchor: 0.0001 },
        mm2: { name: { singular: 'Square Millimeter', plural: 'Square Millimeters' }, to_anchor: 0.000001 },
        um2: { name: { singular: 'Square Micrometer', plural: 'Square Micrometers' }, to_anchor: 1e-12 },
        ha: { name: { singular: 'Hectare', plural: 'Hectares' }, to_anchor: 10000 },
        a: { name: { singular: 'Are', plural: 'Ares' }, to_anchor: 100 },
        nm2: { name: { singular: 'Square Nanometer', plural: 'Square Nanometers' }, to_anchor: 1e-18 },
        dm2: { name: { singular: 'Square Decimeter', plural: 'Square Decimeters' }, to_anchor: 0.01 },
        hm2: { name: { singular: 'Square Hectometer', plural: 'Square Hectometers' }, to_anchor: 10000 }
    },
    imperial: {
        mi2: { name: { singular: 'Square Mile', plural: 'Square Miles' }, to_anchor: 27878400 },
        yd2: { name: { singular: 'Square Yard', plural: 'Square Yards' }, to_anchor: 9 },
        ft2: { name: { singular: 'Square Foot', plural: 'Square Feet' }, to_anchor: 1 },
        in2: { name: { singular: 'Square Inch', plural: 'Square Inches' }, to_anchor: 1 / 144 },
        ac: { name: { singular: 'Acre', plural: 'Acres' }, to_anchor: 43560 },
        ch2: { name: { singular: 'Square Chain', plural: 'Square Chains' }, to_anchor: 43560 },
        rood: { name: { singular: 'Rood', plural: 'Roods' }, to_anchor: 10890 },
        perch: { name: { singular: 'Perch', plural: 'Perches' }, to_anchor: 272.25 },
        pole: { name: { singular: 'Pole', plural: 'Poles' }, to_anchor: 272.25 },
        mil2: { name: { singular: 'Square Mil', plural: 'Square Mils' }, to_anchor: 6.4516e-10 },
        circular_mil: { name: { singular: 'Circular Mil', plural: 'Circular Mils' }, to_anchor: 5.067075e-10 }
    },
    _anchors: {
        metric: { unit: 'm2', ratio: 1 / 0.09290304 }, // Square foot to square meter ratio
        imperial: { unit: 'ft2', ratio: 0.09290304 } // Square meter to square foot ratio
    }
};

export default area;

