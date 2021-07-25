/* function doubleIt (num){
    return num * 2;
}
const result = doubleIt (5);
console.log(result) */


/* const doubleIt = function myFun (num){
    return num * 2;
}
const result = doubleIt (5);
console.log(result); */


/* const doubleIt = num => num * 2;
const add = (x , y) => x + y;
const give5 = () => 5;

const result = doubleIt (50);
const result = add (50 , 60);
const result = give5 ();
console.log(result); */


const DoMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result2 = DoMath (7 , 5);
console.log(result2);