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

// Declaring empty variables
let nr1
let nr2
let operator
let sum
let stage = "start"
let firstNrFilled = false

function operate(nr1, nr2, operator){
    if(operator == "+"){
        return add(nr1, nr2)
    }else if(operator == "-"){
        return subtract(nr1, nr2)
    } else if(operator == "*"){
        return multiple(nr1, nr2)
    } else if(operator == "/"){
        return divide(nr1, nr2)
    }
}

// Number button press function
function nrPress(nr){
    if(firstNrFilled == false){
        display.textContent = nr
        firstNrFilled = true
    }else if(firstNrFilled == true){
        display.textContent += nr
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
        display.textContent = sum
        operator = input
        stage = "nr1nr2Operator"
    }


    firstNrFilled = false                
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

let btnSum = document.querySelector("#btnSum")
btnSum.addEventListener("click", () => {
    if(stage == "nr1Operator"){
        nr2 = parseFloat(display.textContent, 10)
        sum = operate(nr1, nr2, operator)
        display.textContent = sum
        stage = "start"
        nr2 = undefined      
    }

    firstNrFilled = false

        
    //     nr2 = parseFloat(display.textContent)
    //     sum = operate(nr1, nr2, operator)

    //     if(typeof sum == "undefined"){
    //         display.textContent = 0
    //     }else{
    //         display.textContent = sum
    //     }

    // }
})

let btnComma = document.querySelector("#btnComma")
btnComma.addEventListener("click", () => {
    if(display.textContent.indexOf('.') == -1){
        display.textContent += "."
    }
})

// Creating display
let display = document.querySelector(".display")



