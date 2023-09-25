let inputOne = Number(prompt("First number:"))
let inputTwo =Number(prompt("Second number:"))
let operator = prompt("Operator:")

if (operator=== "+"){
    alert(`${inputOne} + ${inputTwo} = ${inputOne+inputTwo}`)
}else if (operator==="-"){
    alert(`${inputOne} - ${inputTwo} = ${inputOne-inputTwo}`)
}else if(operator==="*"){
    alert(`${inputOne} * ${inputTwo} = ${inputOne*inputTwo}`)
}else if(operator==="/"){
    alert(`${inputOne} / ${inputTwo} = ${inputOne/inputTwo}`)
}else{
    alert("Invalid Operator!")
}