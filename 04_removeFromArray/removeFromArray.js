const removeFromArray = function(givenArray, ...objectsToRemove) {
    return givenArray.filter(x => !objectsToRemove.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
