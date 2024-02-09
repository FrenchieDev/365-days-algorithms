// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

const arr = [ -1, 1, -1, 1, 0 ]

function plusMinus(arr) {
    let total0 = 0
    let totalpositive = 0
    let totalnegative = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            total0++
        }
        if (arr[i] > 0) {
            totalpositive++
        }
        if (arr[i] < 0) {
            totalnegative++
        }
    }
    
    let final0 = total0 / arr.length
    let finalPositive = totalpositive / arr.length
    let finalNegative = totalnegative / arr.length
    
    console.log(final0)
    console.log(finalPositive)
    console.log(finalNegative)
}

plusMinus(arr)