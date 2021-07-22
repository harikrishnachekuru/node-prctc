// we can directly import the util module from which we can directly call the promisify method

const {readFile,writeFile} = require('fs')
// for the above one we can also use as
//const {readFile,writeFile} = require('fs').promises
// If we use the above pattern then accordingly we need to change the readfile format as readFile,write as writeFile.
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const star = async() => {
    try {
        const first = await readFilePromise('./content/test.txt','utf8')
        const second = await readFilePromise('./content/result-async.txt','utf8')
        // we can directly assign the await method without variable for write/create
        await writeFilePromise('./content/usefulasync.txt',`This is Awesome : ${first} ${second} , 
        This is made from simplified usage and calling of await and sync promise methods`,
        // If need avoid duplicates we need to apply case as flag 
        {flag : 'a'}
        )
    } catch (error) {
        console.log(error)     
    }
}

star()