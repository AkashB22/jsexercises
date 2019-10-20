function getCombinations(array) {

    function fork(i, t) {
        if (i === array.length) {
            result.push(t);
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }

    var result = [];
    fork(0, []);
    return result;
}

var data = [ 1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500 ],
    result = getCombinations(data);
	
console.log(result.length);