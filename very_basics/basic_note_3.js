//Javascript execution context

// {} -> Global execution context is everywhere - object function anything
//Browser's global execution context is window object
//Javascript is single threaded 
//Another one is Functional execution context
//One more is Eval execution context (optional)

// IMP NOTE:
/* 
1. Global execution phase -> this
2. Memory phase -> here every variables will get some allocation of memory
for example: var1-> undifined
3.Execution phase-> here every variable will get the actual value after completing the cycle of memory phase it will execute.
    Now inside the execution phase there should be functions right?
    for the functions it will create another box which will have
        *new variable environment &
        *execution thread

        here, for every function execution it will run again like before:
            1. memory phase &
            2. execution phase
            after function returns it will return the value to the global execution context
        After returning the whole box will just be deleted


Call stack:
    LIFO - last in first out
    function will go one by one in global execution phase. whoever entered last that will execute first

    
*/