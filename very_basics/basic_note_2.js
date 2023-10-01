// +++++++++Array,Object,Function++++++++++
// Array
//push pop : as usual
//unshift : adding at the very first, Shift: pop from the very first
//Join
let arr = new Array
arr = [1,5,6,8,11]
let str_arr = arr.join()
console.log(str_arr);

// Array slice splice 
// For slice array.slice(1,3) : here 3rd element will not come and also no manipulation in real array.

//On the other hand array.splice(1,3) : this wil slice the array 1-3 all elements but it will also manipulate in the real array - from where you are splicing it. so, It will return you the real array without the spliced area.


//array concat or pushing
// for pushing array will return array inside array. in the parent array
//for concat it will return a new array . and all the elements are different
// spread operator is also life saving for this work
let arr1=["pro", "noob"]
let arr2=["pro2", "noob2"]
let newarry=[...arr1, ...arr2] //this is the spread operator's example
console.log(newarry);

// If we need to convert any type of value to array then we have to use:
let name = "Protik"
let arrname = Array.from(name)
console.log(arrname);
//special case happen when form get an object type value , in that case it will return an empty array. You have to mention how to make the array, with key or value?
let arrname_withof = Array.of(name, arr1, arr2)
console.log(arrname_withof);

//in this case here we are getting array inside array 
//to solve this we can use flat function
let flat_arr = arrname_withof.flat(Infinity) //here you can define the depth of array you have to do flat - for this case it's infinite. but prefer set a value


// +++++++++++Objecet+++++++++++

//singleton is created when object created using constructor - Object.create

//Object literals
const sym = Symbol("abc");
console.log(sym);
const obj = {
    name:"Protik",
    email:"pro@gmail.com",
    [sym]: "this is symbol type",
    age: 21,
    location:"Rajshahi",
    "problematic variable": "this will only can be access by obj[name inside double qoute]"
}
// two types of accessing objects
console.log(obj.email);
console.log(obj[sym]);
console.log(obj["problematic variable"]);
// console.log(obj.sym);   this will return undefined type

Object.freeze(obj)  //by this the object is now freezed so that the values can not be changes inside the obj

//To merge two or more abjects inside one object:
let obj1={
    emp_id:11,
    emp_position:"Eng"
}

let merged_object = Object.assign({}, obj, obj1)
// console.log(merged_object);

//or spread method

let obj2 = {...obj, ...obj1}
console.log(obj2);

//obj little more:

const course={
    course_name: "javascript",
    course_instructor: "Hitesh",
    member: "protik"
}

//object destructure

// one type of accessing object:
console.log(course.course_name);
// or another method of acessing:
const{member} = course
console.log(member)
const{course_instructor:sir} = course
console.log(sir)

// JSON
// {
//     "name":"Protik",
//     "email":"pro@gmail.com"
// }


// Functions:

function newFunction() {
    console.log("first function writing")
} //this is the declearation

// newFunction //this is the reference of the function
newFunction()  //this is the execution of the function

function addingTwoNumbers(n1,n2) {
    return n1+n2
}

const result= addingTwoNumbers(1,50)
console.log("Result is:", result)


//special case of function:

function calculatorPro(val1,val2, ...num1){
    console.log(val1);
    console.log(val2);
    console.log(num1);
    return num1
}
calculatorPro(500,200,1000,5000,3000,5000,52,11)

// Scope:
// var in javascript is kind of for global scope. if anyone changes a var variable's value from any scope then it will change. better to use let or const

//Note: Function inside function can access parent function's variables but parent functions can not use the child functions property outisde the scope of the child function! (some closure theory)******

//functions interesting
function add_one(num) {
    return num+1
}
add_one(10) // this function can be accessed even before the function declearation. just function needed to be there thats all.
const add_two = function(num) {
    //here add_two is also called expression.
    return num+2
}
add_two(10) // this function can not be accessed before the function declearation. only after the declearation of the function it can be called


//This keyword ---
// this refers current context of any variable
//Inside browser global object is WINDOW
//so if someone console.log(this) in browser he will get window object but if anyone do the same thing in local engine or node then it will return an empty object

//inside a function this can not access it's intances. but it will only work for object. but only this will get some default value

// Arrow function +++

const arrowfuntion = () => {
console.log("This is the basic syntax for arrow function") //for arrow function this will get an empty object like global this in node
}

const addingWithArrowfunction0 = (num1, num2) => {
    return num1 + num2
}
//implicit return for arrow function (addingWithArrowfunction0)
const addingWithArrowfunction = (num1, num2) => num1 + num2
const addingWithArrowfunction2 = (num1, num2) => (num1 + num2)
const addingWithArrowfunction3 = (num1, num2) => ({object1 : "for object return you have to wrap the object with first bracket to return that"})
// if you are putting () ->this bracket you dont need to write return, but with {} -> this you have to write return 


// ***** IIFE - Immediately Invoked Function Expressions *****

// function name(params) {
//     console.log("this is a function")
// }
// name()
//if we have to write this function in  IIFE way:
(function name(params) {
    console.log("this is a function")
})(params);
//this is the IIFE way of executing the function, last () -> one is for execution
// IIFE is important for saving our function's code from the global scope's pollution. sometimes global scope's code manipulates the function - but If we do IIFE execution then it can not influcence the code inside the perticular function.
//Note: This IIFE needs a ; after it's execution is done
//named IIFE is function with name
//two IIFE can run together but needed one semi-colon

