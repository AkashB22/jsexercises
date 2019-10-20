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


// transFormExpression(expression);

// let transFormExpression = function(expression){
//     console.log(expression);
//     mainExp = expression.split("=");
//     let mainLhs = mainExp[0];
//     let value = resolveMainLhs(mainLhs);
//     let mainRhs = mainExp[0];
// }

