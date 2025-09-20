/*Function functionname(){
// function code
}
function()  */

function name() {
    console.log("M")
    console.log("a")
    console.log("n")
    console.log("i")
    console.log("s")
    console.log("h")
}
name()

//Adding two Number in js using function

function addTwoNumber(number1, number2) {
    console.log(number1 + number2)
}
addTwoNumber(3,7)

//using Return

function addTwoNumbers(number3, number4) {
    let result = number3+number4
    return result
    //return ke baad function koi kaam nahi karta
}
const result = addTwoNumbers(6,7)
console.log("Result: ", result);

function loginUserMessage(username = 'sam') {
    if (!username) {
        console.log("Please Enter a username");
        return
    }
    return`${username} just logged in`
}