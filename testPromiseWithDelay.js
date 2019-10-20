function delay(ms) {
  return new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve('done');
    }, ms);
  });
}

delay(3000).then((done) => console.log('runs after 3 seconds'+done));