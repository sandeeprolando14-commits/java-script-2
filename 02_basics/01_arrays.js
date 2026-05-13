const arr=[0,1,2,3,4,5,'sandeep']//also array
// js array are resizeable & keep different datatypes
// js array copy operation create shallow copies
/* shallow copies means same reference point
deep copies means dont share same reference*/
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) adds at 0 index
// myArr.shift() delets at 0 index

// console.log(myArr.includes(9)); return boolean
// console.log(myArr.indexOf(3)); -1 if not found

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//does not include last index

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//orginal array se niakl deta hai,includes last index
console.log("C ", myArr);
console.log(myn2);