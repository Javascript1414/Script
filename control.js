let marks = 75;

if(marks >= 80){
   console.log("A Grade");
}
else if(marks >= 60){
   console.log("B Grade");
}
else{
   console.log("C Grade");
}




let age=20;

if (age<18){
    console.log("You are a teenager");
}

else if(age>=18 && age<=25){
    console.log("You are a youth person");
}

else
    console.log("You are an adult person");





let age1 = 20;
let hasID = true;

if(age1 >= 18){
   if(hasID){
      console.log("You can enter");
   }else{
      console.log("ID required");
   }
}else{
   console.log("You are minor");
}

let age2 = 25;
let hasLicense = true;
if (age2 >= 18) {
    console.log("Adult hai");
    if (hasLicense) {          // ❗ NESTED IF
        console.log("License hai - drive kar sakte ho");
    } else {
        console.log("Adult hai par license nahi hai");
    }
    } else {
    console.log("Minor hai");
    }  
    
    
    
    
    let age4 = 20;

let result = age4 >= 18 ? "Adult" : "Minor";

console.log(result);

let a = 10;
let b = 20;

console.log(a > b ? "a is greater than b" : a < b ? "b is greater than a" : "a and b are equal");


for (let i = 1; i <= 5; i++) {
console.log("Iteration:", i);
}

for(let i = 2; i <= 10; i+=2){
   console.log("Loops for use=",i);
}

let i = 1;

while(i <= 5){
   console.log(i);
   i++;
}

let count = 1;
while (count <= 3) {
console.log("Count:", count);
count++;
}


let n = 0;
do {
console.log("Number:", n);
n++;
} while (n < 3);

let ii = 10;

do{
   console.log(ii);
}while(ii < 5);

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; 
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; 
}
  console.log(i);
}

for(let i = 1; i <= 10; i++){
   if(i % 2 == 0){
      continue;
   }
   console.log(i);
}


function greet(){
   console.log("Hello World");
}

greet();

function add(a,b){
   return a + b;
}

let resultt = add(4,6);
console.log(resultt);