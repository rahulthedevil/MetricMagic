// index.js
import Converter from './conversions/converter';

export default function convert(value) {
    return new Converter(value);
}
