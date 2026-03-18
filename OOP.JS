const person = {
                        name: "Alice",
                        age: 30,
                        address:"howrah",
                        mobile:9999999999
                         };
  console.log(person)
  console.log(person.name) 
  console.log(person.address)
  console.log(person.age)  
  
  let car = {
  brand: "Tata",
  model: "Nexon",
  price: 800000
};

car.price = 900000;

console.log(car);

let person1 = {
  name: "Soumyajit",
  age: 25
};

person1.city = "Howrah";

console.log(person1);

class Person {
                       constructor(name, age) {
                       this.name = name;
                       this.age = age;
                      }};
                      let a=new Person("Soumo",25)
                      let b=new Person("Sunny",22)
 console.log(a)
 console.log(a.name)
 console.log(b)



 class Address{
    constructor(V1,P2,P3,D4){
        this.VILL=V1;
        this.POST=P2;
        this.PS=P3;
        this.DIST=D4;
    }
}

const Address1= new Address("Bahirtafa","Jadurberia","Uluberia","Howrah");
console.log(Address1.VILL)
console.log(Address1.POST)
console.log(Address1.PS)
console.log(Address1.DIST)


class personal{
    constructor(fname,Mname,Lname){
        this.First=fname
        this.Middle=Mname
        this.Lname=Lname
    }
}
const soumo=new personal("Soumo","Chandra","das")
console.log(soumo)
console.log(soumo.First)
console.log(soumo.Middle)
console.log(soumo.Lname)