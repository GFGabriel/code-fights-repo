function allLongestStrings(inputArray) {
    const number = getLongestNumber(inputArray);
    console.log(number)
    const resultArray = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === number) {
            resultArray.push(inputArray[i])
        }
    }
    return resultArray
}

function getLongestNumber(inputArray) {
    let result = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (result < inputArray[i].length) {
            result = inputArray[i].length
        }
    }
    return result
}
