//variables
let number1, number2;



//functions
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
//operation
function operate(num1, num2){
    return add(num1, num2);
}