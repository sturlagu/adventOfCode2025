import { readFileSync } from "fs";

const inputArray = readFileSync("demo.txt", "utf-8").split('\r\n').filter(it => it.length > 0);
//const inputArray = readFileSync("input.txt", "utf-8").split('\r\n').filter(it => it.length > 0);
let totalJoltageOutputPartOne = 0;
let totalJoltageOutputPartTwo = 0;
inputArray.forEach(line => {
    const lineSplit = line.split('');
    let firstNumber = 0
    let secondNumber = 0
    const numbersArray = [0,0,0,0,0,0,0,0,0,0,0,0]
    lineSplit.forEach((char, index) => {
        const value = parseInt(char, 10)
        if(value > firstNumber && index !== (lineSplit.length -1)) {
            firstNumber = value;
            secondNumber = lineSplit[index + 1];
        }else if(value > secondNumber) secondNumber = value;
        /* ------------------ Part two -------------------*/
        for(let i = 0; i < numbersArray.length; i++) {
            const boundary = lineSplit.length - (numbersArray.length - i)
            if(index <= boundary) {
                const number = numbersArray[i];
                if(value > number) {
                    numbersArray.forEach((numb, idx) => {
                        if(idx >= i) {
                            console.log(lineSplit[index + idx])
                            numbersArray[idx] = lineSplit[index + idx];
                        }
                    })
                    break;
                }
            }
        }
        console.log('------------')
    })
    const joltageOutputPartOne = firstNumber.toString() + secondNumber.toString()
    totalJoltageOutputPartOne += parseInt(joltageOutputPartOne, 10);

    const joltageOutputPartTwo = numbersArray.join('')
    console.log(joltageOutputPartTwo)
    totalJoltageOutputPartTwo += parseInt(joltageOutputPartTwo, 10);
})

console.log(`Total joltage output part one: ${totalJoltageOutputPartOne}`);
console.log(`Total joltage output part two: ${totalJoltageOutputPartTwo}`);
