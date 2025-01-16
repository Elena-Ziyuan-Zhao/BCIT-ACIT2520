const os = require("os");
const cups = os.cpus().length;

function add(n1, n2) {
    return n1 + n2;
};

const sum = add(5, 4);
console.log(sum); // 9


//directory invoking function 
//can also indirectly invoke a function
//why is it useful?
const refOne = add;
const refTow = add;

console.log(refOne(3, 7));

add(5, 4);


/*
addTwo function is called higher-order function
higher order function is a function which takes its one of its functions another function

add -> addReference is a call back function
a callback function that is passed in

in real situation, the call back function must be called within the local scope, or inside the global function 

*/


function addTwo(num1, addReference) {
    return addReference(num1, 2);
};
console.log(addTwo(7, add)); // point to another function add

//example:
const colors = ["red", "blue"];

//write your own forEach 
function forEach(list, cb) {

    for (let i=0; i<list.length; i++) {
        cb(list[i]);
    };

};

/*
three types of functions

1. delaration:

    function functionName(parameter1, parameter2, ....) { behaviours }

    problem: 
        hoisting: the whole JS is scanned and functions are lifted up to the top of file
                    so you can call function even before it is defined

        danger: functions are moved behind the scene can lead to hard-to-identify bugs

2. function expression syntax
    swicth the function and functionName

    const sum = function (n1, n2) { }

    hoisting is disabled in this syntax
    the function has to be defined first before it is called


3. arrow function expression
    
    const sum = (n1, n2) => {
        }

    
    no hoisting
    just like function expression
    the only difference between arrow function expression with function expression is:
        removal of the function keyword
        the add an arrow
    the most common way 

    if there is only one line in the behaviour, return keyword and curly bracket can all be removed
*/

colors.forEach(value => console.log(value)); // can even leave the functionName, so that later people cannot call it

// requirment: in any callback function, always use arrow function in exams and courses 


const multipler = function(num1, num2, cb) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        cb(new Error("ERROR! Invalid Input"));
    } else {
        cb(null, parseInt(num1) * parseInt(num2));
    }
};


const result2 = multipler(1, 2, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
});




const fs = require("fs");

//if you use writeFile, then you have to make read file nested because it is asynchronous as 

fs.writeFile("bigfile.txt", "bcit", (error)=> {
    if (error) {
        return console.log(error)
    }

    console.log("file written");

    fs.readFile("bigfile.txt", "utf8", (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        };
    });
})


// Asyncrhonous function: runs in the background
//we are going to read file but it will take time
//so the CPU will use hyperthread to asynchronously read the file in the background
//node.js will skip this reading part and running rest of the code ---> sendEmail()
//the main thread is not blocked by this running part, and skip to running sendEmail()
// the "sending email ....." will shows first in terminal 



//this read first 
sendEmail();
function sendEmail() {
    console.log("sending email .....");
}

