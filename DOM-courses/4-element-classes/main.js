//Use the same template of index.html that before, to implement this code

const listItems = document.querySelectorAll("li");
//console.log(listItems);
listItems.forEach(function (el, index) {
  //console.log(el.className);
  el.textContent = el.className ? el.className : "No Class";
  el.classList.add("test");
  el.classList.toggle("test1");
  //el.classList.remove('first');
  el.classList.replace("first", "test3");
  console.log(el.classList.contains("first"));
  el.classList.add("test4");
});
