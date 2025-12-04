import { readFileSync } from 'fs';

let numberOfZerosPartOne = 0;
let numberOfZerosPartTwo = 0;
let dialPointer = 50;

//const inputArray = readFileSync('./demo.txt', 'utf-8').split('\r\n');
const inputArray = readFileSync('./input.txt', 'utf-8').split('\r\n');
inputArray.forEach((line) => {
    const lineSplit = line.split('');
    const direction = lineSplit.shift();
    const value = parseInt(lineSplit.join(''), 10);
    for (let step = 1; step <= value; step++) {
        if (direction === 'R') dialPointer++;
        if (direction === 'L') dialPointer--;
        if (dialPointer > 99) dialPointer = 0;
        if (dialPointer < 0) dialPointer = 99;
        if (dialPointer === 0 && step === value) {
            numberOfZerosPartOne++;
            numberOfZerosPartTwo++;
        } else if (dialPointer === 0) {
            numberOfZerosPartTwo++;
        }
    }
    console.log(`Direction: ${direction}, Value: ${value}, DialPointer: ${dialPointer}`);
})

console.log(`Number of Zeros Part one: ${numberOfZerosPartOne}`);
console.log(`Number of Zeros Part two: ${numberOfZerosPartTwo}`);