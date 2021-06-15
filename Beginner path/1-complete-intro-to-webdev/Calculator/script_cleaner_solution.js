let runTotal = 0;
let buffer = '0';
let prevOperator = null;
const screen = document.querySelector('.calc-screen');

document.querySelector('.calc-btns').addEventListener('click', function(event) {
    if (event.target.tagName === "BUTTON") {
        buttonClick(event.target.innerText);
    }
});

function buttonClick(value) {
    if (isNaN(parseFloat(value)))
        handleSymbol(value);
    else
        handleNumber(value);
    renderer();

}

function handleNumber(value) {
    if (buffer === '0')
        buffer = value;
    else
        buffer += value;
}

function handleMathOperator(value) {
    const intBuffer = parseFloat(buffer);
    if (runTotal === 0)
        runTotal = intBuffer;
    else
        flushOperation(intBuffer);
    prevOperator = value;
    buffer = '0';
}

function flushOperation(intBuffer) {
    if (prevOperator === '+')
        runTotal += intBuffer;
    if (prevOperator === '-')
        runTotal -= intBuffer;
    if (prevOperator === '/')
        runTotal /= intBuffer;
    if (prevOperator === '*')
        runTotal *= intBuffer;
}

function handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = '0';
            runTotal = 0;
            prevOperator = null;
            break;
        case '=':
            if (prevOperator === null) {
                return;
            }
            flushOperation(parseFloat(buffer));
            prevOperator = null;
            buffer = "" + runTotal;
            runTotal = 0;
            break;
        case '←':
            if (buffer.length === 1)
                buffer = '0';
            else
                buffer = buffer.substring(0, buffer.length - 1);
            break;
        default:
            handleMathOperator(value);
            break;
    }
}

function renderer() {
    screen.innerText = buffer;
}