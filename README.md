# Metric Converter

## Description

Metric Converter is an npm package that provides a comprehensive set of functions to easily convert between different units of measurement in the metric system. It offers converters for length, mass, volume, and more, making it a versatile tool for various conversion needs.

## Installation

To install Metric Converter, you can use npm:

```bash
npm install metric-converter
```


## Usage
### Basic Usage
To use Metric Converter, you can follow these steps:

Import the module:

```bash
const convert = require('metric-converter');
```

Perform conversions as needed. Here's an example converting length from meters to centimeters:

```bash
const lengthInMeters = 5;
const lengthInCentimeters = convert(lengthInMeters).from('m').to('cm');
console.log(`${lengthInMeters} meters is ${lengthInCentimeters} centimeters`);
```

Supported Units
Metric Converter supports a variety of units for length, mass, volume, and more. Here are the supported units:

- Length:
    - meter (m) - m
    - centimeter (cm) - cm
    - kilometer (km) - km
    - decimeter (dm) - dm
    - millimeter (mm) - mm
    - micrometer (µm) - micrometer
    - nanometer (nm) - nanometer
    - light year (light year) - light_year
    - exameter (exameter) - exameter
    - petameter (petameter) - petameter
    - terameter (terameter) - terameter
    - gigameter (gigameter) - gigameter
    - megameter (megameter) - megameter
    - hectometer (hectometer) - hectometer
    - dekameter (dekameter) - dekameter
    - micron (µ) - micron
    - picometer (pm) - picometer
    - femtometer (fm) - femtometer
    - attometer (am) - attometer
    - megaparsec (megaparsec) - megaparsec
    - kiloparsec (kiloparsec) - kiloparsec
    - parsec (parsec) - parsec
    - astronomical unit (astronomical unit) - astronomical_unit
    - league (league) - league
    - nautical league (UK) (nautical league (UK)) - nautical_league_uk
    - nautical league (int.) (nautical league (int.)) - nautical_league_int
    - league (statute) (league (statute)) - league_statute
    - nautical mile (UK) (nautical mile (UK)) - nautical_mile_uk
    - nautical mile (international) (nautical mile (international)) - nautical_mile_int
    - mile (statute) (mile (statute)) - mile_statute
    - mile (US survey) (mile (US survey)) - mile_us_survey
    - mile (Roman) (mile (Roman)) - mile_roman
    - kiloyard (kiloyard) - kiloyard
    - furlong (furlong) - furlong
    - furlong (US survey) (furlong (US survey)) - furlong_us_survey
    - chain (chain) - chain
    - chain (US survey) (chain (US survey)) - chain_us_survey
    - rope (rope) - rope
    - rod (rod) - rod
    - rod (US survey) (rod (US survey)) - rod_us_survey
    - perch (perch) - perch
    - pole (pole) - pole
    - fathom (fathom) - fathom
    - fathom (US survey) (fathom (US survey)) - fathom_us_survey
    - ell (ell) - ell
    - foot (US survey) (foot (US survey)) - foot_us_survey
    - link (link) - link
    - link (US survey) (link (US survey)) - link_us_survey
    - cubit (UK) (cubit (UK)) - cubit_uk
    - hand (hand) - hand
    - span (cloth) (span (cloth)) - span_cloth
    - finger (cloth) (finger (cloth)) - finger_cloth
    - nail (cloth) (nail (cloth)) - nail_cloth
    - inch (US survey) (inch (US survey)) - inch_us_survey
    - barleycorn (barleycorn) - barleycorn
    - mil (mil) - mil
    - microinch (microinch) - microinch
    - angstrom (angstrom) - angstrom
    - A.U. of length (A.U. of length) - au_of_length
    - X-Unit (X-Unit) - x_unit
    - fermi (fermi) - fermi
    - arpent (arpent) - arpent
    - pica (pica) - pica
    - point (point) - point
    - twip (twip) - twip
    - aln (aln) - aln
    - famn (famn) - famn
    - caliber (caliber) - caliber
    - centiinch (centiinch) - centiinch
    - ken (ken) - ken
    - Russian Archin (russian archin) - russian_archin
    - Roman Actus (roman actus) - roman_actus
    - Vara de Tarea (vara de tarea) - vara_de_tarea
    - Vara Conuquera (vara conuquera) - vara_conuquera
    - Vara Castellana (vara castellana) - vara_castellana
    - cubit (Greek) (cubit (Greek)) - cubit_greek
    - long reed (long reed) - long_reed
    - reed (reed) - rd
    - long cubit (long cubit) - long_cubit
    - handbreadth (handbreadth) - hbr
    - fingerbreadth (fingerbreadth) - fbr
    - planck length (planck length) - pl
    - electron radius (classical) (electron radius (classical)) - erc
    - bohr radius (bohr radius) - br
    - earth's equatorial radius (earth's equatorial radius) - eer
    - earth's polar radius (earth's polar radius) - per
    - earth's distance from sun (earth's distance from sun) - eds
    - sun's radius (sun's radius) - sr

