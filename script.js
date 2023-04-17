// This function takes a users array and returns only the odd values of the
// given array into a new array.

function getOdd(arr) {
var oddArr = []

    for (var i = 1; i <= arr; i++) {
        if (i % 2 == 1){
            oddArr.push(i)
        }
    }
    return oddArr;
}