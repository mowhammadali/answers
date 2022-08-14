export function operations(ops) {

    let result = null;
    let mainArray = [];
    let sum = 0;

    const array = ops.split(` `);

    array.forEach(item => {

        isNaN(+item) == false && mainArray.push(+item);

        item === "D" && mainArray.length ? 
        mainArray.push(mainArray[mainArray.length - 1] * 2) :
        null;

        item === "R" && mainArray.length ? 
        mainArray.pop(mainArray[mainArray.length - 1]) :
        null;

        item === "+" && mainArray.length >= 2 ? 
        mainArray.push(mainArray[mainArray.length - 1] + mainArray[mainArray.length - 2]) :
        null;

    })

    for(let i of mainArray){
        sum += i;
    }

    result = sum;

    return result;
    
}
