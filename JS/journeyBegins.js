add = (param1, param2) => {
    return param1 + param2
}

centuryFromYear = (year) => {
    if (year % 100 === 0) {
        return Math.floor(year/100)
    } else {
        return Math.floor((year/100) + 1)
    }
}

checkPalindrome = (inputString) => {
    let reverseString = ""
    for ( let i = inputString.length - 1; i >= 0; i--) {
        reverseString += inputString[i]
    }
    console.log(reverseString)
    if (inputString === reverseString) {
        return true
    } else {
        return false
    }
}
