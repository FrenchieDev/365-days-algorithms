// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

const candles = [ 3,2,1,3]

function birthdayCakeCandles(candles) {

    let totalCandles = 0 
    let tallest = candles[0]
    for (let i = 0; i < candles.length; i ++) {
        if (tallest === candles[i]) {
            totalCandles = totalCandles + 1
        } else if (tallest < candles[i]) {
            tallest = candles[i]
            totalCandles = 1
        } 
    }
    return totalCandles
}

birthdayCakeCandles(candles)