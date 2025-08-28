// ================================
// Part 1: Variable Declarations & Conditionals
// ================================
let age = 20;
let name = "Alice";

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// ================================
// Part 2: Custom Functions
// ================================

// Function 1: Greet a user
function greetUser(username) {
  return "Hello, " + username + "!";
}

// Function 2: Calculate the square of a number
function square(num) {
  return num * num;
}

console.log(greetUser("Bob")); // Example call
console.log("Square of 5 is:", square(5));

// ================================
// Part 3: Loop Examples
// ================================

// For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop iteration:", i);
}

// While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// ================================
// Part 4: DOM Interactions
// ================================

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "The text has been changed!";
});

// 2. Add a new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
});

// 3. Change style of an element
document.getElementById("title").style.color = "blue";
