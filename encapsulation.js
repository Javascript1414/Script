class soumo {
    #name //private variable
constructor (name,address,mobile_no) {
     this.#name=name
     this.address=address
     this.mobile_no=mobile_no;
}
get(){
   return this.name=this.#name
}
set(p){
    this.#name=p
}
}
const a=new soumo("Soumo","Bahirtafa",9524136589)
console.log(a)
console.log(a.name)
console.log(a.address)
console.log(a.mobile_no)
console.log(a.get())
a.set("Aniket")
console.log(a.get())



class Student {
  #marks;   // private property

  constructor(marks) {
    this.#marks = marks;
  }

  setMarks(m) {      // method to change marks
    this.#marks = m;
  }

  getMarks() {       // method to show marks
    return this.#marks;
  }
}

let s1 = new Student(80);

s1.setMarks(90);
console.log(s1.getMarks());





class Vehicle{
constructor(name) {
      if (new.target === Vehicle) {
        throw new Error("Cannot instantiate an abstract class.");
      }
      this.name = name;
    } 
    startEngine() {
             throw new Error("Method 'startEngine()' must be   implemented.");
    }
  }
  class Car extends Vehicle {
    startEngine() {
      console.log(`${this.name}'s engine is starting... Vroom Vroom!`);
    }
  }
  // Subclass
  class Bike extends Vehicle {
    startEngine() {
      console.log(`${this.name}'s engine is starting... Zoom Zoom!`);
    }
}
const car = new Car("Toyota");
  car.startEngine(); // Output: Toyota's engine is starting... Vroom Vroom!
  
  const bike = new Bike("Yamaha");
  bike.startEngine(); // Output: Yamaha's engine is starting... Zoom Zoom!


