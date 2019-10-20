let tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 20, 21, 24, 28, 30, 35, 40, 42, 56, 60, 70, 84, 105, 120, 140, 168, 210, 280, 420];

let getAllSubsets = function(divisors)
     { 
         return divisors.reduce(
            (subsets, value) => subsets.concat(
            subsets.map(set => [value,...set])
            ),
            [[]]
        );
        }

let set = getAllSubsets(tempArr);
console.log(set);