// const mynum = [1,2,3,4,5,6,7]

// const newnum = mynum.map( (num) => num *10)
// console.log(newnum);

// chaining
//  const newnum = mynum.
//  map((num)=> num*10).
//  map((num2) => num2+30).
//  filter((num1)=> num1>50)// filter for true or false
//  console.log(newnum);


 // array.reduce()

 const mynum = [1,2,3,4,5,6,7]
 const total=mynum.reduce(function (acc,cur){
    //console.log(`acc -: ${acc} current -:${cur}`);
    
    return acc +cur
},0)  // acc =0
//console.log(total);

const sum = mynum.reduce((acc,curr)=> {
    return acc+curr
},0) //acc =0
console.log(sum);


