//We can specify an object as a type in typescript

interface Person{
    firstName: string;
    lastName?: string;
}

function printFullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p ={
    firstName: 'Rahul',
    lastName: 'Deeti'
}

printFullName(p);