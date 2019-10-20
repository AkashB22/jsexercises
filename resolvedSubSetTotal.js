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
let getAllSubsets = function(divisors)
     { 
         return divisors.reduce(
            (subsets, value) => subsets.concat(
            subsets.map(set => [value,...set])
            ),
            [[]]
        );
}

let getMaxSumWithoutLast = function(arr){
    const arrNew = arr.map((x)=>x);
    arrNew.pop();
    let maxSum = getMaxSumOfArr(arrNew);
    return maxSum;
}

let getMaxSumWithoutFirst = function(arr){
    const newArr = arr.map((x)=>x);
    newArr.shift();
    let maxSum = getMaxSumOfArr(newArr);
    return maxSum;
}

let getMaxSumOfArr = function(arr){
    let maxSum = 0;
    let partialSum = 0;
    for(let value of arr){
        partialSum += value;
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum < maxSum){
            partialSum = maxSum;
        }
    }
    return maxSum;
}
let getSubStrCondition = function(arr, n){
    let maxSum = 0;
    let partialSum = 0;
    for(let i in arr){
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum < n){
            partialSum = maxSum;
        } else if(maxSum == n){
            break;
        } else {
            let previousValue = arr[i-1];
            maxSum -= previousValue;
            partialSum = maxSum;
            if(maxSum == n){
                break;
            }
        }
    }

    return maxSum;
}

let n=1;
let count = 0;
let conditionedAppliedArr = [];
let conditionNotAppliedArr = []

while(n<1001){
let divisors = getAllDivisors(n);
//console.log(divisors);
let totalOfDivisors = getTotalOfArray(divisors);
//console.log(totalOfDivisors);

let maxSumWithoutLast = getMaxSumWithoutLast(divisors);
//console.log(maxSumWithoutLast);

let maxSumWithoutFirst = getMaxSumWithoutFirst(divisors);
//console.log(maxSumWithoutFirst);

let subStrCondition = getSubStrCondition(divisors, n);

if(totalOfDivisors > n && n !== subStrCondition){
    conditionedAppliedArr.push(n);
    count = 0;
} else {
    conditionNotAppliedArr.push(n)
    count = 0;
}
n++;
}

console.log("conditions applied for " + conditionedAppliedArr);
console.log("conditions not applied for " + conditionNotAppliedArr);

    