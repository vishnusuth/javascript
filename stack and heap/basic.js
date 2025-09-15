// stack and heap 
// they are two type first is stack and second one this heap.
// stack ke andr hamesa primitive datatype aate hai. orr heap ke andr non-primitive datatype
// stack ko hamesa oignel data ki copy millti hai. heap ko hamesa orignal data ki ek refence value milti hhai

let myname = "manish";
let anothermyname = myname;
anothermyname = "vishnu";
console.log(myname);
console.log(anothermyname);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "mansh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

