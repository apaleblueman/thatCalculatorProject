//global variables
let firstNumber = '';
let secondNumber = '';
let operator = '';

let display = document.querySelector(".output");

main();


//main function
function main(){
    let numbers = document.querySelector(".numpad"); 
    numbers.addEventListener('click', (event)=>{
        let target = event.target;        
        populateDisplay(display, target.textContent);
    })

    let operators = document.querySelector(".operators");
    //if opereator is clicked save display value in first number and 
    //save clicked operator in operator variable
    operators.addEventListener('click', (e)=>{
        let target = e.target;
    
        if(!operator){

            firstNumber = display.textContent;
            display.textContent = ''
            operator = target.id;

        }
        else if(operator){
                
                secondNumber = display.textContent;
                display.textContent = ''
                firstNumber = operate(firstNumber, operator, secondNumber);
                secondNumber = '';
                populateDisplay(display, firstNumber)
                operator = target.id
        }
    })

    let results = document.querySelector(".end-operations");
    results.addEventListener('click', (e)=>{
        let target = e.target;
        if(target.id === "equal"){
            secondNumber = display.textContent;
            display.textContent = ''
            firstNumber = operate(firstNumber, operator, secondNumber);
            secondNumber = '';
            populateDisplay(display, firstNumber)
            operator = ''
        }
        else if(target.id === "clear"){
            firstNumber = '';
            secondNumber = '';
            operator = '';
            display.textContent = '';
            console.log("clear everyoone")
        }
    })
}
//functions


//populate display
function populateDisplay(display, content){
    if (display.textContent === String(firstNumber)) {
        // If the display shows the result of the previous operation,
        // clear it before appending the new number
        display.textContent = content;
    } else {
        // Otherwise, append the number to the display
        display.textContent += content;
    }
}

//operate
function operate(firstNumber, operator, secondNumber){
    switch(operator){
        case 'add':
            return add(firstNumber, secondNumber)
        case 'substract':
            return substract(firstNumber, secondNumber)
        case 'multiply':
            return multiply(firstNumber, secondNumber)
        case 'divide':
            return divide(firstNumber, secondNumber)
    }
}



//calculations

function add(firstNum, secondNum){
    return Number(firstNum) + Number(secondNum);
}

function substract(firstNum, secondNum){
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