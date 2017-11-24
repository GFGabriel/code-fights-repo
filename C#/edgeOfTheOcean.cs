int adjacentElementsProduct(int[] inputArray) {
    int result = 0;
    for (int i = 0; i < inputArray.Length - 1; i++) {
        if (i == 0 || inputArray[i] * inputArray[i+1] > result) {
            result = inputArray[i] * inputArray[i+1];
        }
    }
    return result;
}
