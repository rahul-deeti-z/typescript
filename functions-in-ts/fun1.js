function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 'hello'));
function sum(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    return num1 + num2;
}
console.log(sum(12));
// optional parameters, default parameters
//optional parameters must always be after required parameters
