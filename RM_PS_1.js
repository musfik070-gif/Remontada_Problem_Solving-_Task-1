/**
 * 01. Solve me first
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var solveMeFirst = function (a, b) {
    return a + b;
 };
 
/**
  * 02. Multiply
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
var multiply = function(a, b) {
 	return a * b;
 };

 /**
  * 03. Even or Odd
  * @param {number} number
  * @return {string}
  */
var evenOrOdd = function(number) {
 	return number % 2 === 0 ? 'Even' : 'Odd';
};
 
/**
  * 04. Make Negative
  * @param {number} number
  * @return {number}
  */
var makeNegative = function(number) {
 	return -Math.abs(number);
 };

 /**
 * 05. Opposite Number
 * @param {number} number
 * @return {number}
 */
var opposite = function(number) {
    return -number;
};

/**
  * 06. Simple Array Sum
  * @param {number[]} ar
  * @return {number}
  */
var simpleArraySum = function(ar) {
 	let sum = 0;
 	for (let i = 0; i < ar.length; i++) {
 		sum += ar[i];
 	}
 	return sum;
};
 
/**
 * 07. sleepIn
 * @param {boolean} weekday
 * @param {boolean} vacation
 * @return {boolean}
 */
var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};

/**
 * 08. monkeyTrouble
 * @param {boolean} aSmile
 * @param {boolean} bSmile
 * @return {boolean}
 */
var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};

/**
 * 09. sumDouble
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var sumDouble = function(a, b) {
    return a === b ? (a + b) * 2 : a + b;
};

/**
 * 10. diff21
 * @param {number} n
 * @return {number}
 */
var diff21 = function(n) {
    return n > 21 ? (n - 21) * 2 : Math.abs(n - 21);
};

/**
 * 11. parrotTrouble
 * @param {boolean} talking
 * @param {number} hour
 * @return {boolean}
 */
var parrotTrouble = function (talking, hour) {
    return talking && (hour < 7 || hour > 20);
};

/**
 * 12. makes10
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
var makes10 = function (a, b) {
    return a === 10 || b === 10 || a + b === 10;
};

module.exports = {
    solveMeFirst,
    multiply,
    evenOrOdd,
    makeNegative,
    opposite,
    simpleArraySum,
    sleepIn,
    monkeyTrouble,
    sumDouble,
    diff21
};

