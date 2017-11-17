let array = [1, 3, 5, 10, 1, 3, 120];

function getBigNumberSum(arr) {
    function sortNumber(prev, curr) {
        return prev - curr;
    }

    function sumBigNumber(prev, curr, index, arr) {
        if (index === arr.length - 1) {
            return prev + curr;
        }
        return curr;
    }

    let nums = arr.sort(sortNumber).reduce(sumBigNumber);
    return nums;
}

console.log(getBigNumberSum(array));
