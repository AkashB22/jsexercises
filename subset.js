let getSubsets = function(arr, selectNo){
if(selectNo === 0 && selectNo === arr){
    return 1;
}
return getSubsets(arr-1, selectNo-1) + getSubsets(arr-1, selectNo);
}

let result = getSubsets(10, 6);

console.log(result);