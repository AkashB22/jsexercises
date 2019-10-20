const myTodos = ['add new index' , 'buy bread' , 'read GV', 'learn GM'];

console.log(myTodos.indexOf('buy bread'));


const newToDos = [{
    title: 'buy bread',
    isDone: true,
}, {
    title: 'read GV',
    isDone: false,
}, {
    title: 'read GM',
    isDone: false
}];

const index = newTodos.findIndex(function(todos, title){
    
});