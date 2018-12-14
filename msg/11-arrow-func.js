function func01(names, age) {
    return `func01 My name is ${names}, ${age} years old`;
}

let func02 = function (names, age) {
    return `func02 My name is ${names}, ${age} years old`;
}


let func03 = (names, age) => {
    return `func03 My name is ${names}, ${age} years old`;
}

let func04 = (names, age) => 
    `func04 My name is ${names}, ${age} years old`;


let func05 = x => {
    return x*x;
}

console.log(func05(5));