import Converter from '../conversions/converter';
import convert from '../';

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
