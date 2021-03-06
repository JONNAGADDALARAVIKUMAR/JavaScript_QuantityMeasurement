const QuantityConverter = require('../main/UnitConverterAndCalculater');
const Units = require('../main/UnitObjects')

describe('UseCase 1, 2', () => {
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
});
describe('UseCase 3, 4', () => {
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneYardAndThreeFeet', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH,2);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.CM, 5);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeCompare_TwoInchesAnd2InchesWth4Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 2);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 2);
        const thirdValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 4);
        expect(thirdValue.compareByAdding(firstValue, secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeCompare_OneFeetAndTwoInchesWith14Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 2);
        const thirdValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 14);
        expect(thirdValue.compareByAdding(firstValue, secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeCompare_OneFeetAndOneFeetWith24Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 1);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.FEET, 1);
        const thirdValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 24);
        expect(thirdValue.compareByAdding(firstValue, secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWeCompare_TwoInchesAnd2.5CMWith3Inches', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 2);
        const secondValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.CM, 2.5);
        const thirdValue = new QuantityConverter(units.lenthUnits, units.lenthUnits.INCH, 3);
        expect(thirdValue.compareByAdding(firstValue, secondValue)).resolves.toBeTruthy();
    });
});
describe('Usecase 5,6', () => {
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneGallonAnd3.78Litres', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.GALLON,1);
        const secondValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.LITRE, 3.785);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneLitreAnd1000ML', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.LITRE,1);
        const secondValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.ML, 1000);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_sumOfOneGallonAnd3.785LitresWith7.57', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.GALLON,1);
        const secondValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.LITRE, 3.785);
        const thirdValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.LITRE, 7.57);
        expect(thirdValue.compareByAdding(firstValue, secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_sumOfOneLitreAnd1000MLWith2Litres', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.LITRE,1);
        const secondValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.ML, 1000);
        const thirdValue = new QuantityConverter(units.volumeUnits, units.volumeUnits.LITRE, 2);
        expect(thirdValue.compareByAdding(firstValue, secondValue)).resolves.toBeTruthy();
    });
});
describe('UseCase 7', () => {
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneKGAnd1000Grams', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.weightUnits, units.weightUnits.KG, 1);
        const secondValue = new QuantityConverter(units.weightUnits, units.weightUnits.GR, 1000);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_OneTonAnd1000KG', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.weightUnits, units.weightUnits.TON, 1);
        const secondValue = new QuantityConverter(units.weightUnits, units.weightUnits.KG, 1000);
        expect(firstValue.compare(secondValue)).resolves.toBeTruthy();
    });
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassed_sumOfOneTonAnd1000GramsWith1001KGs', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.weightUnits, units.weightUnits.TON,1);
        const secondValue = new QuantityConverter(units.weightUnits, units.weightUnits.GR, 1000);
        const thirdValue = new QuantityConverter(units.weightUnits, units.weightUnits.KG, 1001);
        expect(thirdValue.compareByAdding(firstValue, secondValue)).resolves.toBeTruthy();
    });
});
describe('UseCase 8', () => {
    test('TestCasePassedIfTheReturnedValueIsTrue_WhenWePassedTemperature_212FAnd100C', () => {
        const units = new Units();
        const firstValue = new QuantityConverter(units.temperatureUnits, units.temperatureUnits.F, 212);
        const secondValue = new QuantityConverter(units.temperatureUnits, units.temperatureUnits.C, 100);
        expect(firstValue.compareTemperature(secondValue)).resolves.toBeTruthy();
    });
})