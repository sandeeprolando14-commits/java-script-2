// in browser the gobal object is window
const user={
    name:"sandeep",
    age:23,
    welcome:function(){
       console.log(`${this.name},welcome to website`)
       // console.log(this);    
    }
}
let x=user.welcome// x stores the function it wont run
x() // user.welcome()
// user.name="sam"
// user.welcome()

//console.log(this);// in browser the gobal object is window
//over here its empty object{}

/*function chai(){
    let name="sandeep"
    console.log(this.name);// this only works in objects,cant use in fuctions
}
chai()*/
// const chai= ()=>{
//     let name="sandeep"
//     console.log(this.name);// this only works in objects,cant use in fuctions
// }
//chai()


// basic arrow function

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,4));

// implicit return
// const addtwo =(num1,num2)=> (num1+num2)
// console.log(addtwo(3,4));


 
// if curly braces used then use return

// const addtwo2=(num1,num2) => ({name:"sandeep"})
// console.log(addtwo2(3,4));

// to return object we need to keep it in parenthesis()

