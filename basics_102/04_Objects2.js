// const gameUser = new Object()  this is singleton Object 

// const gameUser = {}  this is a non  singleton Object 

const gameUser = {}
gameUser.id = "0555"
gameUser.name = "Harshvardhan" 
gameUser.isOnline = false

// console.log(gameUser);

const regularUser = {
        email : "someone@gmail.com" ,
        fullName : {
                userFullName : {
                        firstName : "Harshvardhan",
                        lastName : "Deshmukh"
                }
        }
}

// console.log(regularUser.fullName.userFullName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = { obj1,obj2 }
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "d@gmail.com"
    },
]

users[1].email
console.log(gameUser);

// console.log(Object.keys(gameUser));
// console.log(Object.values(gameUser));
// console.log(Object.entries(gameUser));




const game = {
    gameName : "San Andreas",
    price : "799$",
    gameCompany : "Rockstar Games"
}

const {gameCompany : Company} = game

console.log(Company);
