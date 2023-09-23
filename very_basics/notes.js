"use strict"; //use all the js code as newer version

// typeof null is object

// if the variable have "100abc" and it's converted using Number function, then it will return Nan value. which is number but (not a number)

//null is identified as datatype - object & for conversion it will return 0

let check= " "
let boolcheck= Boolean(check)
console.log(boolcheck);

const test = Symbol("11");
const test_again = Symbol("11");
console.table([test, test_again, test===test_again]);

// Detatypes = [primitive type and non-primitive type]

//Array
const players = ["Neymar", "Ronaldo", "Messi"];

//object
let playerObj = {
    Neymar: "Brazil",
    Ronaldo: "Portugal",
    Messi: "Argentina"
}

/*
Memory type:
    Stack memory used in primitive datatypes &
        -> FOR STACK    Will get copy 
    Heap memory used in non-primitive datatypes
        -> FOR HEAP     Will get reference means original value

    */


    // String interpolation:
    let name = "Protik"
    let location = "Rajshahi"
        console.log(`My name is ${name}. I am from ${location}`)

    const best_team = new String("Brazil")
    console.log(best_team);
    console.log(best_team.length);
    console.log(best_team.toLocaleLowerCase());
    console.log(best_team[0]);
    let winner = "Neymar"
    console.log(winner);
    console.log(winner.length);
    console.log(winner.toUpperCase());
    console.log(winner[0]);

// important functions of string => trim, replace, slice, substring

const url = "http://protik.com/pro%20tik"
console.log(url.replace('%20', '_'));


console.log(url.split('/'))