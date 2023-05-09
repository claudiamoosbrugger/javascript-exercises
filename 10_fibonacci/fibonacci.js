const fibonacci = function(index) {
    if (typeof index != 'number') index = parseInt(index);
    if (index <= 0) return 'OOPS';
    if (index === 1) return 1;
    let a = 0;
    let b = 1;
    let c;
    for(let i = 1; i < index; i++) {
        c = a + b;
        a = b;
        b = c; 
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
