function isVowel(caracter) {
  const vocales = "aeiouAEIOU";
  return vocales.includes(caracter);
}

function reverseVowels(s: string): string {
    let vowelsArray = [];
    let s2 = "";
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[s.length - 1 - i])) vowelsArray.push(s[s.length - 1 - i]);
    }
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            s2 += vowelsArray[j];
            j++;
        } else {
            s2 += s[i];
        }
    }
    return s2;
};