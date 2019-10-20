let readline = require('readline');

init();

function init(){
    console.log("\x1b[34m%s\x1b[0m", "Please enter the word to match the pattern:");

    var cli = readline.createInterface({
        input : process.stdin,
        ouput : process.stdout,
        prompt : '>'
    });

    cli.prompt();

    cli.on('line', function(givenStr){
        givenStr = givenStr.split(" ");
        findMatches(givenStr);

        cli.prompt();
    });

    cli.on('close', function(){
        process.exit(0);
    });
}

// let givenStr = ['dam', 'mad', 'cam', 'mac', 'tam', 'mat', 'man']
// findMatches(givenStr);

function findMatches(givenStr){
let i,j;
let match = 0;
let matchedWords = [];
let unmatchedWords = [];
let repeater1st = 0;
let repeater2nd = 0;
for(let i=0; i<givenStr.length; i++){
    for(let j=i+1; j<givenStr.length; j++){
        let firStr = givenStr[i];
        let nextStr = givenStr[j];
        let firStrArr = firStr.split("");
        let nextStrArr = nextStr.split("");
        if(firStrArr.length === nextStrArr.length){
            repeater1st = checkRepeator(firStrArr);
            repeater2nd = checkRepeator(nextStrArr);
            for(let k in firStr){
                for(let l in nextStr){
                    if(firStr[k] === nextStr[l]){
                        match++;
                    }
                }
            }
        }
        if(match === firStr.length+repeater1st+repeater2nd){
            matchedWords.push(firStr);
            matchedWords.push(nextStr)
        } else{
            unmatchedWords.push(firStr);
            unmatchedWords.push(nextStr)
        }
        match = 0;
        repeater1st = 0;
        repeater2nd = 0;
    }
}


checkForDuplicates(matchedWords);
checkForDuplicates(unmatchedWords);
//console.log(matchedWords);
//console.log(unmatchedWords);
checkDuplicateFromunmatchedMatched(matchedWords, unmatchedWords);
//console.log(unmatchedWords);
matchedWords = doArrayOfArray(matchedWords);
//console.log(matchedWords);
for(let i in matchedWords){
    checkForDuplicates(matchedWords[i]);
}
//console.log(matchedWords);

for(let i = 0; i< matchedWords.length; i++){
    let deleteArr;
    if(typeof(matchedWords[i+1]) !== 'undefined'){
        deleteArr = checkDuplicateFromMatched(matchedWords[i], matchedWords[i+1]);
    }
    if(deleteArr){
        matchedWords.splice(i+1);
    }
}
console.log("\nGiven words:");
console.log(givenStr);
console.log("Matching words:");
console.log(matchedWords);
console.log("Not Matching words:");
console.log(unmatchedWords);

}

function checkForDuplicates(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            let fir = arr[i];
            let next = arr[j];
            if(fir === next){
                arr.splice(j, 1);
                if(arr[j] === fir){
                    while(arr[j] == fir){
                        arr.splice(j, 1);
                    }
                }
            }
        }
    }
}

function checkDuplicateFromunmatchedMatched(firstArr, secondArr){
    for(let i=0; i< firstArr.length; i++){
        for(let j=0; j<secondArr.length;j++){
            if(firstArr[i] == secondArr[j]){
                secondArr.splice(j, 1);
            }
        }
    }
}

function doArrayOfArray(arr){
    //console.log(arr);
    let arrOfArr = [];
    let match = 0;
    let repeater1st = 0;
    let repeater2nd = 0;
    for(let i=0; i< arr.length; i++){
        let  tmpArr = [];    
        for(let j=i+1; j< arr.length; j++){
            let first = arr[i];
            let nex = arr[j];
            let firStrArr = first.split("");
            let nextStrArr = nex.split("");
            repeater1st = checkRepeator(firStrArr);
            repeater2nd = checkRepeator(nextStrArr);
            for(let k in firStrArr){
                for(var l in nextStrArr){
                    if(firStrArr[k] === nextStrArr[l]){
                        match++;
                    }
                }
            }
            if(match === firStrArr.length + repeater1st + repeater2nd){
                tmpArr.push(first);
                tmpArr.push(nex)
            } 
            match = 0;
            repeater1st = 0;
            repeater2nd =0;
        }
        if(tmpArr.length > 0){
        arrOfArr.push(tmpArr);
        }
        tmpArr = [];
    }
    return arrOfArr;
    //console.log(arrOfArr)
}

function checkDuplicateFromMatched(firstArr, secondArr){
        for(let i=0; i< firstArr.length; i++){
            for(let j=0; j< secondArr.length; j++){
                let first = firstArr[i];
                let second = secondArr[j];
                if(first == second){
                    return true;
                }
            }
        }
}

function checkRepeator(arr){
    let repeator = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                repeator++;
            }
        }
    }
    return repeator;
}