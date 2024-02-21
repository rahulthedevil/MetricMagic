import Converter from './src/conversions/converter';

export default function convert(value) {
    return new Converter(value);
}
