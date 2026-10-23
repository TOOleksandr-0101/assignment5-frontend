let studentName = "Alexandr";
let studentGroup = "SE-2528";

console.log("Student Name: " + studentName);
console.log("Group: " + studentGroup);

alert("Hello, sad and boring World! :(");

let alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", function() {
    alert("Salam, World!");
});

let myString = "JavaScript";
let myNumber = 67;
let myBoolean = true;

console.log("String variable:", myString);
console.log("Number variable:", myNumber);
console.log("Boolean variable:", myBoolean);

let num1 = 20;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

let greeting = "Hello, " + studentName + ", you have " + myNumber + " points in " + myString + ".";
console.log(greeting);

document.getElementById("varOutput").textContent = "String: " + myString + " | Number: " + myNumber + " | Boolean: " + myBoolean;

let mathList = document.getElementById("mathOutput");
mathList.innerHTML = `
    <li class="list-group-item">20 + 5 = ${sum}</li>
    <li class="list-group-item">20 - 5 = ${difference}</li>
    <li class="list-group-item">20 * 5 = ${product}</li>
    <li class="list-group-item">20 / 5 = ${quotient}</li>
`;

document.getElementById("concatOutput").textContent = greeting;
