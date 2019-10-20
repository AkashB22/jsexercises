const myList =
[{
    title : "washing ClotheS",
    isDone : "true"
},
{
    title : "brush Your teeths",
    isDone : "true"
},
{ 
    title : "start before 3pm",
    isDone : "true"
},
{
    title : "finish arrow function",
    isDone : "true"
},
{
    title : "eat dinner",
    isDone : "true"
},
{
    title : "Buy bread",
    isDone : "true"
}];


const findUnDone = function(myLists) {
    const falseList = myLists.filter((mylist) => mylist.isDone === "true");
    return falseList;
};

const unDone = findUnDone(myList);
let onlyTitle = [];

for(let i in unDone){
    onlyTitle.push(unDone[i].title);
}
console.log(onlyTitle);