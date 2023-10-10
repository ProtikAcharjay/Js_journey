// Object literal

// const User ={
//     name:"Protik",
//     id: "20-42715-1",
//     University: "AIUB"
// }

// constructor function

// const promiseOne = new Promise()

// const date= new Date()

// this new is contructor function - to make new context

function user(username, logincount, isloggedin) {
    this.username =username;
    this.logincount =logincount;
    this.isloggedin =isloggedin;

    this.greet =function(){
        console.log(`welcome ${this.username}`);
    };

    return this ;
    //implicitly return by default but in this case we will return
}


const userOne = new user("Protik", 11, true) ;

// const userTwo = user("Hitesh", 12, false)  //falty code
//note: this is not even printed anywhere - but still this one replaced the userOne and comming all the values inside userOne

const userTwo = new user("Hitesh", 12, false) ; //right code

console.log(userOne);
console.log(userTwo.constructor);

// 1. Created a empty object - instence
// 2. Contructor function call for new keyword
// 3. arguments are packed inside {this}
// 4. return 


// Special Notes:++++++++++++++++++++++++++++++++++++++

/*

In javascript everything is object
array, string or function -> object -> null;
function is function also it's an object

******************prototypping inheritence -> javascript **************


*/

function buytea(name_tea, price_tea ) {
    this.name_tea= name_tea
    this.price_tea=price_tea
}

buytea.prototype.increment=function(){
    this.price_tea++
}

buytea.prototype.printMe=function(){
    console.log(`Price of the tea is ${this.price_tea}`);
}

const chai = new buytea("Chai", 20)
const tea = new buytea("tea", 200)

chai.printMe()

  
/*
                study material from chai aur code
                
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/




