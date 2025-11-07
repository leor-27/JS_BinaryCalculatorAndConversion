alert("Welcome to Binary Calculator & Converter!");
let firstValueSum = prompt("Enter the first binary value to add:");
let secondValueSum = prompt("Enter the second binary value to add:");
let sum = addBinaryFunction(firstValueSum, secondValueSum);
function addBinaryFunction(a, b) {
    const firstAddend = parseInt(a, 2)
    const secondAddend = parseInt(b, 2)
    return firstAddend + secondAddend;
}
const binarySum = sum.toString(2);
console.log(firstValueSum + " & " + secondValueSum + "'s Binary Sum: " + binarySum);

let firstValueDifference = prompt("Enter the first binary value to subtract:");
let secondValueDifference = prompt("Enter the second binary value to subtract:");
let difference = subtractBinaryFunction(firstValueDifference, secondValueDifference);
function subtractBinaryFunction(a, b) {
    const minuend = parseInt(a, 2)
    const subtrahend = parseInt(b, 2)
    return minuend - subtrahend;
}

if (difference >= 0) {
    console.log(firstValueDifference + " & " + secondValueDifference + "'s Binary Difference: " + difference.toString(2));  
} else {
    console.log(firstValueDifference + " & " + secondValueDifference +  "'s Binary Difference: -" + (-difference).toString(2));
    // to handle and avoid negative results appearing as full 32-bit two’s complement especially when they're large values
}

let binaryNumber = prompt("Enter a binary value you'd want to convert in Octal, Decimal, and Hexadecimal values:")
let convertedNumber = convertBinaryFunction(binaryNumber);
function convertBinaryFunction(a) {
    const decimalValue = parseInt(a, 2);
    console.log(a + " in Decimal: " + decimalValue);

    const octalValue = decimalValue.toString(8);
    console.log(a + " in Octal: " + octalValue);

    const hexadecimalValue = decimalValue.toString(16);
    console.log(a + " in Hexadecimal: " + hexadecimalValue.toUpperCase());
}

alert("Inspect and check the console to see the results!");