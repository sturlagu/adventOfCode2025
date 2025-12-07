import { readFileSync } from "fs";

//const inputArray = readFileSync("demo.txt", "utf-8").split('\r\n').filter(it => it.length > 0);
const inputArray = readFileSync("input.txt", "utf-8").split('\r\n').filter(it => it.length > 0);
let totalJoltageOutputPartOne = 0;
let totalJoltageOutputPartTwo = 0;
inputArray.forEach(line => {
    const lineSplit = line.split('');
    let firstNumber = 0
    let secondNumber = 0
    const numbersArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    lineSplit.forEach((char, index) => {
        const value = parseInt(char, 10)
        /* ------------------ Part one -------------------*/
        if (value > firstNumber && index !== (lineSplit.length - 1)) {
            firstNumber = value;
            secondNumber = lineSplit[index + 1];
        } else if (value > secondNumber) secondNumber = value;
        /* ------------------ Part two -------------------*/
        for (let i = 0; i < numbersArray.length; i++) {
            const boundary = lineSplit.length - (numbersArray.length - i)
            if (index <= boundary) {
                const number = numbersArray[i];
                if (value > number) {
                    numbersArray.forEach((num, idx) => {
                        if (i === idx) numbersArray[i] = value
                        else if (idx > i) numbersArray[idx] = 0
                    })
                    break;
                }
            }
        }
    })
    const joltageOutputPartOne = firstNumber.toString() + secondNumber.toString()
    totalJoltageOutputPartOne += parseInt(joltageOutputPartOne, 10);

    const joltageOutputPartTwo = numbersArray.join('')
    totalJoltageOutputPartTwo += parseInt(joltageOutputPartTwo, 10);
})

console.log(`Total joltage output part one: ${totalJoltageOutputPartOne}`);
console.log(`Total joltage output part two: ${totalJoltageOutputPartTwo}`);
