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

    $("#numbers > button:not(#calculate)").click(function() {
        var value = $(this).text();
        if (operator === null) {
            // في الطرف الأول من العملية
            if (isPending === true && firstOperand !== null) {
                // المستخدم يتابع إدخال الأرقام في الطرف الأول
                firstOperand = firstOperand + value;
            } else {
                // المستخدم يقوم بكتابة الطرف الأول من العملية للمرة الأولى
                firstOperand = value;
                isPending = true;
            }
            $("input").val(firstOperand);
        } else {
            // في الطرف الثاني من العملية
            if (secondOperand === null) {
                // هذه هي المرة الأولى التي يبدأ فيها المستخدم بكتابة رقم في الطرف الثاني
                secondOperand = value;
            } else {
                // المستخدم يتابع إدخال الأرقام في الطرف الثاني
                secondOperand = secondOperand + value;
            }
            $("input").val(secondOperand);
        }
    });
});