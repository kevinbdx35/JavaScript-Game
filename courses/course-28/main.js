//Use the same template of index.html that before like in course-1

const myArray = ["a", "Hello", 4, 8, 2, "World", "JavaScript", "Course", 99, 1];
const myArray2 = [5, 6, 7, 4, 12, 8, 130, 44];

//console.log(myArray);
myArray.sort();
//console.log(myArray);
myArray.reverse();
//console.log(myArray);

if (myArray.indexOf("Hello") !== -1) {
  console.log("Item Found");
} else {
  console.log("Not Found");
}

let newArray = myArray.concat(myArray2);
console.log(newArray);

let found = myArray2.find(function (el) {
  console.log(el);
  return el > 100;
});
console.log(found);
