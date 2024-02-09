// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.

const arr = [ -1, 1, -1, 1, 0 ]

function plusMinus(arr) {
    let total0 = 0
    let totalPositive = 0
    let totalNegative = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            total0++
        }
        if (arr[i] > 0) {
            totalPositive++
        }
        if (arr[i] < 0) {
            totalNegative++
        }
    }
    
    let final0 = total0 / arr.length
    let finalPositive = totalPositive / arr.length
    let finalNegative = totalNegative / arr.length
    
    final0 = final0 + ''
    finalPositive = finalPositive + ''
    finalNegative = finalNegative + ''
    
    while (final0.length < 8) {
        final0 = final0 + '0'
      }

      while (finalPositive.length < 8) {
        finalPositive = finalPositive + '0'
      }

      while (finalNegative.length < 8) {
        finalNegative = finalNegative + '0'
      }

    console.log(final0)
    console.log(finalPositive)
    console.log(finalNegative)
}

plusMinus(arr)
