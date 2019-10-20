let myTodo = {
    day : 'Monday',
    meetings : 0,
    meetDone :0,

    addMeeting: function(day, meetings){
        this.day = day;
        this.meetings = meetings;
        console.log(this+"the day is "+this.day+" and the number of meetings are "+this.meetings);
    },
};


myTodo.addMeeting('tuesday', 10);

myTodo.addMeeting('wednesday', 5);

myTodo.addMeeting('thursday', 15);

