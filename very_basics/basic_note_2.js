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

