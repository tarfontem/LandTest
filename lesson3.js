//factorial function
const prompt=require("prompt-sync")({sigint:true});
function factorial(n)
{
    if(n==1)
        {
            return 1
        }else{
            return factorial(n-1)*n;
        }
    
}
console.log(factorial(10));

//strings, new line, tab and special characters

console.log("This is the first line\nAnd this is the second");
console.log("A newline character is written like \"\\n\".");
console.log(`half of 100 is ${100 / 2}`);
console.log(typeof 4.5);

// binary operators  *, /, +, -, && ,||,<=, ==, >=, <,>
//unary operators typeof, -,+, !
//ternary operator ?  use: condition ? true: false
//prompt("input your name");
prompt("what is it")

 
 
let name = prompt("What's your name?\n");
console.log("hello "+name+"!");
