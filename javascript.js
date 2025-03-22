// Add function
function add(input1, input2){
    return input1 + input2
}

// Subtract function
function subtract(input1, input2){
    return input1 - input2
}

// Mulitple function
function multiple(input1, input2){
    return input1 * input2
}

// Divide function
function divide(input1, input2){
    return input1 / input2
}

// Function for calculations
function operate(nr1, nr2, operator){
    if(operator == "+"){
        return add(nr1, nr2)
    }else if(operator == "-"){
        return subtract(nr1, nr2)
    } else if(operator == "*"){
        return multiple(nr1, nr2)
    } else if(operator == "/"){
        if(nr2 == 0){
            return 0
        } else{
            return divide(nr1, nr2)
        }
        
    }
}

// Function for counting decimals
function count(numb) {
    if (Number.isInteger(numb)) {
       return 0;
    } else {
       return numb.toString().split('.')[1].length;
    }
}

// Declaring empty variables
let nr1
let nr2
let operator
let sum
let stage = "start"
let firstNrFilled = false
let decimals
let inputCount = 1

// Number button press function
function nrPress(nr){
    if(firstNrFilled == false){
        display.textContent = nr
        firstNrFilled = true
    }else if(firstNrFilled == true){
        if (inputCount < 11) {
            display.textContent += nr
            inputCount += 1
        }
        
    }
}

// Creating buttons
// Number buttons
let btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", function() {
    nrPress(1)
})
let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", function() {
    nrPress(2)
})
let btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", function() {
    nrPress(3)
})
let btn4 = document.querySelector("#btn4")
btn4.addEventListener("click", function() {
    nrPress(4)
})
let btn5 = document.querySelector("#btn5")
btn5.addEventListener("click", function() {
    nrPress(5)
})
let btn6 = document.querySelector("#btn6")
btn6.addEventListener("click", function() {
    nrPress(6)
})
let btn7 = document.querySelector("#btn7")
btn7.addEventListener("click", function() {
    nrPress(7)
})
let btn8 = document.querySelector("#btn8")
btn8.addEventListener("click", function() {
    nrPress(8)
})
let btn9 = document.querySelector("#btn9")
btn9.addEventListener("click", function() {
    nrPress(9)
})

let btn0 = document.querySelector("#btn0")
btn0.addEventListener("click", function() {
    nrPress(0)
})

// Clear button
let clearBtn = document.querySelector("#btnClear")
clearBtn.addEventListener("click", () => {
    display.textContent = 0
    nr1 = undefined
    nr2 = undefined
    operator = undefined
    sum = undefined
    firstNrFilled = false
    stage = "start"
    inputCount = 1
})

// Function for +, -, /, * operator buttons
function operatePress(input){
    if (stage == "start"){
        operator = input
        nr1 = parseFloat(display.textContent, 10)
        stage = "nr1Operator"
    }
    else if (stage == "nr1Operator"){
        nr2 = parseFloat(display.textContent, 10)
        sum = operate(nr1, nr2, operator)
        decimals = count(sum)
        if(decimals >= 5){  
            sum = sum.toFixed(5)
        }
        if(sum > 99999999999){
            display.textContent = "Error"
            nr1 = undefined
            nr2 = undefined
            operator = undefined
            sum = undefined
            firstNrFilled = false
            stage = "start"
            inputCount = 1
            
        } else{
            display.textContent = sum
            operator = input
            nr1 = sum
        }

    }
    firstNrFilled = false
    inputCount = 1                
}

// Operator buttons
let btnAdd = document.querySelector("#btnPluss")
btnAdd.addEventListener("click", function() {
    operatePress("+")
})
let btnSubtract = document.querySelector("#btnSubtract")
btnSubtract.addEventListener("click", function() {
    operatePress("-")
})
let btnDivide = document.querySelector("#btnDivide")
btnDivide.addEventListener("click", function() {
    operatePress("/")
})
let btnMultiply = document.querySelector("#btnMultiply")
btnMultiply.addEventListener("click", function() {
    operatePress("*")
})

// Creating sum button, then attaching sum function to it.
let btnSum = document.querySelector("#btnSum")
btnSum.addEventListener("click", () => {
    if(stage == "nr1Operator"){
        nr2 = parseFloat(display.textContent, 10)
        sum = operate(nr1, nr2, operator)
        decimals = count(sum)
        if(decimals >= 5){  
            sum = sum.toFixed(5)
        }

        if(sum > 99999999999){
            display.textContent = "Error"
            nr1 = undefined
            nr2 = undefined
            operator = undefined
            sum = undefined
            firstNrFilled = false
            stage = "start"
            inputCount = 1
        }
        else{
            display.textContent = sum
            stage = "start"
            nr2 = undefined 
        }

     
    }
    firstNrFilled = false
    inputCount = 1
})

// Creating comma button, then attaching comma function to it.
let btnComma = document.querySelector("#btnComma")
btnComma.addEventListener("click", () => {
    if(display.textContent.indexOf('.') == -1){
        display.textContent += "."
        firstNrFilled = true
    }
})

// Creating display
let display = document.querySelector(".display")



