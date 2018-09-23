module.exports = function getZerosCount(number) {
  var result = 0;

  for (var i = 5; number / i >= 1; i *= 5) {
    result += Math.floor(number / i);
  }

  return result;
}
