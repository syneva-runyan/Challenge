/*
* The Challenge
*
* The purpose of this code is to write an elegant solution to the following request:
* Multiply any two integers without using the multiplication or division operators.
*/

/**
 * @function isInt
 * @description determine if provided value is a round number
 * @param {?} a 
 * @return {bool} whether or not provided value is a round number
 */
function isInt(a) {
    return !Number.isNaN(parseInt(a)) && a % 1 === 0;
}

/**
 * @function multiply
 * @description multiply two round numbers
 * @param {int} a 
 * @param {int} b 
 * @return {int} product
 */
const multiply = function(a, b) {
    // reject non integers
    if(!isInt(a) || !isInt(b)) {
        throw new Error("Please provide only round numbers to function:multiply");
    }

    let product = 0;
    let i = 0; // keep track of iterations during computation, in order to properly bitshift
    while(b > 0) {
        if (b % 2 == 1) {
            // bitshift a and add to result.
            product += a << i;
        }
        b = b >> 1;
        i++;    
    }
    return product;
}

module.exports = multiply;
