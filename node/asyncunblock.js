const {readFile} = require('fs');

// readFile('./content/test.txt','utf8',(err,data) => {
//     if(err){
//         return;
//     }else(data)
//         console.log(data);
    
// })

// The same we can create/use by promises/Async and Await by passing through a function

const getText = (path) =>{
    return new Promise((resolve,reject) => {
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

//getText('./content/test.txt').then((result)=>console.log(result)).catch((err)=>console.log(err));

// We canot do for multiple files if implemented above code to overcome that we have try and catch methods

const starting = async() => {
    try {
        const first = await getText('./content/test.txt')
        const second = await getText('./content/result-sync.txt')
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

starting()

