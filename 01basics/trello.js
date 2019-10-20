
const days = ['mon','tue','wed','thur','fri','sat'];

console.log(days[0]);

let helloWorld = function(){
    console.log('Hello World');
};

days.forEach(helloWorld);

days.forEach(function(day, index){
    console.log(`days ${index+1} is ${day}`);
});