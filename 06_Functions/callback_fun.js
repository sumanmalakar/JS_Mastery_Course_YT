// console.log("we are learning callback function")

const print = () =>{
    console.log("printing press")
}
const print2 = () =>{
    console.log("printing press 2")
}

const test = (name,callback) =>{
   console.log('inside the test function ',name)
   callback();
}

test('suman',print2)