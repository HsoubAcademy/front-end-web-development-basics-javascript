$(document).ready(function(){
    // 5 + 5
    var firstOperand = null;
    var secondOperand = null;
    var operator = null;
    var isPending = false;

    function calculate(){
        firstOperand = Number(firstOperand);
        secondOperand = Number(secondOperand);
        if (operator === "+") {
            return firstOperand + secondOperand;
        } else if(operator === "-") {
            return firstOperand - secondOperand;
        } else if (operator === "×") {
            return firstOperand * secondOperand;
        } else if (operator === "÷") {
            return firstOperand / secondOperand;
        }
    }
});