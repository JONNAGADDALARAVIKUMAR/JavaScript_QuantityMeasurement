const QuantityConverter = require('../main/UnitConverterAndCalculater');
const Units = require('../main/UnitObjects')

test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeassed_OneFeet,12Inches', () => {
    const length = new Units();
    const firstValue = new QuantityConverter(length.unit.FEET, 1);
    const secondValue = new QuantityConverter(length.unit.INCH, 12);
    expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
});