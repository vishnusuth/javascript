const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const oherNum = 123.8966
console.log(oherNum.toPrecision(4)); // in this focus on (n) bez its depand on number not in dots

const hundered = 1000000
console.log(hundered.toLocaleString()); // this is convert 1000000 to 1,000,000 as usa formet
console.log(hundered.toLocaleString('en-IN')); // this ('en=IN') converrt into 10,00,000 as indian forment

//======================================================================================================//

console.log(Math);
console.log(Math.abs(-4)); // - sign ki value ko + meh convert karne ke liye
console.log(Math.round(4.6)); // round of karne ke liye
console.log(Math.ceil(4.2)); // + roundof meh hamesa + meh hii round off karegaa
console.log(Math.floor(4.9)); // - roundof hhamesa - meh hii karegaa
console.loh(Math.min(4.9,8,7)); // minium value laane ke liye
console.log(Math.max(4,5,3,6)); // maxmium value laane ke liye

console.log(Math.random()); // ye function 0.0 se 0 .1 ke bich ke sabhi number ko randomly dega
console.log(Math.random()*10); // jo value 0.1 hai uss ko 1.1 meh convert kar dega
console.log((Math.random()*10)+1) // ess ka use kar ke hum 0 ko avoid kar sakte hai
console.loh(Math.floor(Math.random()*10)+1); // point ke baad ke number ko remove karne ke liyye\

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(min - max + 1)) +1);