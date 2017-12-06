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

bool almostIncreasingSequence(int[] sequence) {
    int count = 0;
    for (int i = 0; i < sequence.Length -1; i++) {
        if (sequence.Length < 3) {
            return true;
        } else {
            if (sequence[i] >= sequence[i+1]) {
                count ++;
                if (i != 0 && i != sequence.Length-2 && sequence[i] >= sequence[i+2] && sequence[i-1] >= sequence[i+1]) {
                    return false;
                }
            }
        }
    }
    return count <= 1;
}

int matrixElementsSum(int[][] matrix) {
    int result = 0;
    for (int i = 0; i < matrix[0].Length; i++) {
        for (int j = 0; j < matrix.Length; j++) {
            if (matrix[j][i] != 0) {
                result += matrix[j][i];
            } else {
                break;
            }
        }
    }
    return result;
}
