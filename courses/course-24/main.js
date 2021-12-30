//Use the same template of index.html that before like in course-1

const car = {
  color: "red",
  topSpeed: 300,
  model: "mustang",
  company: "ford",
  price: 50000,
  turnOn: function(){console.log("started")},
  drive: function(){console.log("You" + this.model + "driving")},
  works(){console.log("Working")}
};

