function gcd(x, y) {
    if (y === 0) {
        return x;
    } else {
        return gcd(y, x % y);
    }
}

function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1) {
        return "";
    }

    const length = gcd(str1.length, str2.length);
    return str1.substring(0, length);
};