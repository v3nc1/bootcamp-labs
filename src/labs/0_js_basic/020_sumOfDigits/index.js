const task = `
Write a program that will output a sum of digits of a input number
`;

/**the test case inputs */
var testCases = [12345, 123345];

function solution(input, output) {
  var current = input;
  var sum = 0;
  while (current) {
    var digit = Math.round(current % 10);
    sum += digit;
    current = Math.floor(current / 10);
  }
  output(`sum of digits for number ${input} is ${sum}`);
}

export default { id: "010_sumOfDigits", task, solution, testCases };
