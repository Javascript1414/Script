let x=50;
let y=60;
console.log(x+y)
console.log(x-y)
console.log(x/y)
console.log(x*y)
console.log(x%y)

function test() {
  if (true) {
    let b = 20;
  }
  console.log(b); // ❌ Error
}
test();

function test() {
  let a = 10;
  console.log(a); // ✅ 10
}

test();
console.log(a);   

function test() {
  let a = 10;
  console.log(a); // 10
  return a;
}

let result = test();
console.log(result); // 10 ✅

function test() {
  const x = 5;
  console.log(x); // ✅
}

test();
console.log(x);   // ❌ Error


function test() {
  if (true) {
    const b = 20;
    console.log(b); // 20 ✅
  }
}
test();
