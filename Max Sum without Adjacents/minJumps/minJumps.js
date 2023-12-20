class Solution {
    minJumps(arr, n) {
        let arrPaths = [[0]]
        if (arr[0] == 0) return -1
        for (let r = 0; r < n; r++) {
            let hlpArr = []

            for (let i = 0; i < arrPaths.length; i++) {
                let e = []
                arrPaths[i].forEach(element => { e.push(element) })
                let lastOfEl = e[e.length - 1]
                let lastOfArr = arr[lastOfEl]
                if (lastOfEl + lastOfArr >= n) {
                    console.log(`steps nomer ${r} !`);
                    return [r, e]
                } else {
                    //make last of arr arrays

                    for (let y = 0; y < lastOfArr; y++) {
                        // [3,4,5,6,7,8,76,5,9] 

                        e.push(lastOfEl + y + 1)
                        let hlp = []
                        e.forEach(g => {
                            hlp.push(g)
                        })
                        hlpArr.push(hlp)
                        e.pop()
                    }//end second for
                }//end if
            } //end for  
            arrPaths = hlpArr

        }
        return arrPaths
    }//end method 
}//end class
let s = new Solution()
console.log(s.minJumps([1, 3, 1, 8, 1, 2, 1, 7, 1, 8, 9, 1, 3, 4, 3, 2, 1, 3], 18))