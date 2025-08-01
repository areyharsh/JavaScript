const name =  "Hasrhvardhan"
const repoCount = 5

console.log(`Hello my name is ${name} and my repository count is ${repoCount} `);

const gameName = new String ("blackDiamond")

console.log(gameName[5]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));

console.log(gameName.indexOf('c'));

console.log(gameName.charAt(6));

console.log(gameName.substring(6));

console.log(gameName.charAt(6));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = "  harsh     "
console.log(newStringOne.trimEnd());

const url = "https://harshya.com/harsh%20Deshmukh" 
console.log(url.replace('%20','_'));

console.log(url.includes('harsh','_'));

console.log(gameName.split('-'));
