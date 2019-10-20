const myToDos = [
    { title : "eat dinner", done : "false"},
    { title : "wake up by 6AM", done : "false", Regular : "true"},
    { title : "Wash your clothes", done : "false"},
    { title : "start by 3PM" , done : "false"},
];

//Method one

let findToDo = function(todos, title){
    let index = todos.findIndex(function(todo, index){
        console.log("mtodos"+ todo);
        return todo.title.toLowerCase() === title.toLowerCase();
        
    });
    return todos[index];
};

let search = findToDo(myToDos , "wake UP by 6AM");

console.log(search);


const findToDoByFind = function(todos, title){
    const foundArrayValue = todos.find(function(todo, index){
            return todo.title.toLowerCase() == title.toLowerCase();
    });
    return foundArrayValue;
}

console.log(findToDoByFind(myToDos, "start By 3pm"));