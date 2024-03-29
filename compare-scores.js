// Alice and Bob each aplyy a job. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: code clarity, originality, and performance.
// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// SCORE TABLE
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.
const a = [3,2,1]
const b =  [1,2,3]

function compareTriplets(a, b) {
    let aFinal = 0;
    let bFinal = 0;
    
    for (let i= 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aFinal++
        }  else if (a[i] < b[i]) {
            bFinal++ 
        } else {
            
        } 
    }
    return [aFinal, bFinal]
}

console.log(compareTriplets(a,b))