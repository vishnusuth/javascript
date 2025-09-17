const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);
console.log(marvel_heroes[3],[1]);

const allheros = marvel_heroes.concat(dc_heroes)
console.log(allheros)

