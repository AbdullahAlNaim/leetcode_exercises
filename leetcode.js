let functions = [x => 10 * x, x => 10 * x, x => 10 * x];


var compose = function (functions) {
    return function (x) {
        let n = 0;
        for (let y = functions.length - 1; y = 0; y--) {
            //n += functions[y]
            console.log(functions[y])
        }
        //return n;
    }
};

const fn = compose([x => x + 1, x => 2 * x])
// 9

console.log([x => x + 1, x => 2 * x])