- Mass:
    - Kilogram (kg) - `kg`
    - Gram (g) - `g`
    - Milligram (mg) - `mg`
    - Metric Ton (t) - `t`
    - Carat (ct) - `ct`
    - Atomic Mass Unit (u) - `u`
    - Exagram (Eg) - `Eg`
    - Petagram (Pg) - `Pg`
    - Teragram (Tg) - `Tg`
    - Gigagram (Gg) - `Gg`
    - Megagram (Mg) - `Mg`
    - Hectogram (hg) - `hg`
    - Dekagram (dag) - `dag`
    - Decigram (dg) - `dg`
    - Centigram (cg) - `cg`
    - Microgram (μg) - `μg`
    - Nanogram (ng) - `ng`
    - Picogram (pg) - `pg`
    - Femtogram (fg) - `fg`
    - Attogram (ag) - `ag`
    - Dalton - `Dalton`
    - Kilogram-force square second/meter (kgfspm) - `kgfspm`
    - Kilopound (kips) - `kips`
    - Pound-force square second/foot (lbfpsf) - `lbfpsf`
    - Gamma (gammar) - `gammar`
    - Talent (Biblical Hebrew) (talentBH) - `talentBH`
    - Mina (Biblical Hebrew) (minaBH) - `minaBH`
    - Shekel (Biblical Hebrew) (shekelBH) - `shekelBH`
    - Bekan (Biblical Hebrew) (bekaniBH) - `bekaniBH`
    - Gerah (Biblical Hebrew) (gerahBH) - `gerahBH`
    - Talent (Biblical Greek) (talentBG) - `talentBG`
    - Mina (Biblical Greek) (minaBG) - `minaBG`
    - Tetradrachma (Biblical Greek) (tetradrachmaBG) - `tetradrachmaBG`
    - Didrachma (Biblical Greek) (didrachmaBG) - `didrachmaBG`
    - Drachma (Biblical Greek) (drachmaBG) - `drachmaBG`
    - Denarius (Biblical Roman) (denariusBR) - `denariusBR`
    - Assarion (Biblical Roman) (assarionBR) - `assarionBR`
    - Quadrans (Biblical Roman) (quadransBR) - `quadransBR`
    - Lepton (Biblical Roman) (leptonBR) - `leptonBR`
    - Planck Mass (Planck_mass) - `Planck_mass`
    - Electron Mass (rest) (Electron_mass_rest) - `Electron_mass_rest`
    - Muon Mass (Muon_mass) - `Muon_mass`
    - Proton Mass (Proton_mass) - `Proton_mass`
    - Neutron Mass (Neutron_mass) - `Neutron_mass`
    - Deuteron Mass (Deuteron_mass) - `Deuteron_mass`
    - Earth's Mass (Earth_mass) - `Earth_mass`
    - Sun's Mass (Sun_mass) - `Sun_mass`
    - Pound (lbs) - `lbs`
    - Ounce (oz) - `oz`
    - Kip (kip) - `kip`
    - Slug - `slug`

- Temperature
    - Celsius (C) - `C`
    - Kelvin (K) - `K` (Celsius + 273.15)
    - Fahrenheit (F) - `F`

