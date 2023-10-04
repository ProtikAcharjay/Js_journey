//Javascript execution context

// {} -> Global execution context is everywhere - object function anything
//Browser's global execution context is window object
//Javascript is single threaded 
//Another one is Functional execution context
//One more is Eval execution context (optional)

// IMP NOTE:
/* 
1. Global execution phase -> this
2. Memory phase -> here every variables will get some allocation of memory
for example: var1-> undifined
3.Execution phase-> here every variable will get the actual value after completing the cycle of memory phase it will execute.
    Now inside the execution phase there should be functions right?
    for the functions it will create another box which will have
        *new variable environment &
        *execution thread

        here, for every function execution it will run again like before:
            1. memory phase &
            2. execution phase
            after function returns it will return the value to the global execution context
        After returning the whole box will just be deleted


Call stack:
    LIFO - last in first out
    function will go one by one in global execution phase. whoever entered last that will execute first
 
*/

// Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truthy values: "0", 'false', " ",[], {}, function(){} 


// how to check object :
const myobj = {}
if(Object.keys(myobj).length === 0){
    console.log("Empty");
}


// Nullish coalescing opeator (??): null undefined //*********** */

let val1;
val1 = 5 ?? 1
val1 = null ?? 1

console.log(val1);

// Ternary operation:

// condition ? true : false
const price = 100
price == 100 ? console.log("buy it") : console.log("don't buy");

// loops:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// while (condition) {
    
// }

// do {
    
// } while (condition);

// Array specific loops: ******

// for of

const arr1 = [1, 2, 3, 4, 5]
for (const num of arr1) {
    console.log(num);
} //also can be used in string and objects

//Maps:

const map = new Map() //don't get dubplicate values only unique
map.set("name", "Protik")
map.set("id", "20-42715-1")
map.set("University", "AIUB")
map.set("University", "AIUB")
map.set("University", "AIUB")

console.log(map);

for (const [key, value] of map) {
    console.log(key, "->", value);
} //object can not iterated by this format but map can be iterated

const test_object = {
    Cricket : "ABD",
    Football : "Neymar"
}

// for in loop:
for (const key in test_object) {
    console.log(key, "'s fav player", test_object[key]);
} //map is not iteratable so it's can be written in for in loop like this

// high order loops : ********
//foreach

const semester = ["summer", "fall", "spring"]
semester.forEach( function (params) { //callback function
    console.log(params);
} )

//with arrow function foreach
// semester.forEach( (i) => {
//     console.log("arrow function", i);
// } )

//interesting: if the function is defined before like 
/* 
function anything(abc){
    console.log(abc);
}
this function can be call inside as a call back function for foreach loop

semester.forEach(anything) -> don't need to execute that function.. reference is enough for this case
*/

//with arrow function foreach with other peramiters of foreach loop

semester.forEach( (item, index, arr) => {
    console.log("With other parameters: ", item, index, arr);
} )


//Objects inside a array accessing by foreach:

const arrobj = [
    {Name:"Protik",
    University: "AIUB"},
    {Name:"Niloy",
    University: "Deffodil"},
    {Name:"Amartya",
    University: "Kazi Nazrul"}
]

arrobj.forEach( (index) => {
console.log(index.Name);
} )

