var task = `
Write a function that returns the input argument unchanged.
Not a trick question, this is just a warmup, just return what you receive in the input argument
`;

/**the test case inputs */
var testCases = ["Hello", "World", "From zadar bootcamp"];
var colors=["red","white","blue"];
var i=0;
/**The solution! */
function solution(input, output) {

    if(i===3){
      i=0
    }
    output.write(input,{color:colors[i]});
    i++;
    
}

export default {
  id: "000_printInput",
  task,
  solution,
  testCases
};
