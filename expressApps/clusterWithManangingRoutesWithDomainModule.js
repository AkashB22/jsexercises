console.log('Handling I/O errors through Domain module')
let cluster = require('cluster');
let http = require('http');

let numProcess = 3;
let numSlavesRunning = 0;

if(cluster.isMaster){
  console.log('master');
  for(let i=0; i<numProcess; i++){
    cluster.fork();
    numSlavesRunning++;
  }
  cluster.on('disconnect', function(worker, code, signal){
    console.log('A worker died so forking a new process');
    numSlavesRunning--;
    if(numSlavesRunning < numProcess){
      cluster.fork();
      numSlavesRunning++;
    }
  })
} else{
  let server = http.createServer(function(req, res){
    let domain = require('domain').create();
    domain.on('error', function(err){
      console.log("caught Error :"+ err.code);

      try{
        let timeout = setTimeout(function(){
          process.exit(1);
        }, 10000);

        timeout.unref();

        server.close();
        cluster.worker.disconnect();

        res.status =500;
        res.end('Something went wrong internally');


      } catch(anotherError){
        console.log('Error attempting to respond domain error')
      }

    });

    domain.add(req);
    domain.add(res);

    domain.run(function(){
      myRequestHandler(req,res);
    })
  });
  server.listen(3456, function(){
    console.log('Slave http server online' + process.pid);
  })
  function myRequestHandler(req, res){
    console.log(req.url);
    if(req.url=='/simulatedError'){
      throw new Error('simulated error thrown');
    } else{
      res.end('helloWorld')
    }
  }

  // process.on('uncaughtException', function(error){
  //   console.log('Caught the exception', error.code);
  //   process.exit();
  // })
  
}