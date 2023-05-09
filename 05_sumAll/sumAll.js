const sumAll = function(start, end) {
    let sum = 0;
    let y = 0;
    if (end < start) {
        y = start;
        start = end;
        end = y;
    }
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }
    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
