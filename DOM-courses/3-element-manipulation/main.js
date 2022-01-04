//Use the same template of index.html that before, to implement this code

const temp = document.querySelector("h1");
temp.innerText = "Hello";
temp.textContent = "Hey!";
temp.id = "temp1";
document.getElementById("temp1").style.backgroundColor = "red";
temp.remove();

const links = document.querySelectorAll("a");
links.forEach(function (el) {
  console.log(el.getAttribute("href"));
  el.setAttribute("href", "http://www.google.com");
});

const listItems = document.querySelectorAll("li");
listItems.forEach(function (item, cnt) {
  item.id = "li" + cnt;
  item.textContent = "list item #" + cnt;
  if (item.getAttribute("class")) {
    console.log(item.getAttribute("class"));
  }
});
