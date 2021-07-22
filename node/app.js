// //CommonJS, evry file is module (by default)
// //Modules - encapsulated code (only share minimum).
// const names = require('./names');
// const sayHi = require('./utils');
// const data = require('./alternative-Flavour');

// // We can directly call the module here without assigning
// require('./mind-granede');


// // console.log(data);

// // console.log(names);
// // console.log(sayHi);
// // sayHi(names.john);
// // sayHi(names.peter);

//const os = require('os') // Build in method

// //info about current user

// const user = os.userInfo();
// console.log(user);

// //method returns the system uptime in seconds

//console.log(`the system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

// //Path module

// const path = require('path');
// console.log(path.sep)

// const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute);

// // We can give fromat as importing also 
// //As for file reading and writing we have readFileSync and writeFileSync
// Sync way of doing things.
// const {
//     readFileSync,
//     writeFileSync
// } = require('fs')

// const first = readFileSync('./content/test.txt', 'utf8');
// const second = readFileSync('./content/subfolder/first.txt', 'utf8');
// // creating file/writingfile 

// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {
//     flag: 'a'
// });

// console.log(first);
// console.log(second);

// for Async type of operations 
// It won't depend on the task completion -> It will proceed for another operation and later on the other waited one will be excuted.
const {
    readFile,
    writeFile
} = require('fs')

readFile('./content/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result
    readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `The result is : ${first},${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("The next step starting..!")
        })
    })
});
console.log("Hey hey common")

console.log("Hello People!")

//HTTP server

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.write('Welcome to our home page')
//     res.end()
// })
// server.listen(5000);

//simple form of getting req and res for website links

// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("Welcome to home page")
//     }
//     if (req.url === '/about') {
//         res.end('This is the about page')
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>Oh no there is no page which you are searching for</p>
//     <a href ="/">back home</a>
//     `)
// })

// server.listen(5000)