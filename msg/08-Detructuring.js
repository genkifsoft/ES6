let arrayData = [123, 'ES6', false];

// let [id, names, status] = arrayData;
// console.log(names);

let objectDetructuring = {
    id: 1,
    names: "Detructuring" ,
    free: false,
    createby: 'user'
}
// Destructuring object. Map key with object defined
let {id, names, free, createby = "admin"} = objectDetructuring;
console.log('name', +' - '+ names + ' - createBy: '+ createby);


