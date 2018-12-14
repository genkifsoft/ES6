// rest param
function caculate(action, ...values) {
    let result = 0;
    switch (action) {
        case '+':
            for(let value of values) result += value;
            break;

        case '-':
            for(let value of values) result -= value;
            result += values[0];
        default:
            break;
    }
    return result;
}
console.log(caculate('-', 8, 3, -2, -3));
