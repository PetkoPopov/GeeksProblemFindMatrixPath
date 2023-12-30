
class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n) {
        // code here
        let result = []
        for (let u = 0; u < n - 1; u++) {
            let isLeader = true
            for (let i = u + 1; i < n; i++) {
                if (arr[i] && arr[u] < arr[i]) {
                    isLeader = false
                    break
                }
            }
            if (isLeader) { result.push(arr[u]) }
        }//end for
        result.push(arr[n - 1])
        return result
    }
}