const longestCommonPrefix = function (strings) {
    if (strs == null || strs.length == 0) return "";

    let same = strings[0];

    for (let i = 1; i < strings.length; i++) {
        let str = strings[i];

        let j = 0;
        for (j = 0; j < same.length; j++) {
            if (same[j] != str.charAt(j)) {
                break;
            }
        }

        same = same.slice(0, j);
    }

    return same;
}