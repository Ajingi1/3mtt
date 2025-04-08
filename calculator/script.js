// display box
const input = document.getElementById("valueInput");

// get digits value
const digits = document.getElementsByClassName("digit");

// clear the display
const itemClear = document.getElementById("itemClear");

// point
const itemPoint = document.getElementById("itemPoint");

// Arithmetic operator
const operators = document.getElementsByClassName("operator");

let temp = 0;
let currentOperator = "";

const calculate = (operator) => {
    if (!temp && (operator === "+" || operator === "-" || operator === "*" || operator === "/")) {
        temp = Number(input.value);
        currentOperator = operator;
        input.value = "";
    }
    else if (temp && (operator === "+" || operator === "-" || operator === "*" || operator === "/")) {
        const current = Number(input.value);
        const result = new Function(`return ${temp} ${currentOperator} ${current}`)();
        input.value = result;
        temp = result;
        currentOperator = operator;
    }
    else if (temp && operator === "=") {
        const current = Number(input.value);
        const result = new Function(`return ${temp} ${currentOperator} ${current}`)();
        input.value = result;
        temp = 0;
        currentOperator = "";
    }
};



//  convert them to array then add event Listener
Array.from(digits).forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        if (input.value.length < 17) {
            if (input.value != "0") {
                input.value += button.innerText;
            }
            else {
                input.value = button.innerText;
            }
        }
    });
});

// Clear the display 
itemClear.addEventListener("click", event => {
    event.preventDefault();
    input.value = "0";
    temp = 0;
    currentOperator = "";
})

// Add point if there is none
itemPoint.addEventListener("click", event => {
    event.preventDefault();
    if (input.value.length < 17) {
        if (input.value.includes(".")) {
            input.value += "";
        } else {
            input.value += ".";
        }
    }
})

Array.from(operators).forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        calculate(button.textContent);
    });
});
