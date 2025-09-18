//object literals
const jsuse = {
    name : "manish suthar",
    age : 18,
    location : "jaipur",
    email : "abc@gmail.com",
    isloggedin : false,
    lastLoginDays :["Monday","Saturday"]
}
console.log(jsuse.email) //this is not good prectis
console.log(jsuse["email"]); // use this for good prectis

const mysym = Symbol("key1")
const jssym = {
    [mysym] : "jskey1"
}
console.log(jssym[mysym])

//How to change objects
jsuse.email = "manish@gmail.com"
console.log(jsuse)

//How to freeze objects for not change your objects
Object.freeze(jsuse /*object name*/);
jsuse.email = "abc@gmail.com"
console.log(jsuse)