class Solution {
    kthSmallest(arr, l, r, k) {

        let min
        let sort = false
        for (let y = 0; y < k; y++) {
            min = 1000000000
            sort = false
            for (let i = l; i <= r; i++) {
                if (arr[i] != '@' && min > arr[i]) { min = arr[i]; sort = true }
            }
            if (sort) {

                for (let i = l; i < r; i++) {
                    if (arr[i] == min) { arr[i] = '@' }
                }
            }
        }
        if (!sort) { return -1 }
        return min
    }
}
let sol = new Solution
console.log(sol.kthSmallest([73, 188, 894, 915, 940, 616, 900, 548], 0, 8, 7));