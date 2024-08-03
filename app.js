var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var AddBtn = document.getElementById("Addition");
var SubBtn = document.getElementById("subtraction");
var MultBtn = document.getElementById("Multiplication");
var DivBtn = document.getElementById("Divission");
var printResult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
function subtractionNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", subtractionNumbers);
function MultiplicationNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultiplicationNumbers);
function DivissionNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
DivBtn.addEventListener("click", DivissionNumbers);
