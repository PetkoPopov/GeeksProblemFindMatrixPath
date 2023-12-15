import calcSum from "./calcSum.js"
export default function showValue(table) {
    let btnShowValue = document.getElementById('showValue')
    let tdCollection = document.getElementsByTagName('td')
    // console.log(tdCollection);
    let count = 0
    btnShowValue.addEventListener("click", () => {
        count++
        for (let i = 0; i < table.row; i++) {
            for (let y = 0; y < table.col; y++) {
                if (count % 2 == 0) { tdCollection[i * table.col + y].innerHTML = table.matrix[i][y] }
                else { tdCollection[i * table.col + y].innerHTML = i * table.col + y }
            }
        }
        calcSum(table)
        console.log(table.pathMinSum , table.pathMaxSum);
    })

}