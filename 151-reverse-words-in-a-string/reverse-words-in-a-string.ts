function reverseWords(s: string): string {
    let wordsArray = [];
    let trimmedStr = s.trim();
    trimmedStr += " ";
    let auxWord = "";
    for (let i = 0; i < trimmedStr.length; i++) {
        if (trimmedStr[i] != " ") {
            auxWord += trimmedStr[i];
        } else {
            if (auxWord != "") wordsArray.push(auxWord);
            auxWord = "";
        }
    }
    auxWord = "";
    for (let i = 0; i < wordsArray.length; i++) {
        auxWord += `${wordsArray[wordsArray.length - 1 - i]} `;
    }
    return auxWord.trim();
};