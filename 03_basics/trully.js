const email = "sandeeep@gmail.com"
if (email) {
    console.log("got email");
}
else{
    console.log("dont have user email");   
}

// falsy 
//false, 0,-0,BigInt0n,undefined ,"",null,NaN

// truthy values
// "0","false"," ",[],{} empty object,function(){}


const user=[]
if(user.length === 0){
    console.log("array is empty");  
}

const userobj={}
if(Object.keys(userobj).length === 0){
    console.log("object is empty");
}//Object.keys(userobj) this gives array

// Nullish Coalescing operator(??) : null undefined
let val1;
val1=5 ?? 6
val1=null ?? 10
val1=undefined??15
val1=null ?? 10 ??20
console.log(val1);


// terniary operator
// condition ? true : false

const tea=100
tea>80 ? console.log(tea) : console.log("tea");

