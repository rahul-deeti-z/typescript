function add(num1: number, num2)
{
    return num1+num2
}
console.log(add(1,'hello'))


function sum(num1: number=10, num2?: number): number
{
    return num1+num2;
}
console.log(sum(12))

// optional parameters, default parameters
//optional parameters must always be after required parameters

