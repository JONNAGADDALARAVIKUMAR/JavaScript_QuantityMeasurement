//const Units = require('./UnitObjects');
class QuantityConverter {
    constructor(UnitObj, unit, value) {
        this.UnitObj = UnitObj;
        this.unit = unit;
        this.value = value;
    }
    convert(unitValue, value) {
        return unitValue * value;
    }
    compare(other) {
        return new Promise(resolve => {
            const firstValue = this.convert(this.unit, this.value);
            const secondValue = other.convert(other.unit, other.value);
            
            if(this.value == null || other.value == null) {
                resolve(false)
            } else if(this.UnitObj != other.UnitObj) {
                resolve(false)
            } else if(this.unit == undefined || other.unit == undefined) {
                resolve(false)
            } else {
                resolve(firstValue == secondValue);
            }
        })
    }
    compareByAdding(other1, other2) {
        return new Promise(resolve => {
            const thirdValue = this.convert(this.unit, this.value);
            const firstValue = other1.convert(other1.unit, other1.value);
            const secondValue = other2.convert(other2.unit, other2.value);
            const addedValue = firstValue + secondValue;
            resolve(addedValue == thirdValue);
        })
    }
    compareTemperature(other) {
        return new Promise(resolve => {
            const firstValue = this.convert(this.unit, this.value);
            const secondValue = other.convert(other.unit, other.value);
            resolve(((firstValue - 32) * 5/9) == secondValue);
        })
    }
    
}
module.exports = QuantityConverter;