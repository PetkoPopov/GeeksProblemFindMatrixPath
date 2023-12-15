export default function calcSum(table) {
    //table.result => paths
    // table.matrix => values

    // let sumCurrent = 0
    let arrSum = []
    table.result.forEach(e => {
        //[0,7,11,16,24]
       let  sumCurrent = 0
        e.forEach(n => { //7 col = 7%col row=math.floor(7/col)
            sumCurrent += table.matrix[Math.floor(n / table.col)][n % table.col]
            // console.log('boxnumber=>',n,'--->',n % table.col, '//',Math.floor(n / table.col));            
            // console.log(table.matrix[n % table.col][Math.floor(n / table.col)], '--->boxNumber==>', n);
        })

        arrSum.push({ sum: sumCurrent, path: e.join('_') , arr:e })
    })
    // console.log(table.matrix);
    // console.log(arrSum);
    arrSum.sort((a,b)=>{
        if(a.sum >b.sum) {return -1} else {return 1} 
    })
    // console.log(arrSum);
    table.pathMaxSum = arrSum[0]
    table.pathMinSum = arrSum[arrSum.length-1]
    return arrSum
}