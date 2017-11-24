adjacentElementsProduct = (inputArray) => {
 for (let i = 0; i < inputArray.length; i++) {
  if (i === 0) {
   result = inputArray[i] * inputArray[i+1]
  } else {
   if (inputArray[i] * inputArray[i+1] > result) {
    result = inputArray[i] * inputArray[i+1]
   }
  }
 }
 return result
}
