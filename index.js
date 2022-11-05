// Primitive Datatypes - Numbers, Strings, Boolean

// Non Primitive - Arrays, Objects and Functions
// undefined and null

//declaration and initialization
// var num;

//num = 1;

// console.log(num)

// Type conversion
// var num = 2
// console.log(String(num));
// console.log(typeof String(num));

// var bol = -1
// console.log(Boolean(bol))

// var num1 = 1
// var num2 = true
// var num2 = "1"

// console.log(num1 - num2); //0

// console.log( num1 -Number(false));

// let and const

// let num;
// num = 20;
// console.log(num)

// const num2 = 40;
// console.log(num2);

// operators

// console.log(2**5);

let num1 = "1";
let num2 = 1;

// == means it is only comparing the values
// === means it is comparing both values and datatype
// console.log(num1 === num2)

// falsy values - 0, undefined, null, "", false
// var falsyValue = false

// console.log(Boolean(falsyValue));

// Comparisons
// ==, ===, > , < , >= , <=

// logical operators
// && || ! are used in if else

var val = 15;
var val2 = 20;
var val3 = 31;

// if (val > 10 ) { // boolean value
//   console.log('Greater than 10')
// } else if (val > 5) {
//   console.log('Greater than 5')
// } else {
//   console.log('Less than 5');
// }

// if ((val == 15 && val2 == 20) || val3 == 30) {
//   console.log('True')
// } else {
//   console.log("False");
// }

// falsy values - 0, undefined, null, "", false

var flag = 10;

// if(flag == 10) {
//   console.log('True')
// } else {
//   console.log('False')
// }

// create a variable
// check if variable is an empty string or 0 OR
// check if variable is a number and greater than 10
// True else false

// var val = "Str" ;

// if( val && (typeof val === "number" && val > 10)) {
//   console.log('true')
// } else {
//   console.log('false')
// }

// ternary operator

// var val = 39;

// val > 5 ? console.log('Yes') : console.log("No");
// typeof val === "number" || val > 15 ? console.log('Yes') : console.log("No");

// var res = val > 25 ? val > 30 ? "Greater than 30" : "Less than 30" : "Less than 25"
// var res =
//   val < 25 ? "Less than 25" : val > 30 ? "Greater than 30" : "Less than 30";

// console.log(res);

// var dataFromApi = 0

// var newVal = dataFromApi ? dataFromApi : null
// all falsy values - you will use ||

// var newVal = dataFromApi ?? null
// console.log(newVal)

// var val = 0 || 10; 0 ?? 10
// var str = "" || "Hey";
// console.log(str);

// Nulish operator - undefined, null
// defined and not-defined
// var val =  0 ?? 10

// Want to check undefined or nullish values

// For Nullish operator
// truthy values - "", 0 and false
// falsy values - undefined and null
// var val =  false ?? "Hey"
// console.log(val);

// var i = 0;

