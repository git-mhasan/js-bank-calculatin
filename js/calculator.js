// Number Pad pressed with deligated event
let expression = '';
let operationSection = document.getElementById('operation');
let resultSection = document.getElementById('result');
document.getElementById('calculator-num-pad').addEventListener('click', function (event) {
    if (event.target.innerText === 'C') {
        expression = '';
        operationSection.innerText = '0';
        resultSection.innerText = '';
    }
    else if (event.target.innerText === '=' && !expression == '') {
        if (expression[expression.length - 1].match(/[-%/x+]/g)) {
            expression = expression.slice(0, expression.length - 1)
        }
        resultSection.innerText = eval(expression.replace('x', '*'));
        expression = '';
        // operationSection.innerText = '0';
    } else if (event.target.innerText.match(/[0-9]/g)) {
        if (event.target.innerText.match(/[0]/g) && expression.length == 0) {
            //in a number 
        } else {
            expression += event.target.innerText;
            operationSection.innerText = expression;
            console.log(expression);
        }
    }
    else if (event.target.innerText.match(/[-%/x+.]/g)) {
        if (expression.length > 0) {
            // expression += event.target.innerText;
            if (expression[expression.length - 1].match(/[-%/x+.]/g)) {
                // debugger;
                // console.log(expression);
                expression = expression.slice(0, expression.length - 1);
                // console.log(expression);
                expression += event.target.innerText;
                operationSection.innerText = expression;

            } else {
                expression += event.target.innerText;
                operationSection.innerText = expression;

            }
        } else if (event.target.innerText === '.') {
            expression = '0.'
            operationSection.innerText = expression;

        }
        else {
            operationSection.innerText = '0';
            resultSection.innerText = ''
        }

    } else if (event.target.innerText === 'Del') {
        expression = expression.slice(0, expression.length - 1);
        operationSection.innerText = expression;
    }

})

// function operator(expression) {
//     if () {

//     }
// }