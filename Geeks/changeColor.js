export default function changeColor(table){

    // table.pathMinSum.arr // [1,3,12,22]
    let allTd= document.getElementsByTagName('td')
    console.log(allTd);
    for (let index = 0; index < allTd.length; index++) {
        const element = allTd[index];
        element.style.backgroundColor ="aquamarine"
        
    }
    table.pathMinSum.arr.forEach(e => {
        allTd[e].style.backgroundColor = 'red'
    })
    table.pathMaxSum.arr.forEach(e => {
        allTd[e].style.backgroundColor = 'green'
    })
}