const closeEnough = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return Math.abs(a - b) < 0.000001;
  } else {
    // lodash is a more robust solution for complex objects
    return JSON.stringify(a) === JSON.stringify(b);
  }
}
const runTest = (test, solution) => {
  const [args, expected] = test;
  const testResult = solution(...args);
  return [closeEnough(testResult, expected), testResult];
};

export default runTest;