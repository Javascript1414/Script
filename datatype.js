let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

let d=15
let e=12.5
console.log(d+e)

console.log(10 / 0);  // Infinity
console.log(-10 / 0); // -Infinity
console.log("hello" * 2); // NaN

let name = "Karan";
let city = "Delhi";
console.log(city)

let text = "hello world";

console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"

let sentence = "I love JavaScript";

console.log(sentence.includes("Java")); // true
console.log(sentence.includes("Python")); // false

let word = "Programming";

console.log(word.slice(0, 6));
console.log(word.slice(3));  

let name1 = "Soumo";
let age = 22;

let message = `আমার নাম ${name1} এবং আমার বয়স ${age} বছর।`;

console.log(message);
// Output: "আমার নাম Alice এবং আমার বয়স 25 বছর।"

let f = 10;
let g = 5;

console.log(`f + g = ${f + g}`); 
// Output: "f + g = 15"

let text1 = `এটি
একটি
মাল্টিলাইন
স্ট্রিং।`;

console.log(text1);

let isPass = true;
  let isFail = false;
console.log(isPass)// true
console.log(isFail)//false

let i = 10;
let j = 20;

console.log(i > j); // false
console.log(i < j); // true
console.log(i == 10); // true
console.log(j != 20); // false

let x;
console.log(x); // undefined
console.log(typeof x);

let person = null;
console.log(person); 

let user = {
  name: "Alice",
  age: null
};

console.log(user.age);
console.log(user.name)

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); // 123456789012345678901234567890n

let aa = 9007199254740991n; 
let bb = 10n;

console.log(aa + bb); // 9007199254741001n
console.log(aa * bb); 

let num = 10;
let big = 20n;

console.log(BigInt(num) + big);

let user1 = {};
let id = Symbol("userid");

user1[id] = 12345;
console.log(user1[id]); // 12345

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2);


let sym11 = Symbol.for("id");
let sym22 = Symbol.for("id");

console.log(sym11 === sym22);