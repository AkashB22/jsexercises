let obj= {
    "op": "equal",
    "lhs": {
        "op": "add",
        "lhs": 1,
        "rhs": {
            "op": "multiply",
            "lhs": "x",
            "rhs": 10
            }
        },
    "rhs": 21
};

// let obj = {
//     "op": "equal",
//     "lhs": {
//         "op": "add",
//         "lhs": 10,
//         "rhs": {
//             "op": "subtract",
//                 "lhs": {
//                 "op": "multiply",
//                 "lhs": 2,
//                 "rhs":"x"
//                 },
//             "rhs": "4",
//             }
//         },
//     "rhs": 16
// };
let str = JSON.stringify(obj);
let parsedObj = JSON.parse(str);
let operationMapping = {
    'add' : '+',
    'subtract' : '-',
    'multiply' : '*',
    'divide' : '/',
    'equal' : '='
}
let wordToOperations = function(obj){
    if(typeof(obj.op) == 'undefined' ){
        return;
    }
    for(let operation in operationMapping ){
        if(operation === obj.op){
            obj.op = operationMapping[operation];
        }
    }

    return wordToOperations(obj.lhs) + wordToOperations(obj.rhs);
}
wordToOperations(obj);
//console.log(JSON.stringify(obj));

let getExpression = function(obj){
    if(typeof(obj.op) == 'undefined' ){
        return;
    }
    if(typeof(obj.lhs)==='object' && (typeof(obj.rhs)==='number' || typeof(obj.rhs)==='string')){
    return ` ( ${getExpression(obj.lhs)}  ${obj.op} ${obj.rhs} ) `;
    }
    if(typeof(obj.rhs)==='object' && (typeof(obj.lhs)==='number' || typeof(obj.lhs)==='string')){
        return ` ( ${obj.lhs} ${obj.op} ${getExpression(obj.rhs)} ) `;
    }
    if((typeof(obj.rhs)==='number' || typeof(obj.rhs)==='string') && (typeof(obj.lhs)==='number' || typeof(obj.lhs)==='string')){
        return ` ( ${obj.lhs} ${obj.op} ${obj.rhs} ) `;
    }
    return ` ( ${getExpression(obj.lhs)} ${obj.op} ${getExpression(obj.rhs)} )`;

}

let expression = getExpression(obj);

console.log(expression);

let changedExpression = '';
let resolveMainLhs = function(splitLhs, splitRhs){
    //consoleconsole.log(splitLhs);
    if(typeof(splitLhs[0]) !== 'undefined' && splitLhs[0] !== 'x'){
        if(splitLhs[0] === '('){
            splitLhs.pop();
            splitLhs.shift();
        }
        let firstValue = splitLhs[0];
        let operation = splitLhs[1];
        if(typeof(Number(firstValue)) === 'number' && firstValue !== 'x' && firstValue !== '(' && firstValue !== ')'){
            if(['+', '-', '*', '/'].indexOf(operation) > -1){
                let reverseOp = getReverseOperation(operation);
                splitLhs.shift();
                splitLhs.shift();
                splitRhs = "(" + splitRhs;
                splitRhs += reverseOp + firstValue + ")";
                return resolveMainLhs(splitLhs,splitRhs);
            }
        } 
    
        if(firstValue === 'x' && firstValue !== '(' && firstValue !== ')'){
            let reverseOp = getReverseOperation(operation);
            firstValue = splitLhs[2];
            splitLhs.shift();
            splitLhs.shift();
            splitLhs.shift();
            if(['+', '-', '*', '/'].indexOf(reverseOp)){
                splitRhs = "(" + splitRhs;
                splitRhs += reverseOp + firstValue + ")";
                return resolveMainLhs(splitLhs,splitRhs);
            }
        }

        if(typeof(Number(firstValue)) === 'number' && firstValue === '('){
            for(let i=0; i<splitLhs.length; i++){
                if(splitLhs[i] === ')'){
                    let operation = splitLhs[i+1];
                    let firstValue = splitLhs[i+2];
                    splitLhs.splice(i+1, 2);
                    let reverseOp = getReverseOperation(operation);
                    splitRhs = "(" + splitRhs;
                    splitRhs += reverseOp + firstValue + ")";
                    return resolveMainLhs(splitLhs,splitRhs);
                }
            }
        }
    } else {
        return 'x = ' + splitRhs;
    }
}

let getReverseOperation = function(operation){
    if(operation === '+'){
        return '-';
    } 
    if(operation === '-'){
        return '+';
    }
    if(operation === '*'){
        return '/';
    }
    if(operation === '/'){
        return '*';
    }
}
//let str = "(  ( 10 +  (  ( 2 * x )   - 4 )  )   = 16 )";
let splitWithSpace = expression.split('=');
let lhs = splitWithSpace[0];
let rhs = splitWithSpace[1];
let lhsWithSpace = lhs.split(" ");
let rhsWithSpace =  rhs.split(" ");
let lhsWithoutSpace = [];
for(let i=0; i< lhsWithSpace.length; i++){
    if(lhsWithSpace[i] !== ''){
        lhsWithoutSpace.push(lhsWithSpace[i]);
    }
}
rhs = rhsWithSpace[1];
//console.log(lhsWithoutSpace);
lhsWithoutSpace.shift();
//console.log(rhsWithSpace[1]);
let reverseExp = resolveMainLhs(lhsWithoutSpace, rhs);
console.log(reverseExp);
let xValue = reverseExp.split("=");
console.log('Evaluated value 0f x is ' + eval(xValue[1]));

