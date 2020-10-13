module.exports = function reverse (n) {
    const absN = String(Math.abs(n))
    let res = ''
    for (let i = absN.length - 1; i >= 0; i--) {
        res += absN[i]
    }
    return Number.parseInt(res)
}