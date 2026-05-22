function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function price(val1,val2,...num1) // rest operator ...
{
    return num1
}
//console.log(price(100,200,100,200,100,200,300,400));// num1 is array

const user={
    username:"sandeep",
    price:"188"
}
function handelobject(anyobject){
   // console.log(`hello myself ${anyobject.username} and price${anyobject.price}`);  
}
handelobject(user)
// same for array