/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
*/
let unit = "#";
let piece ="";
for(let timeRun = 0; timeRun < 7; timeRun++)    {
    piece +=unit;
    console.log(piece);
    
}
let x = 1;


/*
Write a program that uses console.log to print all the numbers from 1
to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5 (and not 3), print
"Buzz" instead.
When you have that working, modify your program to print "FizzBuzz
" for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed
out a significant percentage of programmer candidates. So if you solved
it, your labor market value just went up.)
*/

for(let myNumber = 1; myNumber <=100; myNumber++)   {
    if(myNumber % 3 ==0)    {
        if(myNumber % 5 == 0)   {
            console.log("FizzBuzz");
        }else   {
            console.log("Buzz");
        }
    }
    if(myNumber % 5 ==0 )   {
        console.log("Buzz");
    }else {
        console.log(myNumber);
    }
}


//Use the ternary operator
for(let myNumber = 1; myNumber <=100; myNumber++)   {
    myNumber % 3 == 0 ? myNumber % 5 == 0 ? console.log("FizzBuzz") : console.log("Fizz") : myNumber % 5 == 0 ? console.log("Buzz"): 
    console.log(myNumber);
}

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a
chessboard.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generates this pattern, define a binding
size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
*/


let board = ""
for(let line = 1; line <= 8; line++) {
    for (let position = 1 ; position <= 8; position++)   {
        if((line + position) % 2 == 0 ) {
            board += " ";
        }else {
            board += "#"; 
        }
    }
    board +="\n";
}
console.log(board)

