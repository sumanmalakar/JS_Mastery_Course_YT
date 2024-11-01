// console.log("we are learing function scope...")

// global scope
// let globalVar = 10;

// let display = () => {
//   let globalVar = 10;

//   console.log("inside the display fun");
//   console.log("inside the function ", globalVar);
// };
// display();
// console.log(globalVar);

let blockVar = 10;
if(true){
    console.log(blockVar)
}

console.log(blockVar)