adjacentElementsProduct = (inputArray) => {
 for (let i = 0; i < inputArray.length; i++) {
  if (i === 0 || inputArray[i] * inputArray[i+1] > result) {
   result = inputArray[i] * inputArray[i+1]
  }
 return result
}

shapeArea = (n) => {
    return Math.pow(n, 2) + Math.pow(n-1, 2)
}


makeArrayConsecutive2 = (statues) =>  {
 let result = 0
 let lowest = 0
 let highest = 0
 for ( i = 0; i < statues.length; i++) {
  if (i === 0) {
   lowest = statues[i]
   highest = statues[i]
  } else {
   if (statues[i] < lowest) {
    lowest = statues[i]
   }
   if (statues[i] > highest) {
    highest = statues[i]
   }
  }
 }
 for (j = lowest; j < highest; j++) {
  for (k = 0; k < statues.length; k++) {
   if (statues[k] === j) {
    console.log('returning')
    break
   } else {
    if (k === statues.length - 1) {
     result += 1
     console.log(result)
    }
   }
  }
 }
 return result
}
