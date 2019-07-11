const multiplier = 100;

function rand(word){
    const decimal = Math.random();
    const timesx = decimal*multiplier;
    const final = Math.floor(timesx);

    return final + word;
}

    console.log(rand(" times"));