function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}
function subtract(num1, num2) {
    diff = num1 - num2
    return diff
}
//to export objects one by one
// exports.addFunc = add

// to export multiple objects at once
module.exports = { addFunc: add, subFunc: subtract };//renaming and sending