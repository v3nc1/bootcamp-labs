const task = `
        Write a program that will output the max and min number from input array
`;

/**the test case inputs */
var testCases = [[12, 5, -1, 14, 32, 7]];

function solution(input, output) {

        var min;
        var max;
        var niz="(";

        input.forEach(element => {

                niz=niz+element+",";
                if(min===undefined&&max===undefined){
                        min=element
                        max=element

                }
                if(max<element){
                        max=element
                }
                if(min>element){
                        min=element
                }
                
        });

        niz=niz+")"
        output.write("In array  "+niz);
        output.write("Min= "+min);
        output.write("Max= "+max);

}

export default { id: "021_max_min_InArray", task, solution, testCases };
