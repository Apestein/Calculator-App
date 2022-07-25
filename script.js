let calculateArray = []
//
btn1 = document.querySelector('#one')
btn2 = document.querySelector('#two')
btn3 = document.querySelector('#three')
btn4 = document.querySelector('#four')
btn5 = document.querySelector('#five')
btn6 = document.querySelector('#six')
btn7 = document.querySelector('#seven')
btn8 = document.querySelector('#eight')
btn9 = document.querySelector('#nine')
btn0 = document.querySelector('#zero')
btnDecimal = document.querySelector('#decimal')
btnAdd = document.querySelector('#add')
btnMinus = document.querySelector('#minus')
btnMultiple = document.querySelector('#multiple')
btnDivide = document.querySelector('#divide')
btnEqual = document.querySelector('#equal')
btnClear = document.querySelector('#clear')
btnDelete = document.querySelector('#delete')
display = document.querySelector('#display')
//
btn1.onclick = update
btn2.onclick = update
btn3.onclick = update
btn4.onclick = update
btn5.onclick = update
btn6.onclick = update
btn7.onclick = update
btn8.onclick = update
btn9.onclick = update
btn0.onclick = update
btnDecimal.onclick = (e) => calculateArray.push(e.target.textContent)
btnAdd.onclick = evaluate
btnMinus.onclick = evaluate
btnMultiple.onclick = evaluate
btnDivide.onclick = evaluate
btnEqual.onclick = evaluate
btnClear.onclick = () => {
    calculateArray = []
    //display.textContent = displayStr
}
btnDelete.onclick = () => {
    calculateArray.pop()
    //display.textContent = displayStr
}
//
function update(e) {
    calculateArray.push(e.target.textContent)
    display.textContent = calculateArray.join('')
}

function error() {
    calculateArray = []
    display.textContent = 'ERROR!'
}

function evaluate(e) {
    if (calculateArray.length >= 3) {
        let temp = operate(+calculateArray[0], calculateArray[1], +calculateArray[2])
        calculateArray = []
        if (temp) {
            calculateArray.push(temp)
            if (e.target.textContent != '=') calculateArray.push(e.target.textContent)
            display.textContent = `${calculateArray.join('')}\u00A0\u00A0\u00A0\u00A0result:${temp}`
        } 
    } else {
        if (e.target.textContent === '=') error()
        else {
            calculateArray.push(e.target.textContent)
            display.textContent = calculateArray.join('')
        }
    }
}

function operate(n1, operator, n2) {
    if (isNaN(n1) || isNaN(n2)) error()
    if (operator === '+') return n1+n2
    else if (operator === '-') return n1-n2
    else if (operator === '*') return n1*n2
    else if (operator === '/') return n1/n2
    else error()
}