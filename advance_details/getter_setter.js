class User{
    constructor(email, password){
        this.email=email

        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    // this type of change in property _email , so that no conflict arise for this. other wise both of them this set get and contructor try to get or set the values in the same property
    }

    set email(value){
        this._email = value
    }
    get password(){
        return `Fool You can not access password -- hint: 46dogdl${this._password}ldfking65`
    
    }

    set password(value){
        this._password = value
    }

}

const pro = new User("pro@gmail.com", "realpass")

// console.log(pro.password);
console.log(pro.email);
console.log(pro.password);

// maximum call stack exceeded - this error comes for - the value constuctor and set both want to set the value .. ultimately they are in a race and both of them set the values so the stack got exceeds

// if anyone want to watch password they will get nothing:


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// copied code from chai aur code -- for understanding old syntax getter setter using function 

/*
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// copied code from chai aur code -- for understanding old syntax getter setter using Object**
/*
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)  
//this is a factory function -- create() -> new is contructor function
console.log(tea.email);
*/


// getter and setter basically overwrites the property
// _ underscore is kind of the private property
// now days # is noted for private property - es2022 -reference

