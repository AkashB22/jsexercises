let combination = function(arr, k, n){
    if(k==n){
        arr[k] = 0;
        print(arr, n);
        arr[k] = 1;
        print(arr, n);
        return;
    }
    arr[k] = 0;
    combination(arr, k+1, n);
    arr[k] = 1;
    combination(arr, k+1, n);
}

let print = function(arr, n){
    let sum = 0;
    for(let i =0; i<=n; i++){
        if(arr[i] === 1){
            //console.log(brr[i]+",");
            subsetOfSub.push(brr[i]);
            sum++;
        }
        
    }
    mainSubset.push(subsetOfSub);
    if(sum == 0){
        //console.log("null set \n");
        mainSubset.push([]);
    }
    //console.log('\n');
    subsetOfSub = [];
}

let subsetOfSub = [];
let mainSubset =[];
let brr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 20, 21, 24, 28, 30, 35, 40, 42, 56, 60, 70, 84, 105, 120, 140, 168, 210, 280, 420];

combination([], 0, brr.length-1);
console.log(mainSubset);