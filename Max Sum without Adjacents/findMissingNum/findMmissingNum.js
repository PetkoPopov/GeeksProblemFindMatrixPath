class Solution {
    missingNumber(array, n) {
        
        let sum = 0
        array.forEach(e=>{
            sum+=e
        })
        let num = ((n+1)*n)/2
        return num-sum
    }
}
let sol =new Solution()
console.log(sol.missingNumber([1,2,4],4))