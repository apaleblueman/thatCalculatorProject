//global variables
let firstNumber, secondNumber;
let operator;
const operations = ["add", "substract", "multiply", "divide","equate","clear"]
const display = document.querySelector(".display");
const keys = document.querySelector(".keypad");
//main
getInput()
//functions acting in display
function getInput(){
    keys.addEventListener('click', (event)=>{
        // display.textContent = "";
        let target = event.target;
        if(!operations.includes(target.id)){
            display.textContent += target.textContent;
            
        }
        else if(operations.includes(target.id)){
        if(/*target.id === "equate"*/ firstNumber!== undefined){
                secondNumber = display.textContent;
                display.textContent = "";
                display.textContent = operate(firstNumber,"add",secondNumber);
            }
            else{
                firstNumber = display.textContent;
                display.textContent = "";
            }
        }
    })
}
//functions

function add(num1, num2){
    return num1 + num2
}
function substract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    if(num2!==0){
        return num1 / num2
    }
    else{
        return "cannot divide by zero!"
    }
}
//a function to operate on two numbers given a operator
function operate(num1,operator,num2){
    switch(operator){
        case "add":
            return add(num1, num2);
            
        case "substract":
            return substract(num1, num2);
            
        case "multiply":
            return multiply(num1, num2);
            
        case "divide":
            return divide(num1, num2);
            
        default:
            return "invalid operator"
            
    }
}