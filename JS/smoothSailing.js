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

function commonCharacterCount(s1, s2) {
    let array1 = alphabetize(s1)
    let array2 = alphabetize(s2)
    let result = 0;
    let index = -1
    for (let i = 0; i < array1.length; i++) {
        let letter = array1[i]
        for (let j = 0; j < array2.length; j++) {
            if (letter === array2[j]) {
                if (j === index) {
                    continue
                } else {
                    result++
                    index = j
                    break
                }
            }
        }
    }
    return result
}

function alphabetize(string) {
    return string.split('').sort()
}
