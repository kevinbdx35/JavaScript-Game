//Use the same template of index.html that before, to implement this code
let output = "Hello World";
let counter = 0;

welcome(output);

function welcome(para) {
  counter++;
  let temp = counter + "times run";
  console.log(para);
  console.log(temp);
}

let myNum = 50;

addTen(myNum);

function addTen(num) {
  let temp = Number(num);
  console.log(temp + 10);
}
