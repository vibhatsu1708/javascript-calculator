const display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (operator) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
    
        case '-':
            subtract(num1, num2);
            break;

        case '*':
            multiply(num1, num2);
            break;

        case '/':
            divide(num1, num2);
            break;
    }
}

function buttonClicked () {
    
}
buttons.map(
    button => button.addEventListener (
        'click', (e) => {
            switch (e.target.innerText) {
                case 'C' :
                    display.innerText = '';
                    break;

                case '=' :
                    try {
                        display.innerText = eval(display.innerText);
                        break;
                    }
                    catch {
                        display.innerText = 'ERROR';
                    }

                default :
                    display.innerText += e.target.innerText;
            }
        }
    )
)