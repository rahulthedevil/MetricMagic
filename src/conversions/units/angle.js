const angle = {
    metric: {
        radian: { name: { singular: 'Radian', plural: 'Radians' }, to_anchor: 1 },
        grad: { name: { singular: 'Grad', plural: 'Grads' }, to_anchor: Math.PI / 200 }, // 1 grad = π/200 rad
        gon: { name: { singular: 'Gon', plural: 'Gons' }, to_anchor: Math.PI / 200 }, // 1 gon = π/200 rad
        mil: { name: { singular: 'Mil', plural: 'Mils' }, to_anchor: Math.PI / 3200 }, // 1 mil = π/3200 rad
        turn: { name: { singular: 'Turn', plural: 'Turns' }, to_anchor: 2 * Math.PI },
        quadrant: { name: { singular: 'Quadrant', plural: 'Quadrants' }, to_anchor: Math.PI / 2 },
        sextant: { name: { singular: 'Sextant', plural: 'Sextants' }, to_anchor: Math.PI / 3 },
    },
    imperial: {
        degree: { name: { singular: 'Degree', plural: 'Degrees' }, to_anchor: 1 },
        minute: { name: { singular: 'Minute', plural: 'Minutes' }, to_anchor: 1 / 60 }, // 1 minute = 1/60 degree
        second: { name: { singular: 'Second', plural: 'Seconds' }, to_anchor: 1 / 3600 }, // 1 second = 1/3600 degree
        revolution: { name: { singular: 'Revolution', plural: 'Revolutions' }, to_anchor: 360 },
        right_angle: { name: { singular: 'Right Angle', plural: 'Right Angles' }, to_anchor: Math.PI / 2 },
    },
    _anchors: {
        metric: { unit: 'radian', ratio: 1 },
        imperial: { unit: 'degree', ratio: 1 },
    }
};

export default angle;
