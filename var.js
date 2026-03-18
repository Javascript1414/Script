var a=65
var b=95
var b=98
var b=7

console.log(a+b)

var a = 10;

function test() {
  console.log(a);
}

test();        // 10
console.log(a); // 10   


function test() {
  var b = 20;
  console.log(b);
}

test();        // 20
console.log(b); // ❌ Error

function test() {
  if (true) {
    var a = 10;
  }
  console.log(a); // ✅ 10
}
test();
