class Solution {

    duplicates(a, nn) {
        //7 ,6 ,8 ,4 ,9, 8, 4 ,7,4 ,4
        let n = a.length
        let result = []
        let count = -1
        for (let i = 0; i < n; i++) {
            let hlp = a[n - i - 1]
            a[n - 1 - i] = '@'
            let isFound = false
            for (let r = 0; r < n - i - 1; r++) {
                if (a[r] === hlp && a[r] != '@' && hlp != '@') {
                    a[r] = '@'
                    if (!isFound) {
                        count++
                        let isSorted = false
                        if (result.length == 0) { result[count] = hlp } else {

                            for (let p = 0; p < result.length; p++) {
                                if (hlp < result[p]) {
                                    for (let y = result.length; y >= p; y--) {
                                        result[y] = result[y - 1]
                                    }
                                    result[p] = hlp
                                    isSorted = true
                                    break
                                }
                            }
                        }
                        if (!isSorted) { result[count] = hlp }
                    }
                    isFound = true
                }
            }
        }
        if(result.length == 0){return -1}
        else  {return result}

    }
}
let sol = new Solution()
console.log(sol.duplicates([3, 4, 12, 3, 0,0,1111,1111,12, 3,33,33,33,1111,33, 4, 4, 12, 7, 11, 6, 5, 99, 123, 123, 45, 43, 43, 55, 55, 55, 22, 22, 90, 45, 90, 90, 123, 1, 1, 1, 2, 12, 12, 3, 3], 13));  