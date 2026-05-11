// primitive

// 7 types : String , Number,Boolean,null, undefined,Symbol,BigInt

const score =10
const isloggedin =false
let email; //undefined
const id=Symbol("123") // symbol return type is symbol
const id2=Symbol("123")
console.log(id === id2);

const bignumber =430843842343243243234n
// js is dynamic type 


// reference(non primitive)
// Array,Ojects,Functions
const heros=['shaktiman','bheem'] // array
let myobj={
    name:'sandeep',
    age:22,
}
 

//  ** typeof(null) is object(interviews)
// non primitive typeof is object 

// to master js master js objects and browser events


//=====================================================

// stack(primitive types)  heap(non-primitive)
// stack means it creates copy
// heap means it gives reference
let name1="sandeep"
let name2=name1 // copy is given
name2="sandeep kumar"
console.log(name1);
console.log(name2); // 


let user={
    name1:"sandeepp",
    uopi :"32",
}
let user1=user
user1.name1 = "kingg"
console.log(user.name1);
console.log(user1.name1);

