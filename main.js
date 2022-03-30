"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
/* Variable types, 3 basic types
    boolean, number, string*/
var isBeginner = true;
var total = 1;
var name = 'Rahul';
/* type null and undefined
    let n: null = null;
    let u: undefined = undefined;
    we can assign null and undefined to all basic types
*/
/*Arrays declaration in typescript*/
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
/* tuple type */
var person1 = ['Chris', 22];
//Order should match
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
//c = 'Hello'
// any type
var randomValue = 10;
randomValue = true;
/*randomValue.toUpperCase()
randomValue()
randomValue.name
*/
//unknown type
/*can't acces any property of unknown type
 nor can you call or construct them*/
var someVariable = 10;
//console.log(someVariable.name)
//type assertion
var someVal = someVariable.toUpperCase();
console.log(someVal);
