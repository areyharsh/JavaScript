// singleton

//object literals

const Laptop =  {
    laptopName : "Omen",
    graphicCard : "RTX 4050",
    processor : "Amda Ryzen7",
    storage : ["16gb-RAM", "1tb-ROM"]
}

// console.log(Laptop.processor);
// console.log(Laptop.storage);

// Laptop.laptopName = "Omen"
// Object.freeze(Laptop)
// Laptop.laptopName = "HP"
// console.log(Laptop);

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Harshvardhan",
    "full name": "Harshvardhan Deshmukh",
    [mySym]: "mykey1",
    age: 21,
    location: "Maharashta",
    email: "hehehe@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hehehe@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hehehe@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
