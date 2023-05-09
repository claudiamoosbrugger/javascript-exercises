const palindromes = text => {
    const textNoSymbols = text.replace(/([^\w]+|\s+)/g, '').toLowerCase();
    const reversedString = textNoSymbols.split('').reverse().join('');
    return textNoSymbols === reversedString ? true : false; 
};

// Do not edit below this line
module.exports = palindromes;
