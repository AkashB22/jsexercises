let getAllDivisors = function(no){
    let allDivisors=[];
    for(let i=1; i<no; i++){
        if(no%i === 0){
            allDivisors.push(i);
        }
    }
    return allDivisors;
}

let getTotalOfArray = function(allDivisors){
    return allDivisors instanceof Array && allDivisors.length > 0 ? allDivisors.reduce((accumulator, current)=>{
    return accumulator + current;
}) : 0;
}
let n=1;
let count = 0;
let getAllSubsets = function(divisors)
     { 
         return divisors.reduce(
            (subsets, value) => subsets.concat(
            subsets.map(set => [value,...set])
            ),
            [[]]
        );
        }

while(n<71){
let divisors = getAllDivisors(n);
//console.log(divisors);
let totalOfDivisors = getTotalOfArray(divisors);
//console.log(totalOfDivisors);
const allSubsets = getAllSubsets(divisors);
//console.log(allSubsets);
allSubsWithoutFirstAndLastTerm = allSubsets.filter((value, index)=>index!==0&&index!==allSubsets.length-1);
//console.log(allSubsWithoutFirstAndLastTerm);

for(let eachSubset of allSubsWithoutFirstAndLastTerm){
    let totalOfEachSubSet = getTotalOfArray(eachSubset);
    if(totalOfEachSubSet != null && totalOfEachSubSet === n){
        count++;
        break;
    }
}

if(count === 0 && totalOfDivisors > n){
    console.log("conditions applied for, So you can choose the pipe number " + n); 
    count = 0;
} else {
    console.log("conditions not applied for, So do not choose the number " + n);
    count = 0;
}
n++;
}