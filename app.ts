const number1=document.getElementById("num1")as HTMLInputElement
const number2=document.getElementById("num2")as HTMLInputElement

const AddBtn=document.getElementById("Addition")as HTMLInputElement
const SubBtn=document.getElementById("subtraction")as HTMLInputElement
const MultBtn=document.getElementById("Multiplication")as HTMLInputElement
const DivBtn=document.getElementById("Divission")as HTMLInputElement


const printResult = document.getElementById("result")as HTMLOutputElement

function AddNumbers (){
    let a= parseFloat(number1.value);
    let b= parseFloat(number2.value);
    let result= a+b;
    printResult.textContent=result.toString();
    
}
AddBtn.addEventListener("click",AddNumbers)

function subtractionNumbers (){
    let a= parseFloat(number1.value);
    let b= parseFloat(number2.value);
    let result= a-b;
    printResult.textContent=result.toString();
    
}
SubBtn.addEventListener("click",subtractionNumbers )

function MultiplicationNumbers (){
    let a= parseFloat(number1.value);
    let b= parseFloat(number2.value);
    let result= a*b;
    printResult.textContent=result.toString();
    
}
MultBtn.addEventListener("click",MultiplicationNumbers)


function DivissionNumbers (){
    let a= parseFloat(number1.value);
    let b= parseFloat(number2.value);
    let result= a/b;
    printResult.textContent=result.toString();
    
}
DivBtn.addEventListener("click",DivissionNumbers)
