class Solution {

    duplicates(a, nn) {
        //7 ,6 ,8 ,4 ,9, 8, 4 ,7,4 ,4
        let n = a.length
        let result = []
        let count = -1
        for (let i = a.length - 1; i >= 0; i--) {
            if (a[i] || a[i]==0) {

                let hlp = a[i]
                delete a[i]
                let isFound = false
                for (let r = 0; r < i; r++) {
                    if (a[r] === hlp ) {
                        delete a[r]
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
        }
        if (result.length == 0) { return -1 }
        else { return result }

    }
}
let sol = new Solution()
console.log(sol.duplicates([0,5,4,3,0,2,0], 13));  