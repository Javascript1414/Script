let person = {
  name: "Soumo",
  age: 22
  
}

console.log(person.name);  
console.log(person.age);   

let car = {
  brand: "Toyota"
};

car.model = "Corolla"; // নতুন property যোগ
console.log(car.model);

let book = {
  title: "JavaScript Basics",
  pages: 200
};

book.pages = 250; // property পরিবর্তন
console.log(book.pages);

let calculator = {
  add: function(a, b) {
    return a + b;
  }
};

console.log(calculator.add(5, 10)); // 15


let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
                                                                                    };
let fruits1 = ["Apple", "Banana", "Mango"];

console.log(fruits1[0]); // Apple
console.log(fruits1[1]); // Banana
console.log(fruits1[2]); // Mango

function greet() {
  console.log("Hello World");
}

greet();

function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

let num=10;
console.log(typeof num)

let sit="Soumo"
console.log(typeof sit)

let istrue= true;
console.log(typeof istrue)

let un
console.log(typeof un)

let person1 = null
console.log(typeof person1)

let sym=Symbol("id")
console.log(typeof sym)

let big=25545454684654654n
console.log(typeof big)