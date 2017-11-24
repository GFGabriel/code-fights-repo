int add(int param1, int param2) {
    return param1 + param2;
}

int centuryFromYear(int year) {
    if (year%100 == 0) {
        return year/100;
    } else {
        return (int) (Math.Floor(year/100.0 + 1));
    }
}

bool checkPalindrome(string inputString) {
 string reverseString = new string(inputString.ToCharArray().Reverse().ToArray());
 return inputString == reverseString;
}
