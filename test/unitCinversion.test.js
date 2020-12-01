const QuantityConverter = require('../main/UnitConverterAndCalculater');
const Units = require('../main/UnitObjects')
describe('UseCase 1', () => {
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeassed_OneFeet,12Inches', () => {
        const length = new Units();
        const firstValue = new QuantityConverter(length.unit.FEET, 1);
        const secondValue = new QuantityConverter(length.unit.INCH, 12);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeassed_OneFeet,OneFeet', () => {
        const length = new Units();
        const firstValue = new QuantityConverter(length.unit.FEET, 0);
        const secondValue = new QuantityConverter(length.unit.FEET, 0);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWeassed_NullFeet,NullFeet', () => {
        const length = new Units();
        const firstValue = new QuantityConverter(length.unit.FEET, null);
        const secondValue = new QuantityConverter(length.unit.FEET, null);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
})