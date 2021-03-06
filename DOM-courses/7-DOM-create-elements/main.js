//Use the same template of index.html that before, to implement this code

const temp = document.createElement("div");
temp.style.color = "red";
temp.id = "test";

console.log(temp);

const tempText = document.createTextNode("Hello World 2!");
temp.appendChild(tempText);
console.log(temp);
temp.textContent = "Hello World";

const myID = document.querySelector("#myID");
myID.appendChild(temp);

const div = document.createElement("div");
div.style.backgroundColor = "blue";
div.id = "newOne";
div.style.padding = "35px";
div.style.fontSize = "45px";
//div.textContent = "Hello";

const textInside = document.createTextNode("Hello World!");
div.appendChild(textInside);
document.body.appendChild(div);

console.log(div);

const h1 = document.querySelector("h1");
document.body.insertBefore(div, h1);
