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

    function resetCalculator(){
        firstOperand = null;
        secondOperand = null;
        operator = null;
        isPending = false;     
    }
    
    $("#calculate").click(function() {
        if (firstOperand !== null && secondOperand !== null && operator !== null) {
            var result = calculate();
            $("input").val(result);
            resetCalculator();
            firstOperand = result;
        }
    });

    $("#reset").click(function() {
        resetCalculator();
        $("input").val("");
    });

    $("#operators > button").click(function() {
        operator = $(this).text();
        isPending = true;
    });
});