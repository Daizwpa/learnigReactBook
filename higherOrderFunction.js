/**
 * Higher-order functions are
 * functions that can manipulate other functions. They can take functions
 * in as arguments or return functions or both.
 */
 const invokeIf = (condition, fnTrue, fnFalse) =>
     condition ? fnTrue() : fnFalse();
 const showWelcome = () => console.log("Welcome!!!");
 const showUnauthorized = () => console.log("Unauthorized!!!");
 invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!"
 invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!!!"
//  invokeIf expects two functions: one for true and one for false. This is
// demonstrated by sending both showWelcome and showUnauthorized
// to invokeIf. When the condition is true, showWelcome is invoked.
// When it’s false, showUnauthorized is invoked.
/* 
Higher-order functions that return other functions can help us handle
the complexities associated with asynchronicity in JavaScript. They
can help us create functions that can be used or reused at our
convenience.
*/
const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`);
const log = userLogs("grandpa23");
log("attempted to load 20 fake members");
getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`),
    error => log("encountered an error loading members")
);
