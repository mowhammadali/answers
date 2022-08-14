export function encoder(inputString , repeatCount){

    let result = null;
    let str = inputString;

    for(let i = 1; i <= repeatCount; i++){

        let encoderArray = [];
    
        const arr = str.split(``);
    
        const lastItem = arr.pop();
        arr.unshift(lastItem);
    
        arr.forEach(item => {
            let code = item.charCodeAt();
            if(code >= 122){
                code = 96;
            }
            encoderArray.push(String.fromCharCode(code + 1))
            str = encoderArray.join(``);
        })
    }

    result = str;

    return result;
}




