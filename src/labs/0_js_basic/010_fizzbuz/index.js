const task = `
Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzzss"

This Lab Exercise has no input
`;

function solution(input, output) {
  for (var i = 1; i <= 100; i++) {
    var out = "";
    if (i % 3 === 0) out = out + "Fiz";
    if (i % 5 === 0) out = out + "Buzz";
    if (out === "") out = i;
    output(out);
  }
}

export default { id: "010_fizzBuzz", task, solution };
