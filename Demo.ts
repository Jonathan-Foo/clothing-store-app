// Using Generics with Function to get better type coverage and definitioin compared to using any
const last = <T>(arr: T[]): T => {
    return arr[arr.length -1]
}

last([1, 2, 3])
last(['1', '2', '3'])

// if result is : void, then return in the function will trigger an error
const voidTest = (a: number, b: number): number => {
    return a + b
}

// Will only accept the amount of arguments it is specfied, it this case only 1 
const makeArr = <T>(x: T) => {
    return [x];
}

const v = makeArr(4)
const v2 = makeArr('4')


const makeArr2 = <T, Y>(x: T, y: Y): [T, Y] => {
    return [x, y];
}

const v1 = makeArr2(4, 4);
const v3 = makeArr2('4', '5');
const v4 = makeArr2('4', 5);

// Extending Generics with objects
const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

const bob = makeFullName({firstName: "bob", lastName:"smith", age: 20});

// Using generics with interface 

interface Tab<T> {
    id: string;
    position: number;
    data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;













