/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const newArr = [];
    let index = 0;
    for (const element of arr) {
        newArr[index] = fn(element, index);
        index++;
    }
    return newArr;
};