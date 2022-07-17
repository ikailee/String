const reverseVowels = function (s) {
    let vowels = [];
    for (let i = 0; i < s.length; i++) {
        if ((/^[aeiou]$/i).test(s[i])) {
            vowels.push(s[i]);
        }  
    }

    let length = vowels;length - 1;
    let sArr = s.split('');
    for (let j = 0; j < sArr.length; j++) {
        if ((/^[aeiou]$/i).test(sArr[j])) {
            sArr[j] = vowels[length--];
        }  
    }

    return sArr.join('');
}