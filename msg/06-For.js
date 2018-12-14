let todoArray = [
    "Play Football",
    "Coding",
    "Stydy Tyscpit"
];

// console.log(todoArray);
// todoArray.forEach(element => {
//     console.log(element);
// });

// for in
// for(let index in todoArray)
//     console.log(index +': '+ todoArray[index]);

let todoObj = {
    id: 1,
    name: "Play football",
    status: false
};

// for in
for(let index in todoObj)
    console.log(index + ':'+ todoObj[index]);

// for of. With one object not be use for of to eatch item. Not true
for(let pro of todoObj)
    console.log(pro);
