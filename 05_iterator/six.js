const mynum =[1,2,3,4,5,6]


//const as =mynum.filter((num) => num>4)
//console.log(as);


// const as =mynum.filter((num) => {
//     num>4
// })   
// console.log(as);
// wont return anything,because when we open scope
//we need to use return

const as =mynum.filter((num) => {
    return num>4
})// if we open scope we need to give return
console.log(as);

// for each
const nums=[]
mynum.forEach( (num)=> {
    if(num >4){
        nums.push(num)
    }
})
console.log(nums);

