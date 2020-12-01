const QuantityConverter = require('../main/UnitConverterAndCalculater');
const Units = require('../main/UnitObjects')
describe('UseCase 1', () => {
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneFeet,12Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 12);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneFeet,OneFeet', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 0);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 0);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWePassed_NullFeet,NullFeet', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, null);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, null);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_,ReferenceObjectsAreSame', () => {
        const units1 = new Units();
        const units2 = new Units();
        const firstValue = new QuantityConverter(units1.lenthUnits, units1.lenthUnits.FEET, null);
        const secondValue = new QuantityConverter(units2.lenthUnits, units2.lenthUnits.FEET, null);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
})