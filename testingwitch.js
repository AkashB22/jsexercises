/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here

let cluster = require('cluster');
let http = require('http');
let numOfInstanceNeed = 4;
let numOfInstanceRunning = 0;

if(cluster.isMaster){
    for(let i=0; i< 1; i++){
        cluster.fork();
        numOfInstanceRunning++;
    }
} else{
    let server = http.createServer(function(req,res){
        res.end('Hello World Form Nodejs');
    });
    
    server.listen(3000, function(){
      console.log('Server started running and listening on port 3000')
    })
    server.listen(3001, function(){
      console.log('Server started running and listening on port 3001')
    })
    server.listen(3002, function(){
      console.log('Server started running and listening on port 3002')
    })
    server.listen(3003, function(){
      console.log('Server started running and listening on port 3003')
    })
}
