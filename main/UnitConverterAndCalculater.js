class QuantityConverter {
    constructor(unit, value) {
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
            } else {
                resolve(firstValue == secondValue);
            }
        })
    }
}
module.exports = QuantityConverter;