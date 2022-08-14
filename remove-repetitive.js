export function removeRepetitive(string){

    let result = null;
    const array = string.split(``);

    const reducer = array.reduce((unique, item) => {

        return unique[unique.length - 1] === item ? unique : [...unique , item];
    });

    return result = reducer.join(``);
}


