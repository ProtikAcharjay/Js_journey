fetch('https://jsonplaceholder.typicode.com/users') //the response will come as promise so we can use .then .catch
.then((data)=>{
    // atfirst you have to return
    return data.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E: ",error);
})

// fetch is network based request and returns-> promise

//if your promise request and got 404 error. where it will be included??
// -> resolve or reject?? -> it will always come as response. it will not consider as an error.

// for fetch -> used - microtask queue, fetch queue or priority queue (these 3 are same in this case)

// syntax:

// fetch('https://example.com/', {
//   method: 'GET',
//   body: new FormData(),
// });

// or

// const headers = [
//     ['Content-Type', 'text/html', 'extra'],
//     ['Accept'],
//   ];
//   fetch('https://example.com/', { headers });


/*

Learning fetch calling internal:
response = fetch("something")

this will first go and create some memory feilds:
    data,
    onFUlfulled[]
    onRejection[] -> these two are array type and these 3 are all private you can not access them directly

Then-> it will go to web browser or node env to get a network request which will provide you one response or error:
    response:
        if the response it even some error after hitting that request and got that error it will count in onfullfilled - or - resolve()
    error:
        if the request is failed and didnt get any of response not even error that will be count as error which will be included inside on rejection - or - reject
*/