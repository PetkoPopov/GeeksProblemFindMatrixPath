class Table {

    constructor() {
        this.globalArr = []
        this.globalArr.push([0])
        this.endAlg;
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
    /**
     * 
     * @param {*} arr [ 1,2,3, ...] 
     * @returns [ [ 1,2,3,5 ],[1,2,3,10 ],[1,2,3,1 ] ]
     */
    calcNextArr(arr) {
        // console.log(this.globalArr)
        //arr [2,5,4,6,8]
        let num = arr[arr.length - 1]
        let num1;
        if ((num + 1) % this.col != 0) {
            num1 = num + 1
        } else if((num+1)%this.col == 0){
            return false
        }

        let num2, num3
        let result = []

        if ((num1 - this.col) > 0) { num2 = num1 - this.col }
        if ((num1 + this.col) <= this.matrixSixe) { num3 = num1 + this.col }


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

    algoritam() {
        //[0]=>[0.1],[0,7]
        //foreach(calkNext();this.globalArr(push))
        //[0,1]=>[0,1,2],[0,1,8]
        //[0,7]=>[0,7,2],[0,7,8],[0,7,14]
        let globalArrCurrent = []
        this.globalArr = [[1, 11], [7, 17], [76, 87, 28],[33],[3]]
        if (this.calcNextArr(this.globalArr[0])) {
            this.globalArr.forEach(e => {
                globalArrCurrent.push(e)
            })
            this.globalArr = []
            console.log(`get thisGlobal empty ${this.globalArr}`);
            let newArr = null
            globalArrCurrent.forEach(e => {
                newArr = this.calcNextArr(e)
                this.globalArr.push(newArr)
            })

            console.log('new this.globalArr', this.globalArr);
        }else{
            this.endAlg=true
            console.log(this.globalArr);
        }
    }//end method 

}//end Class

let whenClicked = () => {
    let matrix = new Table()
    matrix.algoritam()
    // console.log(matrix.calcNextArr([76, 87, 28]));


}


