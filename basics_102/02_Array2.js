const  one_piece  = ["luffy", "robin", "sanji", "zoro", "chopper"]
const naruto = ["naruto", "sasuke", "hinata", "gara", "lee"]

// one_piece.push(naruto)

// console.log(one_piece);

// one_piece.concat(naruto)
// console.log(one_piece);

let best_anime = one_piece.concat(naruto)
console.log(best_anime);

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harshvardhan"));
console.log(Array.from({name:"Harsh"})); 

let score1 = 21
let score2 = 22
let score3 = 23

console.log(Array.of(score1, score2, score3));
