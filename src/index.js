module.exports = function reverse (n) {
    let result = '';
    let str = String(n);
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != '-') {
            result += str[i];
        }
    }

    return result;
}
