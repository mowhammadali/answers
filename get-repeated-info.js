export function getRepeatedInfo(number){

    let result;

    let obj = {};

    const arr = String(number).split(``);

    arr.forEach(item => {

        const newItem = +(item);
        
        const length = arr.filter(num => num == item).length;

        let nums = [];

        for(let i = 0; i <= ((newItem * length) - 1); i++){
            nums.push(String(newItem));
        }

        const sequence = nums.join(``);

        obj[newItem] = sequence;
 
    })

    result = obj;

    return result;
}

