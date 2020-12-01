const QuantityConverter = require('../main/UnitConverterAndCalculater');
const Units = require('../main/UnitObjects')
describe('UseCase 1', () => {
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneFeet,12Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 12);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_ZeroFeet,ZeroFeet', () => {
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
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWePassed_UndifinedUnitType', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.KM, 0);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 0);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneYard,36Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.YARD, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 36);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_ZeroInch,ZeroInch', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 0);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 0);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWePassed_NullInch,NullInch', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, null);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, null);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWePassed_DifferentReferenceObjects', () => {
        const units1 = new Units();
        const units2 = new Units();
        const firstValue = new QuantityConverter(units1.lenthUnits, units1.lenthUnits.INCH, null);
        const secondValue = new QuantityConverter(units2.lenthUnits, units2.lenthUnits.INCH, null);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWePassed_UndifinedUnitTypeAndInch', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.MM, 0);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 0);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneInch,AndFeet', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 1 / 12);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_ThreeFeetAndOneYard', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 3);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.YARD, 1);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWePassed_OneFeetAndOneYard', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.YARD, 1);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
    test('TestCasePassedIfTheReturnedValueIsFalse_WhenWePassed_OneInchAndOneYard', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.YARD, 1);
        expect(firstValue.compare(secondValue)).resolves.toBeFalsy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneYardAnd36Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.YARD, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 36);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_36InchesAndOneYard', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 36);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.YARD, 1);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneYardAndThreeFeet', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.YARD,1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 3);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
})