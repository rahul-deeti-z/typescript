//We can specify an object as a type in typescript
function printFullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Rahul',
    lastName: 'Deeti'
};
printFullName(p);
