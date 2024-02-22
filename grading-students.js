// HackerLand University has the following grading policy:
// Every student receives a  in the inclusive range from 0 to 100.
// Any  less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grades  according to these rules:
// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

const grades = [73, 67,38,33, 44, 21, 100, 50, 59, 99, 64]

function gradingStudents(grades) {
    let finalGrades = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            finalGrades[i] = grades[i]
        }
        else if (grades[i] % 5 === 3) {
            finalGrades[i] = grades[i] + 2
        } else if (grades[i] % 5 === 4) {
            finalGrades[i] = grades[i] + 1
        }
        else {
            finalGrades[i] = grades[i]
        }
    }
console.log(finalGrades)
}

gradingStudents(grades)
