class Solution {

    sort012(arr = [], N) {
        console.log(arr);
        let i = 0
        let index = {
            value: 0,
            find: false
        }
        let hlp = 0

        while (index.value !== arr.length - 1) {
            index.find = false
            index.value += 1
            i = index.value
            if (arr[i] == 0) {
                while (arr[i - 1] == 1 || arr[i - 1] == 2) {
                    hlp = arr[i - 1]
                    arr[i - 1] = 0
                    arr[i] = hlp
                    if (!index.find) {
                        index.value = i
                        index.find = true
                    }
                    i -= 1
                }

            }
        }
        i = index.value
        while (index.value !== 0) {
            index.find = false
            index.value -= 1
            i = index.value
            if (arr[i] == 2) {
                while (arr[i + 1] == 1 || arr[i + 1] == 0) {
                    hlp = arr[i + 1]
                    arr[i + 1] = 2
                    arr[i] = hlp
                    if (!index.find) {
                        index.value = i
                        index.find = true
                    }
                    i += 1
                }

            }
        }

        return arr
    }
}
let s = new Solution()

console.log(s.sort012([2,2,0,0,1, 1, 0, 2, 2, 0, 2, 0, 2, 1,2,2,2,2, 1,1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 1, 2, 2, 2,], 32))