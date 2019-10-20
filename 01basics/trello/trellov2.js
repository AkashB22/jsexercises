let myTodos = {
    day : 'Monday',
    meeting : 0,
    meetDone : 0
};

let addMeeting = function(todo, meet=0){
    todo.meeting = todo.meeting + meet;
};

let doneMeeting = function(todo, met = 0){
    todo.meetDone = todo.meetDone + met;
};

let reset = function(){
    todo.meeting = 0;
    todo.meetDone = 0;
};

addMeeting(myTodos, 2);