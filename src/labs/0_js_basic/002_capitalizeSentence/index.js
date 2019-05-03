const task = `
        Write a program that will output the input string with the characters in reverse order
`;

/**the test case inputs */
var testCases = ["jurica smircic"];

function solution(input, output) {
  var reverse = "";
  for (var index = input.length - 1; index >= 0; index--) {
    reverse = reverse + input[index];
  }

  output(reverse);
}

export default { id: "002_capitalizeSentence", task, solution, testCases };
