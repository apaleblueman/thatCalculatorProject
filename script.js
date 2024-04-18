//variables
let number1=0;
let number2 = 0;
let expression = [];
let display = document.querySelector(".display");
let displayValue = display.textContent;

populateDisplay()

//functions
function populateDisplay(){
    let button = document.querySelector(".keypad");
    button.addEventListener('click', (event)=>{
        let target = event.target;
        display.textContent = target.textContent;
        displayValue = display.textContent;
        expression.push(displayValue);
        });
}
//operations
function add(a, b){
    if(b!= null)
        return a + b;
    else
        return a;
}

function substract(a, b){
    if(b!= null)
        return a - b;
    else
        return a;
}

function multiply(a, b){
    if(b!= null)
        return a * b;
    else
        return a;
}
function divide(a, b){
    if(b!= null && b!==0)
        return a / b;
    else
        return "invalid";
}
//compute
function operate(num1,num2){
    
    let operator = document.querySelector(".operators");
    operator.addEventListener('click', (event)=>{
        let target = event.target;
        switch(target.id){
            case "add":
                console.log(add(num1,num2));
                break;
            case "substract":
                console.log(substract(num1,num2));
                break;
            case "multiply":
                console.log(multiply(num1,num2));
                break;
            case "divide":
                console.log(divide(num1,num2));
                break;
            case "equate":
                console.log("=");
                break;
            default:
                console.log("invalid")
                break;
        }
    });
}