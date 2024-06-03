function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
// Keyboard input handling
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    } else if (key.toLowerCase() === 's') {
        appendToDisplay('Math.sin(');
    } else if (key.toLowerCase() === 't') {
        appendToDisplay('Math.tan(');
    } else if (key.toLowerCase() === 'l') {
        appendToDisplay('Math.log(');
    } else if (key.toLowerCase() === 'r') {
        appendToDisplay('Math.sqrt(');
    } else if (key.toLowerCase() === 'o') {
        appendToDisplay('Math.cos(');
    } else if (key === '^') {
        appendToDisplay('Math.pow(');
    }
});
