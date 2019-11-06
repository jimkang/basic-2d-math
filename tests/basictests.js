var test = require('tape');
var b2d = require('../index');

const tolerance = 0.0001;

var testCases = [
  {
    fn: b2d.getVectorMagnitude,
    params: [[3, 4]],
    expected: 5
  },
  {
    fn: b2d.addPairs,
    params: [[-5, 3], [2, -1]],
    expected: [-3, 2]
  },
  {
    fn: b2d.subtractPairs,
    params: [[-5, 3], [2, -1]],
    expected: [-7, 4]
  },
  {
    fn: b2d.multiplyPairBySingleValue,
    params: [[4, -3], 32],
    expected: [128, -96]
  },
  {
    fn: b2d.changeVectorMagnitude,
    params: [[5, 5], 10],
    expected: [7.071067811865475, 7.071067811865475]
  },
  {
    fn: b2d.dotProduct,
    params: [[2, 3], [5, 3]],
    expected: 19
  },
  {
    fn: b2d.cosSim,
    params: [[0.4, 0.6], [1.0, 0.6]],
    expected: 0.903750601
  },
  {
    fn: b2d.cosSim,
    params: [[2, 3], [-2, -3]],
    expected: -1
  },
  {
    fn: b2d.cosSim,
    params: [[2, 3], [-3, 2]],
    expected: 0
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test(testCase.fn.name, basicTest);

  function basicTest(t) {
    var result = testCase.fn.apply(testCase.fn, testCase.params);
    if (Array.isArray(testCase.expected)) {
      t.deepEqual(result, testCase.expected, 'Result is correct.');
    } else {
      t.ok(
        Math.abs(result - testCase.expected) <= tolerance,
        `Result ${result} is within tolerance of ${testCase.expected}.`
      );
    }
    t.end();
  }
}
