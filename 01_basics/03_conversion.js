let score = "33abc"
let score1 = null
let score2 = undefined
console.log(typeof score)
console.log(typeof (score)) // we can use it as methode also

let value = Number(score) // conversion
console.log(typeof value)
console.log(value) // nan not a number
console.log(score1); // null =0
console.log(score2);



//"33" => 33
// "33abc" => NaN
// true =1,false=0

let isloggedin =1;
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);
let isloggedin1="sandeep";
let booleanisloggedin1 = Boolean(isloggedin1) // true
console.log(booleanisloggedin1);
let isloggedin2 ="";// 0 or ""
let booleanisloggedin2 = Boolean(isloggedin2)// false
console.log(booleanisloggedin2);

// conersiont to string
let number =33
let string = String(number)
console.log(string)

