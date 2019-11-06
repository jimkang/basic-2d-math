function getVectorMagnitude(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

function addPairs(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

function subtractPairs(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
}

function multiplyPairBySingleValue(pair, single) {
  return [pair[0] * single, pair[1] * single];
}

function changeVectorMagnitude(v, newMagnitude) {
  var currentMagnitude = getVectorMagnitude(v);
  return multiplyPairBySingleValue(v, newMagnitude / currentMagnitude);
}

function dotProduct(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

function cosSim(a, b) {
  return dotProduct(a, b) / (getVectorMagnitude(a) * getVectorMagnitude(b));
}

module.exports = {
  getVectorMagnitude,
  addPairs,
  subtractPairs,
  multiplyPairBySingleValue,
  changeVectorMagnitude,
  dotProduct,
  cosSim
};
