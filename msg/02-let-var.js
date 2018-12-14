function drawShape(){
    var click = 0;
    var myContent = document.getElementById('myContent');
    for(let i = 1; i <= 10; i++)
    {
       var elmP = document.createElement('p');
       elmP.className = 'buttonShape'
       elmP.innerHTML = i;
       elmP.onclick = function() {
           click ++;
           if (click != 0)
                $('p').removeClass('selected')
            $(this).addClass("selected");
       }
       myContent.appendChild(elmP);
    }
}

function clearShape() {
    document.getElementById('myContent').innerHTML = '';
}