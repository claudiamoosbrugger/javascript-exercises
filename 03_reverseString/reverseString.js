const reverseString = function(userInput) {
    let userInputArray = [];
    userInputArray = userInput.split('');
    let reverseInputArray = userInputArray.reverse();
    let reverseInput = reverseInputArray.join('');
    return reverseInput;
};

// Do not edit below this line
module.exports = reverseString;
