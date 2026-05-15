// js is all about objects and events
// object can be declared as constant or literals
// singelton(from constructor), Object.create 

// object literals

const sym=Symbol("key1")//*

const jsuser={} // empty object
const user ={[sym]:"mykey1",
    name:"sadneep",
    "fullname":"sandeepk",
    age:20,
    loggedin:false
}
// we can define key and value
// the name above is string

// access object
//console.log(user.age);
//console.log(user.[age]); // its tracked a string so use"age"
// console.log(user["age"]);
// console.log(user["fullname"]);
//console.log(typeof(sym)); // not used as Symbol 
// to use it as symbol use []


// change value
user.name = " kumar"
//Object.freeze(user)// now value cant be changed
//console.log(user);
user.greeting = function(){
    //console.log("hello js user");
 }
//console.log(user.greeting());

// to refer to even more 
 user.greetingtwo = function(){
    //console.log(`hello use, myself ${this.name}`);
 }
 //console.log(user.greetingtwo());

 //============================================
 //const tinderuser = new Object() // singelton obj
 //console.log(tinderuser); // empty object{}

 const tinderuser={}// non singelton object
 tinderuser.id="123lkj"
 //tinderuser.name="sandep"
 //console.log(tinderuser);
 

 const regularname={
    email:"asndjnsd@gmail.com",
    fullname:{
        username:{
            firstname:"sandep",
            lastname1:"kumar"
        }   
 }
}
 //console.log(regularname.fullname?.username.firstname);

 const obj1={1:"a" , 2:"b"}
 const obj2={3:"c",4:"d"}
 //const obj3=Object.assign(obj1,obj2)//
 // in this the first object also get changed 
//  console.log(obj1);
//  console.log(obj3);
const obj4=Object.assign({},obj1,obj2)//obj 1 did not change
//console.log(obj1);
//console.log(obj4);
 //we use more
 const obj3={...obj1,...obj2} 
 //console.log(obj3);
 
 
 //object inside arrray
 const arr5=[
    {id:2343,name:"jfsndg"},
    {id2:234,name:'fjksdf'}
 ]
 //console.log(arr5[0].name);
  //console.log(arr5[1].name);


  /************* */
// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('id'));
 


//object de structure
const course={
    coursename:"js in hindi",
    price:899
}
const{price} = course
console.log(price);
const{price:price2} = course// changing name
console.log(price2);


// { //JSON,object ka nam hota hai
//     // JSON mai key bhi string mai hoti hai
//     "name":"sandeep"
//     "course":"js in hindi"
//     "price":"free"
// }



