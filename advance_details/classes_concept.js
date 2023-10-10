// after ES6 classes:

class User{
    constructor(name, email, pass){
        this.name=name
        this.email=email
        this.pass=pass
    }

    encryptPass(){
        return `${this.pass}pro`
    }

    changeusername(){
        return `${this.name.toUpperCase()}`
    }
}

const protik = new User("protik", "pro@gmail.com", "propass")
console.log(protik);
console.log(protik.encryptPass());
console.log(protik.changeusername());


// If the new syntax of class is not there :
// behind the scene:

function UserOld(usernameOld,emailOld, passwordOld) {
    this.usernameOld=usernameOld
    this.emailOld=emailOld
    this.passwordOld=passwordOld
}

UserOld.prototype.passwordOldFunction = function(){
    return `${this.passwordOld}pro`
}
UserOld.prototype.usernameOldFunction = function(){
    return `${this.usernameOld.toUpperCase()}`
}

const OldProtik = new UserOld("Old Protik", "oldpro@gmail.com", "prooldpass")
console.log(OldProtik);
console.log(OldProtik.passwordOldFunction());
console.log(OldProtik.usernameOldFunction());

// Inheritance::*******************

class Parent_inheritance{
    constructor(parentname, id, versity){
        this.parentname=parentname
        this.id=id
        this.versity=versity
    }

    printName(){
        console.log(`My name is ${this.parentname}`);
    }

}

class Child_inheritance extends Parent_inheritance{
    constructor(childname, parentname, school){
        super(parentname) 
        //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.childname=childname
        this.school=school
    }

    printParentName(){
        console.log(`parent name is ${this.parentname}`);
    }
}

const child1 = new Child_inheritance("child1name", "child1_parent_name", "School1")
console.log(child1);


// static props- properties

class main{
    constructor(name,id){
        this.name=name
        this.id=id
    }

    functionOne() {
        console.log("function one executed");
    }

    // these all functions are available for the instace created from main class. but if you want to private some function and stop instences to use any perticular function then you have to use static keyword before the function defination.. for example:

    static functionTwo() {
        console.log("function two executed");
    } //after using static you can not call this function outside the class or any instence of this class can not directly access or call this
}

const check1 = new main("check1","123")
console.log(check1);
check1.functionOne()
// check1.functionTwo()  //check1.functionTwo is not a function


// coppied codes from Hitesh js repo for understanding later. Understood by video this part properly 
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button Clicked</button>
</body>
<script>
    class React {
        constructor(){
            this.library = "React"
            this.server = "https://localhost:300"

            //requirement
            document
                .querySelector('button')
                .addEventListener('click', this.handleClick.bind(this))

        }
        handleClick(){
            console.log("button clicked");
            console.log(this.server);
        }
    }

    const app = new React()
</script>
</html>  */

// In this case: If we have to access the html or window from a instence of class then we have to bind(this) -> with the function so that current context also pass there.. otherwise it will have only that perticular button or anything where you have added queryselector or eventlister  and function provides which functionality. 

// to be more clear - getting all the variables functions of that class inside the function where the event is listening on click or any event-inside that functionn you can access other functions or variables using this by sending that bind(this)***

