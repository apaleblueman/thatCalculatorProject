//global variables

firstNumber = '';
secondNumber = '';
operator ='';
let outputHere = document.querySelector(".output");

populateDisplay();
handleOperatorClicks();
handleEndOperations();
//functions

function populateDisplay(){
      
    let buttonClicked = document.querySelector(".numpad");

    buttonClicked.addEventListener('click', (e)=>{
        let target = e.target;
        let buttonValue = target.textContent;
        if((outputHere.textContent.length)<9){
        if(buttonValue.length <2){
            if(outputHere.textContent === String(firstNumber)){
                outputHere.textContent = buttonValue    

            }
            else{
                outputHere.textContent += buttonValue;
            }
        }}


    });
}

function handleOperatorClicks(){
    let operators = document.querySelector(".operators");
    operators.addEventListener('click', (e)=>{
        
        let target = e.target;
        if(!firstNumber && !operator){
            firstNumber = outputHere.textContent;
            operator = target.id; 
            
        }
        else if(firstNumber && operator && !secondNumber){

            secondNumber = outputHere.textContent;
            outputHere.textContent = '';
            // console.log("evaluate the result!put it in display and clear all global vars execpt operator")
            
            firstNumber = evaluate(firstNumber, operator,secondNumber);
            outputHere.textContent = firstNumber;
            operator = target.id;
            secondNumber = '';
        }
        else if(firstNumber && !operator && !secondNumber)
        {
            operator = target.id;
        }

    })
}

function handleEndOperations(){
    let endOps = document.querySelector(".end-operations");
    endOps.addEventListener('click', (e)=>{
        let target = e.target;
        if(target.id === "equal"){
            secondNumber = outputHere.textContent;
            outputHere.textContent = '';
            firstNumber = evaluate(firstNumber, operator,secondNumber);
            outputHere.textContent = firstNumber;
            operator = '';
            secondNumber = '';
        }
        else if(target.id === "clear"){
            firstNumber = '';
            secondNumber = '';
            operator = '';
            outputHere.innerHTML = "&nbsp";
        }
    })
}
//operate
function evaluate(firstNum, operator, secondNum) {
    switch(operator) {
        case 'add':
            return add(firstNum, secondNum);
        case 'subtract':
            return subtract(firstNum, secondNum);
        case 'multiply':
            return multiply(firstNum, secondNum);
        case 'divide':
            if (secondNum != 0){
                return divide(firstNum, secondNum).toFixed(2);
            }
            else{
                return divide(firstNum, secondNum);
            }
        default:
            return "Invalid operator";
    }
}


//calculations

function add(firstNum, secondNum){
    return Number(firstNum) + Number(secondNum);
}

function subtract(firstNum, secondNum){
    return Number(firstNum) - Number(secondNum);
}

function multiply(firstNum, secondNum){
    return Number(firstNum) * Number(secondNum);
}

function divide(firstNum, secondNum){
    if(secondNum!=0){
        return Number(firstNum) / Number(secondNum);
    }
    else{
        return "Infinity";
    }
}