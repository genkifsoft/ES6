function getCourse(name, price, free) {
    return { name,
            price,
            free,
        showInfor1: function()  {
            console.log(`${name+" - " + price + " - " + free}`);
        },

        showInfor2($delimiter="-") {
            console.log(`${name + $delimiter + price + $delimiter + free}`);
        }
    }
}
var myCouse = getCourse('ES6', 20, false);
myCouse.showInfor2();
console.log(myCouse);