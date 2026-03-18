class Student {
    constructor (name){
        this.name=name;
    }
}

class Roll_No extends Student{
    constructor (name,Address){
        super(name);
        this.Address= Address;
    
    }

}



const s1 = new Roll_No("Sudebi","Bahirtafa");
console.log(s1.name)
console.log(s1.Address)








class Animal {
    constructor(name) {
                   this.name = name;
                       };
                    }

class Dog extends Animal {
                constructor(name, breed) {
                                    super(name); 
                                    this.breed = breed;
                                };
                                };
 
let a=new Dog("Kutta","Desi Dog")
console.log(a)
console.log(a.name)




class dog{
    sound(){
        return "Bhow Bhow"
    }
}

class car{
    sound(){
        return "Car Starting"
    }
}

class bike{
    sound(){
        return "Groom Groom"
    }
}

const Labrador=new dog()
const bukadi=new car()
const bullet=new bike()
console.log(Labrador.sound())
console.log(bukadi.sound())
console.log(bullet.sound())
console.log(Labrador.sound())




class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

let d = new Dog();
let c = new Cat();

d.sound();
c.sound();