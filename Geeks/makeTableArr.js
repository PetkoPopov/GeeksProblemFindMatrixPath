function makeTableArr(n, m) {
    let arr = []
    for (let i = 0; i < n * m; i++) {

        arr.push(i)
    }
    return arr
}
module.exports = makeTableArr