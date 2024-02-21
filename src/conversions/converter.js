// converter.js
import { each, keys } from 'lodash';
import measures from './units';

export default class Converter {
    constructor(numerator, denominator) {
        if (denominator)
            this.val = numerator / denominator;
        else
            this.val = numerator;
    }

    // Define Converter prototype methods here...
    from(fromUnit) {
        if (this.destination)
            throw new Error('.to must be called after .from');

        this.origin = this.getUnit(fromUnit);

        if (!this.origin) {
            this.throwUnsupportedUnitError(fromUnit);
        }

        return this;
    }

    to(toUnit) {
        if (!this.origin)
            throw new Error('.from must be called before .to');

        this.destination = this.getUnit(toUnit);

        let result, transform;

        if (!this.destination) {
            this.throwUnsupportedUnitError(toUnit);
        }

        // Don't change the value if origin and destination are the same
        if (this.origin.abbr === this.destination.abbr) {
            return this.val;
        }

        // You can't go from liquid to mass, for example
        if (this.destination.measure != this.origin.measure) {
            throw new Error('Cannot convert incompatible measures of ' + this.destination.measure + ' and ' + this.origin.measure);
        }

        /**
        * Convert from the source value to its anchor inside the system
        */
        result = this.val * this.origin.unit.to_anchor;

        /**
        * For some changes it's a simple shift (C to K)
        * So we'll add it when converting into the unit (later)
        * and subtract it when converting from the unit
        */
        if (this.origin.unit.anchor_shift) {
            result -= this.origin.unit.anchor_shift;
        }

        /**
        * Convert from one system to another through the anchor ratio. Some conversions
        * aren't ratio based or require more than a simple shift. We can provide a custom
        * transform here to provide the direct result
        */
        if (this.origin.system != this.destination.system) {
            transform = measures[this.origin.measure]._anchors[this.origin.system].transform;
            if (typeof transform === 'function') {
                result = transform(result);
            } else {
                result *= measures[this.origin.measure]._anchors[this.origin.system].ratio;
            }
        }

        /**
        * This shift has to be done after the system conversion business
        */
        if (this.destination.unit.anchor_shift) {
            result += this.destination.unit.anchor_shift;
        }

        /**
        * Convert to another unit inside the destination system
        */
        return result / this.destination.unit.to_anchor;
    }

    getUnit(abbr) {
        let found;

        each(measures, function (systems, measure) {
            each(systems, function (units, system) {
                if (system == '_anchors')
                    return false;

                each(units, function (unit, testAbbr) {
                    if (testAbbr == abbr) {
                        found = {
                            abbr: abbr,
                            measure: measure,
                            system: system,
                            unit: unit
                        };
                        return false;
                    }
                });

                if (found)
                    return false;
            });

            if (found)
                return false;
        });

        return found;
    }

    describe(abbr) {
        let resp = this.getUnit(abbr);
        let desc = null;

        try {
            desc = this.describeUnit(resp);
        } catch (err) {
            this.throwUnsupportedUnitError(abbr);
        }

        return desc;
    }

    describeUnit(resp) {
        return {
            abbr: resp.abbr,
            measure: resp.measure,
            system: resp.system,
            singular: resp.unit.name.singular,
            plural: resp.unit.name.plural
        };
    }

    list(measure) {
        let list = [];

        each(measures, function (systems, testMeasure) {
            if (measure && measure !== testMeasure)
                return;

            each(systems, function (units, system) {
                if (system == '_anchors')
                    return false;

                each(units, function (unit, abbr) {
                    list = list.concat(this.describeUnit({
                        abbr: abbr,
                        measure: testMeasure,
                        system: system,
                        unit: unit
                    }));
                }, this);
            }, this);
        }, this);

        return list;
    }

    throwUnsupportedUnitError(what) {
        let validUnits = [];

        each(measures, function (systems, measure) {
            each(systems, function (units, system) {
                if (system == '_anchors')
                    return false;

                validUnits = validUnits.concat(keys(units));
            });
        });

        throw new Error('Unsupported unit ' + what + ', use one of: ' + validUnits.join(', '));
    }

    possibilities(measure) {
        let possibilities = [];
        if (!this.origin && !measure) {
            each(keys(measures), function (measure) {
                each(measures[measure], function (units, system) {
                    if (system == '_anchors')
                        return false;

                    possibilities = possibilities.concat(keys(units));
                });
            });
        } else {
            measure = measure || this.origin.measure;
            each(measures[measure], function (units, system) {
                if (system == '_anchors')
                    return false;

                possibilities = possibilities.concat(keys(units));
            });
        }

        return possibilities;
    }

    measures() {
        return keys(measures);
    }
}
