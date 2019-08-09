const multiply = require('../index');

describe('multiply', function() {
    it('should calculate the product of two numbers', function() {
        expect(multiply(5,2)).toEqual(10);
        expect(multiply(2,5)).toEqual(10);
        expect(multiply(1000,4)).toEqual(4000);
        expect(multiply(1,9)).toEqual(9);
        expect(multiply(6,7)).toEqual(42);
    });
    it('should reject invalid argument types', function() {
        expect(function() {
           multiply('a', 'b');
        }).toThrow("Please provide only round numbers to function:multiply");

        expect(function() {
            multiply(true, NaN);
         }).toThrow("Please provide only round numbers to function:multiply");
    });
})