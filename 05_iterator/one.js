// for
let array=["sdf" ,"wfwe","wfew"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element);

}
let a=8
do {
    //console.log(a);
    a++;
} while (a>8 && a!=15);

// array ke ander object[{},{}],{}

// for of loop
let array1 =[1,2,3,4,5,6,7]
for (const element of array1) {
    //console.log(element);
}
const greeting ="hello world!"
for (const greet of greeting) {
   // console.log(greet);
}
// map

const map = new Map()
map.set("in",1)
map.set("usa", "unnited state of india")
//console.log(map);
for (const key of map) {
       // console.log(key);
}
for(const [key,value] of map)
{
   // console.log(key , '-:' , value); 
}


const myobj={
    js :"java",
    cpp :"c++"
}
// object is not iterable by for of loop

for(const key in myobj)
{
    console.log(myobj[key]);
}