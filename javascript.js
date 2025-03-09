function add(input1, input2){
    return input1 + input2
}

function subtract(input1, input2){
    return input1 - input2
}

function multiple(input1, input2){
    return input1 * input2
}

function divide(input1, input2){
    return input1 / input2
}

let nr1 = 0
let nr2 = 0
let operator = ""

function operate(nr1, operator, nr2){
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

