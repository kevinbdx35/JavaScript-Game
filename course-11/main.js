let userAge = prompt("How old are you?");
console.log(userAge);
userAge = Number(userAge);

let message = userAge >= 18 ? "allow" : "deny";
console.log(message);

let userMember = true;
if (userAge >= 18 && userMember) {
  console.log("Yes allow");
} else {
  console.log("No deny");
}
