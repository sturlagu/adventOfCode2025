import { readFileSync } from 'fs';


//const inputArray = readFileSync('demo.txt', 'utf-8').trim().split('\r\n');
const inputArray = readFileSync('input.txt', 'utf-8').trim().split('\r\n');

const diagram = []
inputArray.forEach((line, lineIndex) => {
    const row = line.split('')
    diagram.push(row);
})

const diagramCopy = JSON.parse(JSON.stringify(diagram));

const directions = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // top
    [0, 1], // bottom
    [-1, 1], // top left
    [1, 1], // top right
    [-1, -1], // bottom left
    [1, -1] // bottom right
];

const ADJACENT_PAPER_RESTRICTION = 4;
let numberOfRollsPartOne = 0
let numberOfRollsPartTwo = 0
diagram.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
        if (cell === '@') {
            /* ---------- Part One ---------- */
            let adjacentPaperCountPartOne = 0;
            directions.forEach(direction => {
                const x = cellIndex + direction[0];
                const y = rowIndex + direction[1];
                if (x >= 0 && x < row.length && y >= 0 && y < diagram.length) {
                    if (diagram[y][x] === '@') adjacentPaperCountPartOne++;
                }
            })
            if (adjacentPaperCountPartOne < ADJACENT_PAPER_RESTRICTION) numberOfRollsPartOne++;
        }
    })
})


let hasRemovedPaperThisTurn = false
do {
    hasRemovedPaperThisTurn = false
    diagramCopy.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            if (cell === '@') {
                /* ---------- Part Two ---------- */
                let adjacentPaperCountPartTwo = 0;
                directions.forEach(direction => {
                    const x = cellIndex + direction[0];
                    const y = rowIndex + direction[1];
                    if (x >= 0 && x < row.length && y >= 0 && y < diagramCopy.length) {
                        if (diagramCopy[y][x] === '@') adjacentPaperCountPartTwo++;
                    }
                })
                if (adjacentPaperCountPartTwo < ADJACENT_PAPER_RESTRICTION) {
                    numberOfRollsPartTwo++;
                    diagramCopy[rowIndex][cellIndex] = '.';
                    hasRemovedPaperThisTurn = true
                }
            }
        })
    })
} while (hasRemovedPaperThisTurn);

console.log('Part One:', numberOfRollsPartOne);
console.log('Part Two:', numberOfRollsPartTwo);