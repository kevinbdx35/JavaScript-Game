//Use the same template of index.html that before, to implement this code

const el = document.querySelector("div.first");
console.log(el); //el.children

for (let i = 0; i < el.children.length; i++) {
  //console.log(el.children[i].textContent);
  //console.log(el.children[i]);
}

for (let i = 0; i < el.childNodes.length; i++) {
  //console.log(el.childNodes[i].textContent);
  //console.log(el.childNodes[i]);
}

el.childNodes.forEach(function (ele, index) {
  console.log(ele);
});

/******* Traversing *******/
//el.parentElement;
//el.parentNod;
//el.nextElementSibling;
//el.previousElementSibling;
//el.previousSibling;