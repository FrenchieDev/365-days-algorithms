//  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// const arr = [ 7,69,2,221,8974 ]
const arr = [ 5,3,1,9,7 ]

function miniMaxSum(arr) {
    let minSum = 0
    let maxSum = 0
    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let bubble = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = bubble
            } 
        }     
    }

    for (let i = 0; i < arr.length -1; i++) {
        minSum = minSum + arr[i]
    }

    for (let i = arr.length -1; i > 0; i--) {
        maxSum = maxSum + arr[i]
    }
    console.log(minSum, maxSum)
}

miniMaxSum(arr)