var op = "";
var operand1 = 0;
var clearOnNextPress = false;

function press(value) {
    var display = document.getElementById("display");
    if (display.innerText == "0" || clearOnNextPress == true) {
        display.innerText = value;
        clearOnNextPress = false;
    }
    else {
        display.innerText += value;
    }
}

function setOP(opValue) {
    var display = document.getElementById("display");
    op = opValue;
    operand1 = parseFloat(display.innerText);
    clearOnNextPress = true;
}

function calculate() {
    var display = document.getElementById("display");
    var operand2 = parseFloat(display.innerText);
    var result = 0;
    switch (op) {
        case "/":
            result = operand1 / operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "+":
            result = operand1 + operand2;
            break;
    }
    display.innerText = result;
}

function clr(){
    var display = document.getElementById("display");
    display.innerHTML = 0;
    operand1 = 0;
}
