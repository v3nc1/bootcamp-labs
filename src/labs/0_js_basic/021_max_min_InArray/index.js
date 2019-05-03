const task = `
        Write a program that will output the max and min number from input array
`;

/**the test case inputs */
var testCases = [[12, 5, -1, 14, 32, 7]];

function solution(input, output) {
  var max, min;

  for (var element of input) {
    if (!max || element > max) max = element;
    if (!min || element < min) min = element;
  }

  output(max);
  output(min);
}

export default { id: "021_max_min_InArray", task, solution, testCases };