// while(i < 10) {
//   console.log(i)
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   if( i == 5){
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   let str = ""
//   for (let j = 0; j < i; j++) {
//     str += "*"
//   }
//   console.log(str);
// }

// if(a==1){
// a +=2
// }

// var a = null;

// switch (a) {
//   case a === 1: //Value of condition
//     console.log(1);
//     break;
//   case a == 2:
//     console.log(2);
//     break;
//   case a==3:
//     console.log(3);
//     break;
//   default:
//     console.log('No value matched');
//     break;
// }

// while(true){
//   console.log('a')
// }

//Functions
// Sometimes we want to perform same actions in diffrent places in our JS file
// You can pass params or arguments inside of functions

// This is function declaration
// function func1() {
//   console.log('Function 1 called');
// }

// // func1() //() the function is initialised.

// let func2 = function() {
//   console.log('Function 2 called')
// }

// // func2()

// let func3 = () => {
//   console.log('Function 3 called')
// }

// func3()

// const sum = function(a, b = 2 , c) {
//   return a+b+c
// };

// console.log(sum(2,5))

// console.log(sum(1,2))

//Arrow functions provide single line returns
// var func1 = function() {
//   return "Func1"
// }

// function func1() {
//   return "Func1"
// }

// let num = 20
// var func1 = (a, b) => {
//   if(a == 2){
//     return;
//   }

//   if(a == 7){
//     return;
//   }
//   console.log('Line 230 called')
//   return a + b;
// };

// var func1 = (a, b) => a + b+ num;

// console.log(func1(1, 2));

// const str = "This is an example string";
// const str2 = "This is another string"

// const firstchar = str.charAt(0)
// console.log(firstchar)

// console.log(str.charAt(str.length - 2));

// const username = "Sam";
// const userage = 20;
// const address = "Delhi"

// console.log(
//   username + " age is " + userage + " and he lives in " + address
//   )

// console.log(
//   `${username} age is ${userage} and he lives in '${address}' `
// );

// const str = "This is an example string";

// const substring = str.substring(2,8) // start index and end index

// console.log(substring);

// const substring2 = str.substr(2, 8) // start index and length

// console.log(substring2);

// const substring3 = str.substring(2,8)
// const substring3 = str.slice(1,-2)

// console.log(substring3)

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// // console.log(str.substring(str.length - 1, str.length));
// function reverseString(str) {
//   let strReverse = "";
//   // for (let i = str.length; i >= 0; i--) {
//   //   strReverse += str.charAt(i);
//   // }
//   // return strReverse;

//   // if (str && str.length <= 1) {
//   //   strReverse += str;
//   // } else {
//   //   reverseString();
//   // }
//   if (str && str.length <= 1) {
//     strReverse += str.substring(str.length - 1, str.length);
//     return 
//   } else{
//     strReverse += str.substring(str.length - 1, str.length);
//     reverseString(str.substring(0,str.length-1))
//   }

// }

// console.log(reverseString(str, str.length));
// // console.log(reverseString("Hello World"));


// const str = "    This is an example string    ";


// console.log(str.trimEnd())




// const message2 = "Hey how are you";

// console.log(message2.split(" "));

// const splitString = message2.split(" ");

// console.log(splitString)
// console.log(splitString[1])


const arr = [1,2,3];
console.log(arr.toString());

const message = "Hey! how are you? Where are you";

const splitString = message.split("!")

console.log(splitString[1].split("?")[1])

console.log(message.split('!')[1].split("?")[1]);


// console.log(message.replaceAll("are", "is"))


console.log(message.indexOf("h"));



console.log(arr.join(".."))


// Arrays in JS
// Collection of elements

// const arr = ["C", "C++", "Java", "Python", "HTML", "JavaScript"];

// arr.pop() // Removes from last index
// arr.push("Node") // Adds to last index or at last

// arr.shift(); // TO remove at the start
// arr.unshift("PHP"); // To add at very start
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (var index in arr) {
//   console.log(index);
// }

// for (var elem of arr) {
//   console.log(elem);
// }

// // ForEach method
// // forEach does not return anything

// arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
// arr2.forEach((elem, index) => {
//   console.log(elem + 2);
// });

// Map always return a new array
// const newArr = arr2.map((elem, index) => {
//   if(elem == 2) {
//     return 2*2
//   }
//   return elem * 3
// })

// const newArr = arr2.map((elem) => elem * 3);
// // console.log(arr2)
// console.log(newArr);

// // Filter
// // Filter outs the values based on some condition
// // Also it return new arr

// const evens = arr2.filter((elem) => elem % 2 != 0);
// console.log(evens);


// console.log(arr2.filter((elem) => elem == 2));

// //find
// console.log(arr2.find((elem) => elem / 2 == 2 ));


// //findIndex
// console.log(arr2.findIndex((elem) => elem == 10 ));


// // includes
// console.log(arr2.includes(12));

// // some
// console.log(arr2.some((elem) => elem / 2 == 2 || elem / 2 == 3 ));

// //every 
// console.log(arr2.every((elem) => typeof elem == "number"));


// const arr = ["C", "C++", "Java", "Python", "HTML", "JavaScript"];


// //Splice is used to remove elem and add elements in arr
// // Splice chnages the original array

// // ( index , No.of elem to be removed, ... new elements)
// // arr.splice(1, 3)


// // console.log(arr)


// // Slice is used to get the removed elements
// // Slice does not change the original array

// console.log(arr.slice(2));




const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

console.log(arr2.reduce((prev, curr) => {
  console.log(prev + ' & ' + curr);
  return prev + curr
}, 0))


// const arr = [[1,2],[3,4], [5,6,7]]

// console.log(arr);
// console.log();

// arr.flat().forEach(e => console.log(e))

// for( var i of arr){
//   for( var j of i){
//     console.log(j)
//   }
// }

// for( var i =0 ;i <arr.length ; i++){
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// const arr2 = [1,2,3,4];

// for(var i of arr2){
//   console.log(i);
// }

// const obj = {
//   username: "Sam",
//   age: 20,
//   isAdult: true,
//   hobbies: ["Singing", "dancing"],
//   address: {
//     houseDetails: {
//       houseNumber: 50,
//       street: "L"
//     },
//     city: "Delhi"
//   },
//   sayHello: function (name, city) {
//     console.log(this);
//     console.log(
//       `Hello ${name} ${this.age} lives in ${city}`);
//   }
// };

// obj.sayHello("Aman", "mumbai");
// const sayHello = function() {
//   console.log('Hello');
// }

// sayHello()

// console.log(obj["user name"]);
// console.log(obj["age"]);
// console.log(obj.age);
// // console.log(obj.hobbies);

// console.log(obj.address.houseDetails.houseNumber);
// console.log(obj.address.houseDetails.street);

// obj.hobbies.push("Football")
// console.log(obj.hobbies[2]);

// const obj = {
//   name : "Sam",
//   age: 30,
//   userInfo: function() {
//     console.log(
//       `${this.name} is ${this.age} years old`)
//   }
// }

// // obj.userInfo()

// const obj2 = Object.create(obj)
// // obj2.name = "Tom",
// // obj2.age = 20
// obj2.userInfo()

// const obj3 = {
//   name: "ABC",
//   age: 30
// };

// const info = {
//   name: "ABC",
//   age: 40
// };

// const address = { city: "Delhi" };

// const obj4 = Object.assign({}, info, address);

// console.log(obj3);
// console.log(obj4);

// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));

// Object.entries(obj4).forEach((elem, i) => {
//   console.log(elem[0]);
//   console.log(obj4[elem[0]]);
// });


// const info = {
//   name: "XYZ",
//   age:70,
// };

// // You can not add or update object
// Object.freeze(info);
// info.city= "delhi"


// info.name = "ABC";
// console.log(info);


// const info2 = {
//   name: "XYZ",
//   age:70,
// };


// // Seal allows you to update an object but not add anything
// Object.seal(info2)
// info2.name = "ABC"
// info2.city= "delhi"

// console.log(info2)


// const obj = {
//   username: "SAM",
//   age: 10
// }

// // obj.address = "Delhi"

// // Spread operator

// console.log({...obj, address:"Delhi", a:1, b:2});

// const obj2 = {...obj, hobby:"Singing"}
// console.log(obj2)

// // console.log({...obj2, address:"Delhi", a:1, b:2});

// const arr = [1, 2, 3, 4];

// const arr2 = [...arr, 5, 6, 7, 8, 9, 10];

// console.log(arr2);

// function test(a, b, c, ...args) {
//   console.log(args);
//   console.log(arguments[1]);
// }

// test(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// arguments = [1, 2, 3, 4, 5, 6];

// const arr = ["Apple", "Mango", "Pear", "Banana", "Kiwi" ];

// //destructuring
// const [ apple, mango, third, ...fruits ] = arr

// console.log(apple, mango)
// console.log(fruits);

// const name = obj.username;
// console.log(name)

// const { username, age, ...info } = obj;
// console.log(username, age)

// console.log(info);

// const obj = {
//   username: "SAM",
//   age: 10,
//   address: {
//     city: "Delhi",
//     houseNumber: 50,
//     locality: {
//       street: 10,
//       landmark: "XYZ"
//     }
//   }
// };

// console.log(obj.address);
// console.log(obj.age);


// const {
//   age,
//   address,
//   address: {
//     city,
//     houseNumber,
//     locality: { landmark, street }
//   }
// } = obj;

// // const {city, houseNumber} = obj.address;
// console.log(address);
// console.log(city);
// console.log(city);
// console.log(houseNumber);
// console.log(houseNumber);

// console.log(landmark);
// console.log(street);



const obj = {
  username: "SAM",
  age: 10,
  address: {
    city: "Delhi",
    houseNumber: 50,
    // locality: {
    //   street: 10,
    //   landmark: "XYZ"
    // }
  }
};


// console.log(obj.address);
console.log(obj.address.locality && obj.address?.locality.street)
console.log(obj?.address?.locality?.street) // undefined


console.log('line executed')
