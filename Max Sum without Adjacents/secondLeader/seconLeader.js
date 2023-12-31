class Solution {
    print2largest(arr, n) {
let max = arr[0]
        for(let i = 1 ; i < n;i++){
           if(arr[i] > max){
            max = arr[i]
           }
        }
let second= 0 
let isFound = false 
for(let i=0 ;i < n ;i++){
        if(second < arr[i] && arr[i]<max){
            second = arr[i]
            isFound= true
        }
if(!isFound){return -1}
}
        return second
    }
}

let sol = new Solution()
console.log(sol.print2largest([22,22,22],3));