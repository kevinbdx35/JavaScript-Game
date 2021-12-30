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

console.log(theList[6].score);
console.log(theList[6]["score"]);
console.log(theList[7][1]);