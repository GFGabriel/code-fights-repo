string[] allLongestStrings(string[] inputArray) {
    int number = getLargestNumber(inputArray);
    List<string> result = new List<string>();
    for (int i = 0; i < inputArray.Length; i++) {
        if (inputArray[i].Length == number) {
            result.Add(inputArray[i]);
        }
    }
    return result.ToArray();
}

int getLargestNumber(string[] array) {
    int count = 0;
    for (int i = 0; i < array.Length; i++) {
        if (array[i].Length > count) {
            count = array[i].Length;
        }
    }
    return count;
}