- Volume
    - Cubic Meter (m³) - `m³`
    - Cubic Kilometer (km³) - `km³`
    - Cubic Centimeter (cm³) - `cm³`
    - Cubic Millimeter (mm³) - `mm³`
    - Liter (l) - `l`
    - Milliliter (ml) - `ml`
    - Exaliter (el) - `el`
    - Petaliter (pl) - `pl`
    - Teraliter (tl) - `tl`
    - Gigaliter (gl) - `gl`
    - Megaliter (ml) - `ml`
    - Hectoliter (hl) - `hl`
    - Dekaliter (dal) - `dal`
    - Deciliter (dl) - `dl`
    - Centiliter (cl) - `cl`
    - Microliter (µl) - `µl`
    - Nanoliter (nl) - `nl`
    - Picoliter (pl) - `pl`
    - Femtoliter (fl) - `fl`
    - Attoliter (al) - `al`
    - Cubic Centimeter (cc) - `cc`
    - Drop (dp) - `dp`
    - Barrel (oil) (bl) - `bl`
    - Barrel (US) (bu) - `bu`
    - Barrel (UK) (bu) - `bu`
    - Gallon (US) (gu) - `gu`
    - Quart (US) (qu) - `qu`
    - Pint (US) (pu) - `pu`
    - Cup (US) (cu) - `cu`
    - Tablespoon (US) (tbu) - `tbu`
    - Teaspoon (US) (tspu) - `tspu`
    - Cubic Mile (mi³) - `mi³`
    - Cubic Yard (yd³) - `yd³`
    - Cubic Foot (ft³) - `ft³`
    - Cubic Inch (in³) - `in³`
    - Gallon (gal) - `gal`
    - Quart (qt) - `qt`
    - Pint (pt) - `pt`
    - Cup (cup) - `cup`
    - Fluid Ounce (fl_oz) - `fl_oz`
    - Tablespoon (tbsp) - `tbsp`
    - Teaspoon (tsp) - `tsp`
    - Imperial Gallon (igal) - `igal`
    - Imperial Quart (iqt) - `iqt`
    - Imperial Pint (ipt) - `ipt`
    - Imperial Fluid Ounce (ifl_oz) - `ifl_oz`
    - Imperial Tablespoon (itbsp) - `itbsp`
    - Imperial Teaspoon (itsp) - `itsp`
    - Hundred-cubic foot (ccf) - `ccf`
    - Acre-foot (acre_ft) - `ac_ft`
    - Acre-foot (US survey) (ac_ft) - `ac_ft`
    - Acre-inch (ac_in) - `ac_in`

- Area
    - Square Meter (m²) - `m²`
    - Square Kilometer (km²) - `km²`
    - Square Centimeter (cm²) - `cm²`
    - Square Millimeter (mm²) - `mm²`
    - Square Micrometer (um²) - `um²`
    - Hectare (ha) - `ha`
    - Are (a) - `a`
    - Square Nanometer (nm²) - `nm²`
    - Square Decimeter (dm²) - `dm²`
    - Square Hectometer (hm²) - `hm²`
    - Square Mile (mi²) - `mi²`
    - Square Yard (yd²) - `yd²`
    - Square Foot (ft²) - `ft²`
    - Square Inch (in²) - `in²`
    - Acre (ac) - `ac`
    - Square Chain (ch²) - `ch²`
    - Rood (rood) - `rood`
    - Perch (perch) - `perch`
    - Pole (pole) - `pole`
    - Square Mil (mil²) - `mil²`
    - Circular Mil (circular_mil) - `circular_mil`

- Time
    - Second (s) - `s`
    - Millisecond (ms) - `ms`
    - Microsecond (µs) - `µs`
    - Nanosecond (ns) - `ns`
    - Picosecond (ps) - `ps`
    - Femtosecond (fs) - `fs`
    - Attosecond (as) - `as`
    - Minute (min) - `min`
    - Hour (h) - `h`
    - Day (d) - `d`
    - Week (wk) - `wk`
    - Month (mo) - `mo`
    - Year (yr) - `yr`
    - Decade (decade) - `decade`
    - Century (century) - `century`
    - Millennium (millennium) - `millennium`

## Error Handling Metric Converter

Error Handling Metric Converter provides error handling for unsupported units and invalid conversion operations. If an unsupported unit is provided or an invalid conversion operation is attempted, an appropriate error will be thrown.

### API Reference

#### `convert(value)`

Creates a converter instance with the given initial value.

- **value**: The initial value to convert.

#### `Converter.from(unit)`

Specifies the origin unit for conversion.

- **unit**: The unit of the input value.

#### `Converter.to(unit)`

Converts the value to the specified unit.

- **unit**: The unit to convert to.

### Author

**Name:** Rahul Dey

### License

This project is licensed under the MIT License.

### Contributing

Contributions are welcome! If you encounter any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request on [GitHub Issues](https://github.com/rahulthedevil/metric-converter/issues).

### Dependencies

- lodash (^4.17.21)
