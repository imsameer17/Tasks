// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, 
// the second - from the year 101 up to and including the year 200, etc.
// Example For year = 1905, the output should be = 20; For year = 1700, the output should be = 17.
function centuryFromYear(year){
    let A = year - 1;
    if (A == 0){
        return A/100;
    } else if (A > 0){
        return Math.floor(A/100 + 1);
        } else {
            return "input positive integers please";
        }
}
console.log(centuryFromYear(1905));