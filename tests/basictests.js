var test = require('tape');
var b2d = require('../index');

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
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test(testCase.fn.name, basicTest);

  function basicTest(t) {
    var result = testCase.fn.apply(testCase.fn, testCase.params);
    t.deepEqual(result, testCase.expected, 'Result is correct.');
    t.end();
  }
}
