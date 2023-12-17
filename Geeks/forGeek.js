class Solution {
    findMaxSum(M, row, col) {
        let arr = M
        let n = row
        let m = col
        let allPats = []
        let pathsArrCurrent = []

        for (let y = 0; y < n; y++) {
            let pathsArr = [[y * m]]
            for (let index = 0; index < m - 1; index++) {

                pathsArr.forEach(arrPath => {

                    let num = arrPath[arrPath.length - 1]
                    let num1;
                    if ((num + 1) % m != 0) {
                        num1 = num + 1
                    }
                    let num2, num3
                    if ((num1 - m) > 0) { num2 = num1 - m }
                    if ((num1 + m) <= n * m) { num3 = num1 + m }
                    let arr1 = [];
                    let arr2 = [];
                    let arr3 = [];
                    arrPath.forEach(element => {
                        arr1.push(element)
                        arr2.push(element)
                        arr3.push(element)
                    });
                    if (num1 || num2 || num3) {

                        if (num1) {
                            arr1.push(num1)
                            pathsArrCurrent.push(arr1)
                        }
                        if (num2) {
                            arr2.push(num2)
                            pathsArrCurrent.push(arr2)
                        }
                        if (num3) {
                            arr3.push(num3)
                            pathsArrCurrent.push(arr3)
                        }
                    }

                })//end forEach
                if (pathsArrCurrent.length == 0) break
                pathsArr = pathsArrCurrent
                pathsArrCurrent = []
            }//end for 
            pathsArr.forEach(e => { allPats.push(e) })
        }

        let sumTotal = 0
        let sumPath = []
        let sumMax = { sum: 0, path: [] }
        allPats.forEach(e => {
            sumTotal = 0
            sumPath = []
            e.forEach(nPath => {
                let a, b;
                a = nPath % m//col
                b = Math.floor(nPath / m)//row
                sumTotal += arr[b][a]
                sumPath.push([b, a])
            })
            if (sumTotal >= sumMax.sum) {
                sumMax.sum = sumTotal
                sumMax.path = sumPath

            }
        })
        console.log(sumMax)
        return sumMax.sum
        console.log(sumMax);
    }//end method
}
let solution = new Solution()
arr = [
    [1, 3, 1, 5],
    [2, 2, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 1, 2]
]
solution.findMaxSum(arr, 4, 4)