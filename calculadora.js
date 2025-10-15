let num1= Number(prompt("Ingresa el primer número"));
let num2= Number(prompt("Ingresa el segundo número"));

let op = prompt("Ingresa la operación a realizar ( +   -   *   / )");

function calculadora(num1,num2,op) {
    
switch (op) {
    case '+':
        return  num1 + num2;
        
    case '-':
        return  num1 - num2;
        
    case '*':
        return  num1 * num2;
        
    case '/':
        return  num1 / num2;
        
    
    default:
        return "Ingresa un operador valido";
    }
}

let resultado = calculadora(num1,num2,op);
console.log(`El resultado es: ${resultado}`);