int adjacentElementsProduct(int[] inputArray) {
    int result = 0;
    for (int i = 0; i < inputArray.Length - 1; i++) {
        if (i == 0 || inputArray[i] * inputArray[i+1] > result) {
            result = inputArray[i] * inputArray[i+1];
        }
    }
    return result;
}

int shapeArea(int n) {
    return (int)(Math.Pow(n, 2) + Math.Pow(n-1, 2));
}

int makeArrayConsecutive2(int[] statues) {
    int highest = statues[statues.Length - 1];
    int lowest = statues[0];
    Array.Sort(statues);
    if (statues.Length < 2) {
        return 0;
    } else if (statues.Length == 2) {
        return statues[1] - statues[0] - 1;
    } else {
        int result = 0;
        for (int i = 0; i < statues.Length - 1; i++ ) {
            if (statues[i] + 1 != statues[i+1]) {
                result += statues[i+1] - statues[i] - 1;
            }
        }
        return result;
    }
}
