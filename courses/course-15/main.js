//Use the same template of index.html that before
let num1 = 100;
let num2 = 200;

//function declaration
function multiplier(a, b) {
  let temp = a * b;
  return temp;
}
console.log(multiplier(num1, num2));

//function expression
let multiplier2 = function (a, b) {
  return a * b;
};

console.log(multiplier2(num1, num2));
