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

/**
 * 13. nearHundred
 * @param {number} n
 * @return {boolean}
 */
var nearHundred = function (n) {
    return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
};

/**
 * 14. posNeg
 * @param {number} a
 * @param {number} b
 * @param {boolean} negative
 * @return {boolean}
 */
var posNeg = function (a, b, negative) {
    if (negative) {
        return a < 0 && b < 0;
    }
    return (a < 0 && b > 0) || (a > 0 && b < 0);
};

/**
 * 15. notString
 * @param {string} str
 * @return {string}
 */
var notString = function (str) {
    if (str.startsWith('not')) {
        return str;
    }
    return 'not ' + str;
};
 
/**
 * 16. Compare the Triplets
 * @param {number[]} a
 * @param {number[]} b
 * @return {number[]}
 */
var compareTriplets = function (a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
};

/**
 * 17. A Very Big Sum
 * @param {number[]} ar
 * @return {number}
 */
var aVeryBigSum = function (ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
};

/**
 * 18. Staircase
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
    let rows = [];
    for (let i = 1; i <= n; i++) {
        rows.push(' '.repeat(n - i) + '#'.repeat(i));
    }
    return rows.join('\n');
};

/**
 * 19. Grading Students
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        let nextMultiple = Math.ceil(grade / 5) * 5;
        if (grade >= 38 && nextMultiple - grade < 3) {
            result.push(nextMultiple);
        } else {
            result.push(grade);
        }
    }
    return result;
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

