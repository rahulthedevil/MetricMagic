import Converter from '../conversions/converter';
import convert from '../../';

describe('Length Converter', () => {
  describe('to', () => {
    it('should convert the value to the specified unit', () => {
      const converter = new Converter(10);
      const result = converter.from('m').to('cm');
      expect(result).toEqual(1000);
    });

    it('should throw an error if .from is not called before .to', () => {
      const converter = new Converter(10);
      expect(() => converter.to('cm')).toThrowError('.from must be called before .to');
    });

    it('should throw an error if the destination unit is not supported', () => {
      const converter = new Converter(10).from('m');
      expect(() => converter.to('invalid')).toThrowError(/^Unsupported unit invalid, use one of:/);
    });

    it('should return the same value if the origin and destination units are the same', () => {
      const converter = new Converter(10).from('cm');
      const result = converter.to('cm');
      expect(result).toEqual(10);
    });

    it('should throw an error if the origin and destination measures are incompatible', () => {
      const converter = new Converter(10).from('m');
      expect(() => converter.to('kg')).toThrowError('Cannot convert incompatible measures of mass and length');
    });
  });
  
  describe('from', () => {
    it('should set the origin unit for conversion', () => {
      const converter = new Converter(10);
      converter.from('cm');
      expect(converter.origin.abbr).toEqual('cm');
    });

    it('should throw an error if the origin unit is not supported', () => {
      const converter = new Converter(10);
      expect(() => converter.from('invalid')).toThrowError(/^Unsupported unit invalid, use one of:/);
    });

    it('should convert 0 m to 0 cm', () => {
      const converter = new Converter(0);
      const result = converter.from('m').to('cm');
      expect(result).toEqual(0);
    });

    it('should convert a negative value from m to cm', () => {
      const converter = new Converter(-5);
      const result = converter.from('m').to('cm');
      expect(result).toEqual(-500);
    });

    it('should convert 1000 millims to 1 m', () => {
      const converter = new Converter(1000);
      const result = converter.from('mm').to('m');
      expect(result).toEqual(1);
    });

    it('should convert 1 mile to 5280 feet', () => {
      const converter = new Converter(1);
      const result = converter.from('mi').to('ft');
      expect(result).toEqual(5280);
    });

    it('should convert 1 yard to 3 feet', () => {
      const converter = new Converter(1);
      const result = converter.from('yd').to('ft');
      expect(result).toEqual(3);
    });

    it('should convert 100 centimeters to 1 meter', () => {
      const converter = new Converter(100);
      const result = converter.from('cm').to('m');
      expect(result).toEqual(1);
    });
  
    it('should convert 1000 meters to 1 kilometer', () => {
      const converter = new Converter(1000);
      const result = converter.from('m').to('km');
      expect(result).toEqual(1);
    });
  
    it('should convert 1000 micrometers to 1 millimeter', () => {
      const converter = new Converter(1000);
      const result = converter.from('µm').to('mm');
      expect(result).toEqual(1);
    });
  
    it('should convert 1 inch to 2.54 centimeters', () => {
      const converter = new Converter(1);
      const result = converter.from('in').to('cm');
      expect(result).toEqual(2.54);
    });
  
    it('should convert 1 kiloparsec to 3.08567758149137e+19 meters', () => {
      const converter = new Converter(1);
      const result = converter.from('kpc').to('m');
      expect(result).toEqual(3.08567758149137e+19);
    });
  
    it('should convert 1 astronomical unit to 149597870700 meters', () => {
      const converter = new Converter(1);
      const result = converter.from('au').to('m');
      expect(result).toEqual(149597870700);
    });
  
    it('should convert 1 league (UK) to 5556 meters', () => {
      const converter = new Converter(1);
      const result = converter.from('nautical_league_uk').to('m');
      expect(result).toEqual(5556);
    });
  
    it('should convert 1 mile (Roman) to 1471.5 meters', () => {
      const converter = new Converter(1);
      const result = converter.from('mile_roman').to('m');
      expect(result).toEqual(1471.5);
    });

    it('should convert 1 kilometer to 100,000 centimeters', () => {
      const converter = new Converter(1);
      const result = converter.from('km').to('cm');
      expect(result).toEqual(100000);
    });
  
    it('should convert 1 meter to 39.37 inches', () => {
      const converter = new Converter(1);
      const result = converter.from('m').to('in');
      expect(result).toBeCloseTo(39.37);
    });
  
    it('should convert 1 mile to 1.609 kilometers', () => {
      const converter = new Converter(1);
      const result = converter.from('mi').to('km');
      expect(result).toBeCloseTo(1.609);
    });
  
    it('should convert 1 foot to 30.48 centimeters', () => {
      const converter = new Converter(1);
      const result = converter.from('ft').to('cm');
      expect(result).toEqual(30.48);
    });
  
    it('should convert 1000 millimeters to 1 meter', () => {
      const converter = new Converter(1000);
      const result = converter.from('mm').to('m');
      expect(result).toEqual(1);
    });
  
    it('should convert 1 yard to 0.9144 meters', () => {
      const converter = new Converter(1);
      const result = converter.from('yd').to('m');
      expect(result).toEqual(0.9144);
    });
  
    it('should convert 1 inch to 2.54 centimeters', () => {
      const converter = new Converter(1);
      const result = converter.from('in').to('cm');
      expect(result).toEqual(2.54);
    });
  
    it('should convert 100 feet to 3048 centimeters', () => {
      const converter = new Converter(100);
      const result = converter.from('ft').to('cm');
      expect(result).toEqual(3048);
    });
  
    it('should convert 100 meters to 0.06214 miles', () => {
      const converter = new Converter(100);
      const result = converter.from('m').to('mi');
      expect(result).toBeCloseTo(0.06214);
    });
  
    // it('should convert 1 kilometer to 39370.1 inches', () => {
    //   const converter = new Converter(1);
    //   const result = converter.from('km').to('in');
    //   expect(result).toBeCloseTo(39370.1);
    // });
  });

  describe('convert', () => {
    it('should convert the value to the specified unit', () => {
      const converter = convert(10);
      converter.from('m');
      const result = converter.to('cm');
      expect(result).toEqual(1000);
    });

    it('should throw an error if the destination unit is not supported', () => {
      const converter = convert(10).from('m');
      expect(() => converter.to('invalid')).toThrowError(/^Unsupported unit invalid, use one of:/);
    });

    it('should return the same value if the origin and destination units are the same', () => {
      const converter = convert(10).from('cm');
      const result = converter.to('cm');
      expect(result).toEqual(10);
    });

    it('should throw an error if the origin and destination measures are incompatible', () => {
      const converter = convert(10).from('m');
      expect(() => converter.to('kg')).toThrowError('Cannot convert incompatible measures of mass and length');
    });
  });
});
