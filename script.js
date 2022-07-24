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
//
btn1.onclick = (e) => calculateArray.push(e.target.textContent)
btn2.onclick = (e) => calculateArray.push(e.target.textContent)
btn3.onclick = (e) => calculateArray.push(e.target.textContent)
btn4.onclick = (e) => calculateArray.push(e.target.textContent)
btn5.onclick = (e) => calculateArray.push(e.target.textContent)
btn6.onclick = (e) => calculateArray.push(e.target.textContent)
btn7.onclick = (e) => calculateArray.push(e.target.textContent)
btn8.onclick = (e) => calculateArray.push(e.target.textContent)
btn9.onclick = (e) => calculateArray.push(e.target.textContent)
btn0.onclick = (e) => calculateArray.push(e.target.textContent)
btnDecimal.onclick = (e) => calculateArray.push(e.target.textContent)
btnAdd.onclick = (e) => {
    if (calculateArray.length === 3) {
        let temp = operate(parseInt(calculateArray[0]), calculateArray[1], parseInt(calculateArray[2]))
        console.log(temp)
        calculateArray = []
        calculateArray.push(temp)
    }
    calculateArray.push(e.target.textContent)
}
btnMinus.onclick = (e) => calculateArray.push(e.target.textContent)
btnMultiple.onclick = (e) => calculateArray.push(e.target.textContent)
btnDivide.onclick = (e) => calculateArray.push(e.target.textContent)
btnClear.onclick = (e) => calculateArray.push(e.target.textContent)
btnDelete.onclick = (e) => calculateArray.push(e.target.textContent)
btnEqual.onclick = operate(parseInt(calculateArray[0]), calculateArray[1], parseInt(calculateArray[2]))
//
function operate(n1, operator, n2) {
    if (operator === '+') return n1+n2
    else if (operator === '-') return n1-n2
    else if (operator === '*') return n1*n2
    else if (operator === '/') return n1/n2
}