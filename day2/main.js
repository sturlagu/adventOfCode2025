import { readFileSync } from 'fs';

const CSV_SEPARATOR = ',';
const ID_SEPARATOR = '-';

//const inputArray = readFileSync('./demo.txt', 'utf-8').split(CSV_SEPARATOR)
const inputArray = readFileSync('./input.txt', 'utf-8').split(CSV_SEPARATOR)
let invalidIdsSumPartOne = 0;
let invalidIdsSumPartTwo = 0;
inputArray.forEach((line) => {
    const lineSplit = line.split(ID_SEPARATOR);
    const firstID = parseInt(lineSplit[0], 10);
    const lastID = parseInt(lineSplit[1], 10);
    /* ------------------ Part one ------------------- */
    for (let currentID = firstID; currentID <= lastID; currentID++) {
        const currentIDString = currentID.toString();
        if (currentIDString.length % 2 !== 0) continue
        const charactersToCheck = currentIDString.slice(0, currentIDString.length / 2);
        const checkAgainstCharacters = currentIDString.slice(charactersToCheck.length, currentIDString.length)
        if (charactersToCheck === checkAgainstCharacters) {
            invalidIdsSumPartOne += currentID;
        }
    }
    /* ------------------ Part two ------------------- */
    for (let currentID = firstID; currentID <= lastID; currentID++) {
        const currentIDString = currentID.toString();
        let charactersToCheck = '';

        let isInvalid = false
        for (let i = 0; i < currentIDString.length / 2; i++) {
            charactersToCheck += currentIDString.charAt(i);
            for (let j = charactersToCheck.length; j < currentIDString.length; j += charactersToCheck.length) {
                if (charactersToCheck === currentIDString.slice(j, charactersToCheck.length + j)) {
                    isInvalid = true;
                } else {
                    isInvalid = false;
                    break;
                }
            }
            if (isInvalid) break;
        }
        if (isInvalid) invalidIdsSumPartTwo += currentID;
    }
})

console.log(`Sum of all invalid IDs: ${invalidIdsSumPartOne}`);
console.log(`Sum of all invalid IDs: ${invalidIdsSumPartTwo}`);