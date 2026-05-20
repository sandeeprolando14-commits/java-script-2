// immediately invoked function (IIFE)
(function chai(){
    console.log(`db connected`);
})();//; invoke function should be stopped by semicolen
/* ()()
() => function definition ()=> execution call*/

// global scope se problem hoti hai kahi bar to remove global scope variable or declaration


(()=>console.log("hello")) (); // arrow function
 ((name)=>{
    console.log(`data base ${name}`);
 })("sandeep")
