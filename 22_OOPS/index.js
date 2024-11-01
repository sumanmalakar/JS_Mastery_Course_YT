// class Car {
//   constructor(brandName, modal, price) {
//     this.brandName = brandName;
//     this.modal = modal;
//     this.price = price;
//   }
//   displayInfo = () => {
//     console.log(`Car brandName = ${this.brandName},
//             Modal = ${this.modal} , Price = ${this.price}`);
//   };
// }

// const myCar = new Car("Toyota","fortuner",'30L')

// myCar.displayInfo()

// Encapsulation
// Inheritance
// Polymorphism
// Abstraction

// class Counter{
//     constructor(){
//         let count = 0;

//         this.increment = () =>{
//             count++;
//             console.log(count)
//         }

//         this.decrement = () =>{
//             count--
//             console.log(count)
//         }
//     }

// }
// const counter1 = new Counter();
// counter1.increment()
// counter1.increment()
// counter1.decrement()

// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     speak = () =>{
//         console.log(`${this.name} make a sound`)
//     }
// }
// class Dog extends Animal{
//     display = () =>{
//         console.log("dog wala method")
//     }
// }
// const dog = new Dog('Buddy')

// dog.speak();
// dog.display();