const task = `
Write a program that will output a sum of digits of a input number
`;

/**the test case inputs */
var testCases = [12345, 123345];

function solution(input, output) {
    var suma=0;
    var temp=input;
    
    while(temp>0){
        
        suma=suma +(temp%10);
        temp=temp/10>>0;
  
   }
    output.write("Zbroj "+input+"= "+suma);
}

export default { id: "010_sumOfDigits", task, solution, testCases };
