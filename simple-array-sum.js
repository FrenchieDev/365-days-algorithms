//  EXPLANATION
// Create a function "simpleArraySum". It must return the sum of the array elements as an integer.

const arr = [ 1, 6, 9, 4 ]

function simpleArraySum(ar) {
    let result = 0
    for (let i = 0; i < ar.length; i++){
        result = result + ar[i];
    } 
return result
}

console.log(simpleArraySum(arr))
