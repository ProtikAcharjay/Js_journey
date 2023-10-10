// call bind and apply

// call

function setUsername(username){
    this.username=username
    console.log("called setusername");
}

function createUser(username,email,password){

    // setUsername(username)

    //this is just reference- little confusing with () but it's reference not calling a function inside another function.

    // this will only run the function but not hold any value for the parent function 

    // for calling js provides a method that is call()

    setUsername.call(this, username)
    //here we have to pass current execution context to another function -  for that we use call and this keyword

    this.email=email
    this.password=password
}

const pro = new createUser("pro","pro@gmail.com", "123")
console.log(pro);