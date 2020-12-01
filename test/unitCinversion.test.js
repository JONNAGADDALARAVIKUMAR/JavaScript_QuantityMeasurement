const QuantityConverter = require('../main/UnitConverterAndCalculater');
const Units = require('../main/UnitObjects')
describe('UseCase 1', () => {
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeassed_OneFeet,12Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 12);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeassed_OneFeet,OneFeet', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 0);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 0);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWeassed_NullFeet,NullFeet', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, null);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, null);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeassed_,ReferenceObjectsAreSame', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, null);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, null);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
})