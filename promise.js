let someObject={
    call : ()=>{
        return new Promise(function(resolve, reject){
        console.log("this is from someObject");
        setTimeout(()=>{
            resolve( "response of someObject ");
        },1000)
    })
}
};
let anotherObject={
    call: function(str){
        return new Promise((resolve, reject)=>{
            console.log("this is from anotherObject");
            setTimeout(()=>{
                resolve("response of anotherObject "+str);
            }, 1000);
        })
    }
};

let thirdObject={
    call: function(str){
        return new Promise((resolve, reject)=>{
            console.log("this is from thirdObject");
            setTimeout(()=>{
                resolve("response of thirdObject "+str);
            }, 1000);
        });
    }
};
const runCalls = () => {
 try {
    someObject.call().then((str)=>{
    anotherObject.
    call(str).then((str)=>{
        thirdObject.call(str).then((str)=>{
            console.log(str);
        })
    })
 })

 }
 catch (err) {
 console.error(err);
 }
}
runCalls();