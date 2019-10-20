
let getMyGrade = function(currentMarks, totalMarks){
    let myPercent = (currentMarks/totalMarks) * 100;

    let myGrade = '';

    if(myPercent >= 90){
        myGrade= 'A';
    }else if(myPercent >= 80){
        myGrade = 'B';
    }else if(myPercent >= 70){
        myGrade = 'C';
    }else if(myPercent >= 60){
        myGrade = 'D';
    }else if(myPercent >= 50){
        myGrade = 'E'; 
    }else{
        myGrade = 'F';
    }
    return `Your Grade is ${myGrade} and the percentage you have scored is ${myPercent}`;
};

let yourResult = getMyGrade(21,100);

// console.log(yourResult);
console.log(getMyGrade(2345,8246));