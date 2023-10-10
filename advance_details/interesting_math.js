console.log(Math.PI);
// let's just try to replace this value
Math.PI= 10
console.log(Math.PI);

// let' know how to manipulate the object and change those insiders 

// at first to see the properties description :

const description = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(description);
/*
{
  value: 3.141592653589793,       
  writable: false,
  enumerable: false,
  configurable: false

  here writable is false so it can not be changed. it's already hard coded
  we also add some hard coded value so that no one can change it for that perticular object
}
*/

// let's create an object 

const chai = {
    name: "masala chai",
    price : "200"
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// result of this:
// {
//   value: 'masala chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// now make it const or untouchable like Math.PI:
// Object.defineProperty used to define property of some object
Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false,
    configurable: false
})
// Object.defineProperty(Math,"PI",{
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// ********Cannot redefine property: PI*************

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"));


// loop on object:

// by default objects are not iteratable . the way of making it iteratable is : Object.entries(obj)

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
        console.log(`key: ${key} : value: ${value}`);
    }
    // this condition used because sometimes there are some functions inside the object that will also come inside this value pair style. the codes this is not required. so this check is important to have the properties of object without function

}

// Result: key: price : value: 200

// here the enumerable is false for name so there is no key value pair for name and there is only price property

