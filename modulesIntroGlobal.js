const amount = 12;

if (amount < 10) {
    console.log('It is less than the given');
} else {
    console.log("It is greater value");
}

console.log(`Buddy first node Code excution`);

//To access the diectory location 
console.log(__dirname); // It will give the exact path

// setInterval(() => {
//     console.log("Hello, world!");
// }, 1000);

// Modules
//CommonJS, evry file is module (by default)
//Modules - encapsulated code (only share minimum).

const secret = 'SUPER SECRET';
const john = "john";
const peter = "peter";

const sayHi = (name) => {
    console.log(`Hey ${name}`)
}
sayHi('haary');

//CommonJS, evry file is module (by default)
//Modules - encapsulated code (only share minimum).
const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-Flavour');

// We can directly call the module here without assigning
require('./mind-granede');


// console.log(data);

// console.log(names);
// console.log(sayHi);
// sayHi(names.john);
// sayHi(names.peter);