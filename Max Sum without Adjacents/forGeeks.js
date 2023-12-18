class Solution {
    findMaxSum(Arr, n) {
        let globalArrIndex = []

        //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
         if(n == 1 )return Arr[0]
         if(n == 2 )
          { 
            if(Arr[0]>Arr[1]){
                return Arr[0]
            }else{return Arr[1]}
        }

         if(n == 3 ){
            if(Arr[0]+Arr[2] > Arr[1]){return Arr[0]+Arr[1]}else{
                return Arr[2]
            }
         } 
        for (let r = 0; r < 2; r++) {

            let indexArr = [[r]]
            let finish = false
            let loop = Math.floor(n / 1.5)
            for (let u = 0; u < loop; u++) {

                let hlpGlobal = indexArr.filter((arr) => {
                    return (arr[arr.length - 1] == n || arr[arr.length - 1] == n - 1)
                })
                hlpGlobal.forEach(arr => {
                    globalArrIndex.push(arr)
                })
                let hlpIndexArr = indexArr.filter(arr => {
                    return (arr[arr.length - 1] < n - 2)
                })
                indexArr = []
                hlpIndexArr.forEach(e => {
                    indexArr.push(e)
                })
                if (indexArr.length == 0) break
                let indexArrHlp = []
                indexArr.forEach(e => {

                    let hlpArr = []
                    let hlpArr2 = []

                    e.forEach((i) => {

                        hlpArr.push(i)
                        hlpArr2.push(i)

                    })
                    if (e[e.length - 1] + 3 <= n) {
                        hlpArr2.push(e[e.length - 1] + 3)
                    }
                    if (e[e.length - 1] + 2 <= n) {
                        hlpArr.push(e[e.length - 1] + 2)
                    }
                    indexArrHlp.push(hlpArr2)
                    indexArrHlp.push(hlpArr)

                })

                indexArr = indexArrHlp
            }//end for

        }//end for loop(2)
        // console.log(globalArrIndex);
        let sum = 0
        let sumMax = 0
        globalArrIndex.forEach(pathArr => {
            sum = 0
            pathArr.forEach(arrIndexes => {
                sum += Arr[arrIndexes]
            })
            if (sumMax < sum) {
                sumMax = sum
            }

        })
        return sumMax
    }//end method

}
let s = new Solution()
console.log(s.findMaxSum([1,2], 2))
