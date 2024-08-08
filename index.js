let display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let count = "0";
let count2 = 0;
let plus = false;
let take = false;
let divide = false;
let multiply = false;
let numberIndex = 0;
let currentNumber = count;



buttons.forEach(bt => {
    bt.addEventListener("click", calculate);
})

function calculate(e) {
    let pendingCal = e.target;
    let buttonUsed = pendingCal.getAttribute('id');

    if (currentNumber === "0" || currentNumber === 0) {
        currentNumber = "";
    }

    switch (buttonUsed) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (currentNumber.length >= 7) {
                return;
            } else {
            currentNumber += `${buttonUsed}`;
            display.innerHTML = currentNumber;
            break;
            }

        case 'C':
            count = "0";
            count2 = "0";
            plus = false;
            take = false;
            divide = false;
            multiply = false;
            currentNumber = count;
            display.innerHTML = currentNumber;
            break;


        case '+':
            addNumbers();
            break;

        case '-':
            takeNumbers();
            break;

        case 'x':
            multiplyNumbers();
            break;

        case '/':
            divideNumbers();
            break;

        case '=':
            resultNumber()

        }
}

function resultNumber() {
    switch(true) {
        case plus: 
            count2 = currentNumber;
            console.log(`Count 1 is ${count}`);
            console.log(`Count 2 is ${count2}`);
            currentNumber =  (Number(count) + Number(count2)).toString();
            console.log(currentNumber);
            display.innerHTML = currentNumber;
            count = currentNumber;
            currentNumber = "0";
            plus = false;
            break;

        case take:
            count2 = currentNumber;
            console.log(`Count 1 is ${count}`);
            console.log(`Count 2 is ${count2}`);
            currentNumber =  (Number(count) - Number(count2)).toString();
            console.log(currentNumber);
            display.innerHTML = currentNumber;
            count = currentNumber;
            currentNumber = "0";
            take = false;
            break;

        case multiply:
            count2 = currentNumber;
            console.log(`Count 1 is ${count}`);
            console.log(`Count 2 is ${count2}`);
            currentNumber =  (Number(count) * Number(count2)).toString();
            console.log(currentNumber);
            display.innerHTML = currentNumber;
            count = currentNumber;
            currentNumber = "0";
            multiply = false;
            break;
        
        case divide:
            count2 = currentNumber;
            console.log(`Count 1 is ${count}`);
            console.log(`Count 2 is ${count2}`);
            currentNumber =  (Number(count) / Number(count2)).toString();
            console.log(currentNumber);
            display.innerHTML = currentNumber;
            count = currentNumber;
            currentNumber = "0";
            divide = false;
            break;

    }
}

function divideNumbers() {
    plus = false;
    multiply = false;
    take = false;
    if (divide) {
        count2 = currentNumber;
        console.log(`Count 1 is ${count}`);
        console.log(`Count 2 is ${count2}`);
        currentNumber =  (Number(count) / Number(count2)).toString();
        console.log(currentNumber);
        display.innerHTML = currentNumber;
        count = currentNumber;
        currentNumber = "0";
    } else {
        count = currentNumber;
        currentNumber = "0";
        divide = true;
    }
}

function multiplyNumbers() {
    plus = false;
    divide = false;
    take = false;
    if (multiply) {
        count2 = currentNumber;
        console.log(`Count 1 is ${count}`);
        console.log(`Count 2 is ${count2}`);
        currentNumber =  (Number(count) * Number(count2)).toString();
        console.log(currentNumber);
        display.innerHTML = currentNumber;
        count = currentNumber;
        currentNumber = "0";
    } else {
        count = currentNumber;
        currentNumber = "0";
        multiply = true;
    }
}

function takeNumbers() {
    plus = false;
    divide = false;
    multiply = false;
    if (take) {
        count2 = currentNumber;
        console.log(`Count 1 is ${count}`);
        console.log(`Count 2 is ${count2}`);
        currentNumber =  (Number(count) - Number(count2)).toString();
        console.log(currentNumber);
        display.innerHTML = currentNumber;
        count = currentNumber;
        currentNumber = "0";
    } else {
        count = currentNumber;
        currentNumber = "0";
        take = true;
    }
}


function addNumbers() {
    take = false;
    divide = false;
    multiply = false;
    if (plus) {
        count2 = currentNumber;
        console.log(`Count 1 is ${count}`);
        console.log(`Count 2 is ${count2}`);
        currentNumber =  (Number(count) + Number(count2)).toString();
        console.log(currentNumber);
        display.innerHTML = currentNumber;
        count = currentNumber;
        currentNumber = "0";
    } else {
        count = currentNumber;
        currentNumber = "0";
        plus = true;
    }
}

