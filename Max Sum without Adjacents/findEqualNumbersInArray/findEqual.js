class Solution {

    duplicates(a,n) {
        //7 ,6 ,8 ,4 ,9, 8, 4 ,7,4 ,4
        // let n = a.length
        let result = []
        for (let i = 0; i < n; i++) {
            let element = a.pop()
            if (a.includes(element)) {
                result.push(element)
                a = a.filter(el => {
                    return el !== element
                })
            }
        }

        let resultSort = []
        let ln = result.length
        for (let r = 0; r < n; r++) {
            let min = result[0]
            let index = 0;
            for (let i = 1; i < result.length; i++) {
                if (min > result[i]) {
                    min = result[i]
                    index = i
                }
            }
            // console.log('smallest index ', index, "smallest num ", min);
            result.splice(index, 1)
            // console.log(`result === > ${result}`);
            resultSort.push(min)

            if (resultSort.length == ln) break
        }
        // resultSort.push(result[0])
        return resultSort
    }
}
let sol = new Solution()
console.log(sol.duplicates([3, 4, 12, 3, 12, 3, 4, 4, 12, 7, 11, 6, 5, 99, 123, 123, 45, 43, 43, 55, 55, 55, 22, 22, 90, 45, 90, 90, 123, 1, 1, 1, 2, 12, 12, 3, 3], 13));