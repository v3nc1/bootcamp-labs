const task = `
        Write a program that will output the input string with the characters in reverse order
`;

/**the test case inputs */
var testCases = ["jurica smircic"];
var ime="";
function solution(input, output) {

        for(var i=input.length-1;i>=0;i--){
                ime=ime+input[i];

        }
        output.write(ime);
        ime=""
}

export default { id: "001_revrse_string", task, solution, testCases };
