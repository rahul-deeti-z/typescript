class Employee{
    employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good morning ${this.employeeName}`)
    }
}
let emp1 = new Employee('Rahul');
console.log(emp1.employeeName);
emp1.greet()
