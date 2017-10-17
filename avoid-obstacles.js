function avoidObstacles(inputArray) {
    let sortedArray = inputArray.sort(function(a, b){return a - b})
    console.log(sortedArray)
    let result = 0
    console.log(sortedArray[inputArray.length - 1] + 1)
    for ( let i = 2; i < sortedArray[inputArray.length - 1] + 2; i++) {
        console.log('CHECKING', i)
        let number = checkModulos(i, inputArray)
        if (!number) {
            result = i
            break
        }
    }
    return result
}

function checkModulos(n, array) {
    let result = true
    for (let i = 0; i < array.length; i++) {
        if (array[i]%n === 0) {
            break
        } else if (i >= array.length - 1) {
            console.log('last one')
            result = false
        }
    }
    return result
}

