
 #### Variable types, 3 basic types

  #### boolean, number, string

  let isBeginner: boolean = true;
  let total: number = 1;
  let name: string = 'Rahul'

  ##### type null and undefined 

  let n: null = null;
  let u: undefined = undefined;
  we can assign null and undefined to all basic types

#### Arrays declaration in typescript

  let list1: number[] = [1,2,3]
  let list2: Array<number> = [1,2,3]

#### Tuple type 

  let person1: [string, number] = ['Chris',22]
  Order should match

#### Enumerations

enum Color {Red, Green, Blue};

let c: Color = Color.Blue

#### any type

When you declare a variable with the any type, you're essentially telling the TypeScript compiler to not perform type checking on that variable, allowing it to have any value and to be used in any way, similar to how variables work in traditional JavaScript.

let randomValue: any = 10;

Ex: 
   ```
    randomValue = true
    randomValue.toUpperCase()
    randomValue()
    randomValue.name
  ```



#### unknown type

The unknown type in TypeScript is a type-safe counterpart to the any type. It represents a value whose type is not known at compile-time, ***similar to any, but with a crucial difference: you cannot perform operations or access properties on values of type unknown without first narrowing their type through type checking.***

##### similiarity of any and unknown

- We can store any kind of values in ***any*** type and ***unknown*** type, like below
```
    let anyTypeVariable: any = 'abcde'
    let unknownTypeVariable: unknown = 123

    anyTypeVariable = { 
                        name: 'Rahul', 
                        profession: 'Software Engineer'
                      }
    unknownTypeVariable = 23

```
- If we want to use unkown type variable we have to perfrom explicit type checking before using them, but for any type we don't need to do that.

```
    function log(value: unkown) {
        // we have to perform below type checking step to use unkown type variable
        if (typeof value == 'number') {
            /* we have to perform above 
            type check to verify that it is a number
            then only we can use number related 
            functions on "value" variable.
            */
            console.log(value.toFixed(2));
        } else {
            console.log(value);
        }
    }
```
##### same code using any type
```
    function log(value: any {
        /* in below step we don't need to perform 
         type to check whether "value" is
         a number type or not
         */
        console.log(value.toFixed(2));
        console.log(value);
    }
```

 //type inference

//  let a;
//  a = 10;
//  a = true;

//  let b = 20;
//  b = true; 


 //union types

 /* 
 let multiType: number | boolean;
 multiType = 20;
 multiType = true
 */

 //intersection type
 /* number and boolean combined has a never type 
 but basically this is how you do it */
  // let intersectionType: number & boolean; 

# TypeScript Data Types

1. number
2. string
3. boolean
4. null
5. undefined
6. void
7. any
8. never
9. object
10. symbol
11. BigInt
12. Arrays (e.g., number[], string[])
13. Tuples (e.g., [number, string])
14. Enumerations (enums)
15. Literal types (e.g., 1, hello)
16. Union types (e.g., number | string)
17. Intersection types (e.g., A & B)
18. Function types (e.g., (param: number) => void)
19. Object types (e.g., { name: string, age: number })
20. Type aliases (e.g., type MyType = number)
21. Generics (e.g., Array<number>, Promise<string>)
22. Conditional types (e.g., T extends U ? X : Y)
23. Mapped types (e.g., { [K in keyof T]: number })
24. Index types (e.g., keyof T, T[keyof T])
25. Readonly types (e.g., Readonly<T>)
26. Partial types (e.g., Partial<T>)
27. Pick types (e.g., Pick<T, prop1 | prop2>)
28. Omit types (e.g., Omit<T, prop1>)
29. Record types (e.g., Record<string, number>)
30. Utility types (e.g., ReturnType, Required, Exclude, NonNullable, etc.)
