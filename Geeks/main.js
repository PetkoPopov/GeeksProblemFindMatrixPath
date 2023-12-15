import Table from './makeTable.js'
import showValue from './showValue.js'

const btn = document.getElementById('btn')
btn.addEventListener('click', () => { whenClicked() })

function whenClicked() {
    let matrix = new Table()
    for (let y = 0; y < matrix.row; y++) {
        matrix.globalArr = [[y * matrix.col]]
        for (let i = 0; i < matrix.col; i++) {
            matrix.algoritam()
        }
        matrix.globalArr.forEach(e => {
            matrix.result.push(e)
        })
    }
    // console.log(matrix.result);
    showValue(matrix)
    
}

