const leapYears = function(year) {
    let ruleOut100 = true;
    if (year % 100 == 0 && year % 400 != 0){
        ruleOut100 = false;
    }
    if ((year % 4 == 0) && ruleOut100) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
