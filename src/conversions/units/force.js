const force = {
    metric: {
        N: { name: { singular: 'Newton', plural: 'Newtons' }, to_anchor: 1 },
        kN: { name: { singular: 'Kilonewton', plural: 'Kilonewtons' }, to_anchor: 1000 },
        gf: { name: { singular: 'Gram-force', plural: 'Gram-forces' }, to_anchor: 0.00980665 },
        kgf: { name: { singular: 'Kilogram-force', plural: 'Kilogram-forces' }, to_anchor: 9.80665 },
        tf: { name: { singular: 'Ton-force (metric)', plural: 'Ton-forces (metric)' }, to_anchor: 9806.65 },
        EN: { name: { singular: 'Exanewton', plural: 'Exanewtons' }, to_anchor: 1e18 },
        PT: { name: { singular: 'Petanewton', plural: 'Petanewtons' }, to_anchor: 1e15 },
        TN: { name: { singular: 'Teranewton', plural: 'Teranewtons' }, to_anchor: 1e12 },
        GN: { name: { singular: 'Giganewton', plural: 'Giganewtons' }, to_anchor: 1e9 },
        MN: { name: { singular: 'Meganewton', plural: 'Meganewtons' }, to_anchor: 1e6 },
        hN: { name: { singular: 'Hectonewton', plural: 'Hectonewtons' }, to_anchor: 100 },
        daN: { name: { singular: 'Dekanewton', plural: 'Dekanewtons' }, to_anchor: 10 },
        dN: { name: { singular: 'Decinewton', plural: 'Decinewtons' }, to_anchor: 0.1 },
        cN: { name: { singular: 'Centinewton', plural: 'Centinewtons' }, to_anchor: 0.01 },
        mN: { name: { singular: 'Millinewton', plural: 'Millinewtons' }, to_anchor: 0.001 },
        µN: { name: { singular: 'Micronewton', plural: 'Micronewtons' }, to_anchor: 1e-6 },
        nN: { name: { singular: 'Nanonewton', plural: 'Nanonewtons' }, to_anchor: 1e-9 },
        pN: { name: { singular: 'Piconewton', plural: 'Piconewtons' }, to_anchor: 1e-12 },
        fN: { name: { singular: 'Femtonewton', plural: 'Femtonewtons' }, to_anchor: 1e-15 },
        aN: { name: { singular: 'Attonewton', plural: 'Attonewtons' }, to_anchor: 1e-18 },
        dyn: { name: { singular: 'Dyne', plural: 'Dynes' }, to_anchor: 1e-5 },
        J_m: { name: { singular: 'Joule/meter', plural: 'Joules/meter' }, to_anchor: 1 },
        J_cm: { name: { singular: 'Joule/centimeter', plural: 'Joules/centimeter' }, to_anchor: 100 },
    },
    imperial: {
        lbf: { name: { singular: 'Pound-force', plural: 'Pound-forces' }, to_anchor: 1 },
        ozf: { name: { singular: 'Ounce-force', plural: 'Ounce-forces' }, to_anchor: 1 / 16 },
        tonf_UK: { name: { singular: 'Ton-force (long)', plural: 'Ton-forces (long)' }, to_anchor: 2240 },
        tonf_US: { name: { singular: 'Ton-force (short)', plural: 'Ton-forces (short)' }, to_anchor: 2000 },
        kipf: { name: { singular: 'Kip-force', plural: 'Kip-forces' }, to_anchor: 1000 },
    },
    _anchors: {
        metric: { unit: 'N', ratio: 1 },
        imperial: { unit: 'lbf', ratio: 1 / 4.44822 }
    }
};

export default force;
