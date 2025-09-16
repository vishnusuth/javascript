const myArr = [0,1,2,3,4]
const myHero = ["Shaktimaan","Manish"]

const myArr2 = newArr[1,2,3,4]
console.log(myArr[1]);

//Array Methods

myArr.push(6); //add value in last of array
myArr.pop(); //remove value in last position
myArr.unshift(9); // add value in front position
myArr.shift() // remove value in front position

console.log(myArr.includes(9)); //true or false meh bataye gaa ki ye joo bracket mehh value dii hai wooh hai ya nahi
console.log(myArr.index(3)); //index ki position batae gaa

const newArr = myArr.join

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);