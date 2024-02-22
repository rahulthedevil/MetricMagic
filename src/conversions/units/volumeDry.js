const volumeDry = {
    metric: {
        L: { name: { singular: 'Liter', plural: 'Liters' }, to_anchor: 1 },
    },
    imperial: {
        bbl_dry_US: { name: { singular: 'Barrel dry (US)', plural: 'Barrels dry (US)' }, to_anchor: 115.627 },
        pt_dry_US: { name: { singular: 'Pint dry (US)', plural: 'Pints dry (US)' }, to_anchor: 0.550611 },
        qt_dry_US: { name: { singular: 'Quart dry (US)', plural: 'Quarts dry (US)' }, to_anchor: 1.10122 },
        pk_US: { name: { singular: 'Peck (US)', plural: 'Pecks (US)' }, to_anchor: 8.80977 },
        pk_UK: { name: { singular: 'Peck (UK)', plural: 'Pecks (UK)' }, to_anchor: 9.09218 },
        bu_US: { name: { singular: 'Bushel (US)', plural: 'Bushels (US)' }, to_anchor: 35.2391 },
        bu_UK: { name: { singular: 'Bushel (UK)', plural: 'Bushels (UK)' }, to_anchor: 36.3687 },
        cor_biblical: { name: { singular: 'Cor (Biblical)', plural: 'Cors (Biblical)' }, to_anchor: 220.55 },
        homer_biblical: { name: { singular: 'Homer (Biblical)', plural: 'Homers (Biblical)' }, to_anchor: 220.55 },
        ephah_biblical: { name: { singular: 'Ephah (Biblical)', plural: 'Ephahs (Biblical)' }, to_anchor: 20.55 },
        seah_biblical: { name: { singular: 'Seah (Biblical)', plural: 'Seahs (Biblical)' }, to_anchor: 7.02 },
        omer_biblical: { name: { singular: 'Omer (Biblical)', plural: 'Omers (Biblical)' }, to_anchor: 2.21 },
        cab_biblical: { name: { singular: 'Cab (Biblical)', plural: 'Cabs (Biblical)' }, to_anchor: 1.1 },
        log_biblical: { name: { singular: 'Log (Biblical)', plural: 'Logs (Biblical)' }, to_anchor: 0.066 },
    },
    _anchors: {
        metric: { unit: 'L', ratio: 1 },
        imperial: { unit: 'bbl_dry_US', ratio: 1 / 115.627 }
    }
};

export default volumeDry;