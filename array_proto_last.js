Array.prototype.last = function () {
    if (Array.length === 0) {
        console.log(Array.length())
        return -1;
    }
    else {
        return Array[-1]
    }
};


const arr = [1, 2, 3];
arr.last(); // 3
console.log(arr.last());

// console.log(Array[1, 2, 3])
