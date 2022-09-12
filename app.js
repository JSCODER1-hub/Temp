// // const os = require('os');
// // const user = os.userInfo();

// // console.log(user);
// // console.log(`the system uptime${os.uptime} seconds`);
// // console.log(`The System uptime is ${os.uptime()}`);

// // const path = require('path');
// // console.log(path.sep)
// // // Relative Path
// // const filPath = path.join("\folder" , "file")

// // basename last name in the path

// // resolve Gets the absolute path
// //method for the system uptime 

// // const {readFileSync, writeFileSync} = require('fs');
// // // const fs = require('fs');
// // // // fs.readFileSync
// // const first = readFileSync("./content/test.txt","utf-8")
// // const second = readFileSync("./content/test1","utf-8")

// // writeFileSync('./content/test1' , "Hello from write file sync")
// // // , a to append to file
// // console.log(first,second)

// // for async
// const {readFile, writeFile} = require('fs');
// // const fs = require('fs');
// // // fs.readFileSync
// readFile("./content/test.txt","utf-8",(err,result)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })
// const second = readFile("./content/test1","utf-8")

const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === "/"){
        res.end('Welcome to our home page');
    }
    if (req.url === '/about'){
        res.end("hi from about")
    }
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back Home</a>
    `)
    // console.log(req);
    // res.write('Welcome to our home page');
});

server.listen(5000)