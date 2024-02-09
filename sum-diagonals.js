// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const n = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let result = 0
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                leftDiagonal = leftDiagonal + arr[i][j]
            }
            if (i + j === arr.length - 1) {
                rightDiagonal = rightDiagonal + arr[i][j]
            }
        }
    }

    if (leftDiagonal - rightDiagonal < 0){
        result = (leftDiagonal - rightDiagonal) * -1
    } else {
        result = leftDiagonal - rightDiagonal
    }
    
    return result
}

console.log(diagonalDifference(m))
console.log(diagonalDifference(n))