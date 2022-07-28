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
expression = document.querySelector('#expression')
result = document.querySelector('#result')
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
btnDecimal.onclick = update
btnAdd.onclick = evaluate
btnMinus.onclick = evaluate
btnMultiple.onclick = evaluate
btnDivide.onclick = evaluate
btnEqual.onclick = evaluate
btnClear.onclick = () => {
    calculateArray = []
    expression.textContent = '--'
    result.textContent = '0'
}
btnDelete.onclick = () => {
    calculateArray.pop()
    expression.textContent = calculateArray.join('')
    if (!calculateArray[0]) expression.textContent = '--'
}
//
function update(e) {
    calculateArray.push(e.target.textContent)
    expression.textContent = calculateArray.join('')
}

function error() {
    calculateArray = []
    expression.textContent = 'ERROR!'
}

function notNumber(num) {
    if (isNaN(num) && num != '.' && num != this) return true

}

function evaluate(e) {
    let btnValue = e.target.textContent
    calculateArray.push(btnValue)
    let indexOfOp = calculateArray.findIndex(notNumber)
    let n1 = calculateArray.slice(0, indexOfOp).join('')
    let operator = calculateArray[indexOfOp]
    let n2 = calculateArray.slice(indexOfOp+1, calculateArray.findIndex(notNumber, operator)).join('')
    if (operator === '=' && (!n1 || !n2)) {
        error()
        return
    }
    if (n1 && n2) {
        let temp = operate(+n1, operator, +n2)
        if (temp) {
            calculateArray = []
            calculateArray.push(temp)
            if (btnValue != '=') calculateArray.push(btnValue)
            result.textContent = temp
            expression.textContent = calculateArray.join('')
        }
    } else expression.textContent = calculateArray.join('')
}

function operate(n1, operator, n2) {
    if (isNaN(n1) || isNaN(n2) || n2 === 0) error()
    else {
        if (operator === '+') return n1+n2
        else if (operator === '-') return n1-n2
        else if (operator === '*') return n1*n2
        else if (operator === '/') return n1/n2
    }
}