let myname ="Protik     "

// console.log(myname.trim().length); 
console.log(myname.trim().length);
console.log(myname.trueLength);


let myplayers =["neymar", "CR7"]

let playerpower={
    neymar: "Penalty",
    CR7: "Freekick",
    getneymarpower : function(){
        console.log(`Neymar's power is ${this.neymar}`);
    }
}

Object.prototype.protik=function(){
    console.log("protik is present in all objects");
//as everyone is one kind of object at some point so this function can be access by any of the object array string or anything 
}

// playerpower.protik()

myplayers.protik()

Array.prototype.heyPro= function(){
    console.log("Inside array only.");
}

myplayers.heyPro()
// playerpower.heyPro()  //this object can not have this method which is under array defined
const user1={
    username: "chai",
    mail: "chai@example.com"
}
const Teacher ={
    makeVideo: true
}
const Techsupport ={
    isAvailable: false
}
const TAsupport ={
    fulltime: true,
    __proto__: Techsupport
}

Teacher.__proto__ = user1 //this is prototypial inheritance
// here teacher can accesss all the prototypes of user1

// New aproach: modern syntax

Object.setPrototypeOf(Techsupport, Teacher)
// here teachsupport will get all the prototypes of teacher. in behind __proto__ is running


const anotherName = "Protik Acharjay"

String.prototype.trueLength = function(){
    console.log(`this: ${this}`);

    console.log(`True length is: ${this.trim().length}`);
}

anotherName.trueLength()

"what is   ".trueLength()
"chai aur code".trueLength()




