function showInfo(name = 'angular', price = 10) {
    return `Course ${name}, price: ${price}`;
}

let dom = document.getElementById('myContent');
dom.innerHTML = showInfo();