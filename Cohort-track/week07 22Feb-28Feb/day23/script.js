// const elements = {};

// function getElementByID(...ids) {
//     ids.forEach(id => {
//         elements[id] = document.getElementById(id);
//     });
// }

function genIdNamesStr(times, called) {
    let str ="";
    for(let i = 1; times >= i; i++){
        const word = `"${called+i}",`;
        str = str+=word;
    }
    let finalStr = str.slice(0, -1);
    return finalStr
}

console.log(genIdNamesStr(10,"btn"));
//getElementByID(genIdNamesStr(10,"btn"))
//console.log(elements);

// i want to create a funcation that create all btns in global scope ,
// without write for each document.getElementById
// How ????????