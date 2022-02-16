const sumAll = function(a, b) {
    let sum = 0;
    let min = a;
    let max = b;

    if (typeof a != "number" || typeof b != "number" ||
        a < 0 || b < 0) {
        return "ERROR";
    }

    if (a > b) {
        min = b;
        max = a;
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
