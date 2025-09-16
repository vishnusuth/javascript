const myArr = [0,1,2,3,4]
const myHero = ["Shaktimaan","Manish"]

const myArr2 = [1,2,3,4] // Corrected array initialization
console.log(myArr[1]);

// Array Methods

myArr.push(6); // add value in last of array
myArr.pop(); // remove value in last position
myArr.unshift(9); // add value in front position
myArr.shift(); // remove value in front position

console.log(myArr.includes(9)); // true or false
console.log(myArr.indexOf(3)); // Corrected method name

const newArr = myArr.join(); // Corrected usage of join

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);