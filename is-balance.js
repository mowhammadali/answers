export function isBalance(input){

    let result = null;

    const arr = input.split(``);

    const filter1 = arr.filter((item) => item === `(`);
    const filter2 = arr.filter((item) => item === `)`);
    const filter3 = arr.filter((item) => item === `[`);
    const filter4 = arr.filter((item) => item === `]`);
    const filter5 = arr.filter((item) => item === `{`);
    const filter6 = arr.filter((item) => item === `}`);

    const exist1 = arr.includes(`(`) || arr.includes(`)`) 
    ? filter1.length === filter2.length 
    : true;

    const exist2 = arr.includes(`[`) || arr.includes(`]`) 
    ? filter3.length === filter4.length
    : true;
    
    const exist3 = arr.includes(`{`) || arr.includes(`}`) 
    ? filter5.length === filter6.length 
    : true;

    result = exist1 && exist2 && exist3;

    return result;
}

