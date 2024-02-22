const dataStorage = {
    binary: {
        'b': { name: { singular: 'Bit', plural: 'Bits' }, to_anchor: 1 },
        'B': { name: { singular: 'Byte', plural: 'Bytes' }, to_anchor: 8 },
        'nibble': { name: { singular: 'Nibble', plural: 'Nibbles' }, to_anchor: 4 },
        'character': { name: { singular: 'Character', plural: 'Characters' }, to_anchor: 8 },
        'word': { name: { singular: 'Word', plural: 'Words' }, to_anchor: 16 },
        'MAPM-word': { name: { singular: 'MAPM-Word', plural: 'MAPM-Words' }, to_anchor: 95 },
        'quadruple-word': { name: { singular: 'Quadruple-Word', plural: 'Quadruple-Words' }, to_anchor: 64 },
        'block': { name: { singular: 'Block', plural: 'Blocks' }, to_anchor: 512 },
        'kb': { name: { singular: 'Kilobit', plural: 'Kilobits' }, to_anchor: 1024 },
        'kB': { name: { singular: 'Kilobyte', plural: 'Kilobytes' }, to_anchor: 8192 },
        'kilobyte': { name: { singular: 'Kilobyte', plural: 'Kilobytes' }, to_anchor: 8000 },
        'Mb': { name: { singular: 'Megabit', plural: 'Megabits' }, to_anchor: 1048576 },
        'MB': { name: { singular: 'Megabyte', plural: 'Megabytes' }, to_anchor: 8388608 },
        'megabyte': { name: { singular: 'Megabyte', plural: 'Megabytes' }, to_anchor: 8000000 },
        'Gb': { name: { singular: 'Gigabit', plural: 'Gigabits' }, to_anchor: 1073741824 },
        'GB': { name: { singular: 'Gigabyte', plural: 'Gigabytes' }, to_anchor: 8589934592 },
        'gigabyte': { name: { singular: 'Gigabyte', plural: 'Gigabytes' }, to_anchor: 8000000000 },
        'Tb': { name: { singular: 'Terabit', plural: 'Terabits' }, to_anchor: 1099511627776 },
        'TB': { name: { singular: 'Terabyte', plural: 'Terabytes' }, to_anchor: 8796093022208 },
        'terabyte': { name: { singular: 'Terabyte', plural: 'Terabytes' }, to_anchor: 8000000000000 },
        'Pb': { name: { singular: 'Petabit', plural: 'Petabits' }, to_anchor: 1125899906842624 },
        'PB': { name: { singular: 'Petabyte', plural: 'Petabytes' }, to_anchor: 9007199254740992 },
        'petabyte': { name: { singular: 'Petabyte', plural: 'Petabytes' }, to_anchor: 8000000000000000 },
        'Eb': { name: { singular: 'Exabit', plural: 'Exabits' }, to_anchor: 1152921504606846976 },
        'EB': { name: { singular: 'Exabyte', plural: 'Exabytes' }, to_anchor: 9223372036854775808 },
        'exabyte': { name: { singular: 'Exabyte', plural: 'Exabytes' }, to_anchor: 8000000000000000000 },
        'floppy disk (3.5", DD)': { name: { singular: 'Floppy Disk (3.5", DD)', plural: 'Floppy Disks (3.5", DD)' }, to_anchor: 1474560 },
        'floppy disk (3.5", HD)': { name: { singular: 'Floppy Disk (3.5", HD)', plural: 'Floppy Disks (3.5", HD)' }, to_anchor: 2949120 },
        'floppy disk (3.5", ED)': { name: { singular: 'Floppy Disk (3.5", ED)', plural: 'Floppy Disks (3.5", ED)' }, to_anchor: 5898240 },
        'floppy disk (5.25", DD)': { name: { singular: 'Floppy Disk (5.25", DD)', plural: 'Floppy Disks (5.25", DD)' }, to_anchor: 368640 },
        'floppy disk (5.25", HD)': { name: { singular: 'Floppy Disk (5.25", HD)', plural: 'Floppy Disks (5.25", HD)' }, to_anchor: 737280 },
        'Zip 100': { name: { singular: 'Zip 100', plural: 'Zip 100s' }, to_anchor: 100000000 },
        'Zip 250': { name: { singular: 'Zip 250', plural: 'Zip 250s' }, to_anchor: 250000000 },
        'Jaz 1GB': { name: { singular: 'Jaz 1GB', plural: 'Jaz 1GBs' }, to_anchor: 1000000000 },
        'Jaz 2GB': { name: { singular: 'Jaz 2GB', plural: 'Jaz 2GBs' }, to_anchor: 2000000000 },
        'CD (74 minute)': { name: { singular: 'CD (74 minute)', plural: 'CD (74 minutes)' }, to_anchor: 737280000 },
        'CD (80 minute)': { name: { singular: 'CD (80 minute)', plural: 'CD (80 minutes)' }, to_anchor: 800000000 },
        'DVD (1 layer, 1 side)': { name: { singular: 'DVD (1 layer, 1 side)', plural: 'DVDs (1 layer, 1 side)' }, to_anchor: 4700000000 },
        'DVD (2 layer, 1 side)': { name: { singular: 'DVD (2 layer, 1 side)', plural: 'DVDs (2 layer, 1 side)' }, to_anchor: 8500000000 },
        'DVD (1 layer, 2 side)': { name: { singular: 'DVD (1 layer, 2 side)', plural: 'DVDs (1 layer, 2 side)' }, to_anchor: 9400000000 },
        'DVD (2 layer, 2 side)': { name: { singular: 'DVD (2 layer, 2 side)', plural: 'DVDs (2 layer, 2 side)' }, to_anchor: 17000000000 },
    },
    imperial: {
        // Add imperial units here if needed
    },
    _anchors: {
        binary: { unit: 'B', ratio: 8 },
        imperial: { unit: 'B', ratio: 8 }, // Default to bytes (imperial)
    }
};

export default dataStorage;
