// we can declare function inside array.
const arr  = ["this is function inside array", message => console.log("message")];
// we can pass function as argument in another function.
function insideFunction(func){
    func("Hi there, i'am runing inside 'insideFunction'");
}
insideFunction(message => console.log(message));

// They can also returned from another function, just like variable.
function createScreen(logger){
    return function(message){
        logger(message.toUpperCase() + "!!!");
    }
}
const scream = createScream(message => console.log(message));
scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");
//
const createScream = looger => message =>{
    looger(message);
}