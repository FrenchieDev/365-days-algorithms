// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

const hour = '07:05:45PM'

function timeConversion(s) {
    let finalString = "";
    let bubble = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "P") {
            if (s[0] === "1" && s[1] === "2") {
                for (let j = 0; j < s.length - 2; j++ ) {
                    finalString = finalString + s[j]
                }
            } else {
               bubble = Number(s[0] + s[1]) + 12
               for (let j = 2; j < s.length -2; j++) {
                bubble += s[j]
               }  
               finalString = bubble;
            }
            
        } else if (s[i] === "A") {
            if (s[0] === "1" && s[1] === "2") {
                bubble = "00";
                for (let j = 2; j < s.length -2; j++) {
                    bubble += s[j];
                }
                finalString = bubble;
            } else {
                for (let j = 0; j < s.length - 2; j++) { 
                    finalString += s[j];
                }
            }
        }
    } 
    console.log(finalString)
}

timeConversion(hour);