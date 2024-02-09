// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++){
        let printedStep = ''
        let step = i
        while (step < n) {
            printedStep = printedStep + " "
            step++
          }
        while ( printedStep.length <= n - 1 ){
          printedStep = printedStep + '#'
        }
     console.log(printedStep)
        }
}

staircase(6)