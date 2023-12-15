class Table {

    constructor() {

        let row = 0;
        let col = 0;
        let matrixSixe;
        let div = document.getElementById('content')
        let table = document.getElementById('for-remove')
        if (table) { div.removeChild(table) }
        let num_1 = document.getElementById('num_1').value
        let num_2 = document.getElementById('num_2').value
        this.makeTable(num_1, num_2)
        this.row = Number(num_1)
        this.col = Number(num_2)
        this.matrixSixe = this.row * this.col - 1
    }

    makeTable(num_1, num_2) {
        let div = document.getElementById('content')
        let table = document.createElement("table")
        table.setAttribute('id', 'for-remove')
        for (let index = 0; index < num_1; index++) {
            let tr = document.createElement('tr')
            for (let y = 0; y < num_2; y++) {
                let td = document.createElement('td')
                td.innerHTML = index * num_2 + y
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
        div.appendChild(table)
    }

    calcNextArr(arr) {

        //arr [2,5,4,6,8]
        let num = arr[arr.length - 1]
        let num1 = num + 1

        let num2, num3
        let result = []

        if ((num1 - this.col) > 0) { num2 = num1 - this.col }
        if ((num1 + this.col) < this.matrixSixe) { num3 = num1 + this.col }


        let arr1 = [];
        let arr2 = [];
        let arr3 = [];

        arr.forEach(element => {
            arr1.push(element)
            arr2.push(element)
            arr3.push(element)
        });

        if (num1) {
            arr1.push(num1)
            result.push(arr1)
        }
        if (num2) {
            arr2.push(num2)
            result.push(arr2)
        }
        if (num3) {
            arr3.push(num3)
            result.push(arr3)
        }

        return (result)
    }

}

let whenClicked = () => {
    let matrix = new Table()
    console.log(
        matrix.calcNextArr([4, 15, 4,16,34,1,0])
    );
}


