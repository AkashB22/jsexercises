let toDos = {
    meeting : 0,
    meetDone : 0,
    day : 'monday',

    addMeeting : function(meeting_add){
        this.meeting = this.meeting + meeting_add;
        console.log(`there are ${this.meeting} meeting on ${this.day}`);
    },

    doneMeeting : function(meet){
        this.meetDone = this.meetDone + meet;
        let remaining_meet = this.meeting - this.meetDone;
        console.log(`${this.meetDone} meetings are done. So the remaining is ${remaining_meet}`);
    },

    reset : function(){
        this.meetDone = 0;
        this.meeting = 0;
        console.log(`after reset your meeting done are ${this.meetDone} and meeting available are also ${this.meeting}`);
    }
};

toDos.addMeeting(5);
toDos.doneMeeting(3);
toDos.reset();

toDos.addMeeting(8);
toDos.doneMeeting(2);
toDos.reset();
