const convertToCelsius = function(degreeF) {
  let degreeCels = (degreeF - 32) * (5/9);
  return Math.round(degreeCels * 10) / 10;
};

const convertToFahrenheit = function(degreeC) {
  let degreeFahr = (degreeC * 9/5 + 32);
  return Math.round(degreeFahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
