const reverse = function(s) {
    let result = "";
    let arr = s.split('');

    for (let i = arr.length - 1; i >= 0; i--) {
        result = result + arr[i];
    }

    return result;
}