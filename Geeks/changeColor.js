export default function changeColor(table){

    // table.pathMinSum.arr // [1,3,12,22]
    let allTd= document.getElementsByTagName('td')
    table.pathMinSum.arr.forEach(e => {
        allTd[e].style.backgroundColor = 'red'
    })
    table.pathMaxSum.arr.forEach(e => {
        allTd[e].style.backgroundColor = 'green'
    })
}