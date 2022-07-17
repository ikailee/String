const wordPattern = function (pattern, str) {
    var patternMap = {};
    var strMap = {};
    var strArr = str.split(' ');

    if (pattern.length != str.split(' ').length) {
        return false;
    }

    for (var i in pattern) {
        let p = pattern[i];
        let s = strArr[i];

        if (!patternMap[p]) {
            patternMap[p] = s;
        } else if (patternMap[p] != s) {
            return false;
        }

        if (!strMap[s]) {
            strMap[s] = p;
        } else if (strMap[s] != p) {
            return false;
        }
    }

    return true;
}