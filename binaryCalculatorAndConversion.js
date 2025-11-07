alert("Welcome to Binary Calculator & Converter!");
let firstValueSum = prompt("Enter the first binary value to add:");
let secondValueSum = prompt("Enter the second binary value to add:");
let sum = addBinaryFunction(firstValueSum, secondValueSum);
function addBinaryFunction(a, b) {
    const FIRST_ADDEND = parseInt(a, 2)
    const SECOND_ADDEND = parseInt(b, 2)
    return FIRST_ADDEND + SECOND_ADDEND;
}
const BINARY_SUM = sum.toString(2);
console.log(firstValueSum + " & " + secondValueSum + "'s Binary Sum: " + BINARY_SUM);

let firstValueDifference = prompt("Enter the first binary value to subtract:");
let secondValueDifference = prompt("Enter the second binary value to subtract:");
let difference = subtractBinaryFunction(firstValueDifference, secondValueDifference);
function subtractBinaryFunction(a, b) {
    const MINUEND = parseInt(a, 2)
    const SUBTRAHEND = parseInt(b, 2)
    return MINUEND - SUBTRAHEND;
}

if (difference >= 0) {
    console.log(firstValueDifference + " & " + secondValueDifference + "'s Binary Difference: " + difference.toString(2));  
} else {
    console.log(firstValueDifference + " & " + secondValueDifference +  "'s Binary Difference: -" + (-difference).toString(2));
    // to handle and avoid negative results appearing as full 32-bit two’s complement especially when they're large values
}

let binaryNumber = prompt("Enter a binary value you'd want to convert in Octal, Decimal, and Hexadecimal values:")
convertBinaryFunction(binaryNumber);
function convertBinaryFunction(a) {
    const DECIMAL_VALUE = parseInt(a, 2);
    console.log(a + " in Decimal: " + DECIMAL_VALUE);

    const OCTAL_VALUE = decimalValue.toString(8);
    console.log(a + " in Octal: " + OCTAL_VALUE);

    const HEXADECIMAL_VALUE = decimalValue.toString(16);
    console.log(a + " in Hexadecimal: " + HEXADECIMAL_VALUE.toUpperCase());
}

alert("Inspect and check the console to see the results!");