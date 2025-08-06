let myDate = new Date()
console.log(myDate.toString());

// console.log(myDate.toDateString() + "toDateString");

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 , 23)

// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2023-02-23")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);

let newDate = new Date()
console.log();

newDate.toLocaleString('default',{
    weekday: "long",
})