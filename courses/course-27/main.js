//Use the same template of index.html that before like in course-1

const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  {
    test: "one",
    score: 55,
  },
  ["one", "two"],
];

let temp = Array.isArray(theList);
theList[1] = "Hello World";
temp = theList.indexOf("Laurence");
theList.push("Pushed");//add to end
theList.pop();//remove last item
theList.shift();//remove first item
theList.unshift("Unshift");//add to front of array
theList.splice(1,2);
console.log(theList);
console.log(temp);