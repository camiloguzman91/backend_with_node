// %s
// %d
//%j

console.log("Un %s y un %s", "xbox", "ps");

console.info("Hi doggies");
console.warn("Hi error")

console.assert(42 == "42");
console.assert(42 === "42");

//indica la línea en la que está ocurriendo el error
console.trace("Hi");

const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("Hello from foo");

