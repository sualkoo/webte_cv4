function checkX(){
    var x = document.getElementById("x");
    if ((x.value>9)||(x.value<1)){
        document.getElementById("submit").disabled=true;
        document.getElementById("tip").style.display='block';
        return false;
    }
    else{
        document.getElementById("submit").disabled=false;
        document.getElementById("tip").style.display='none';
        return true;
    }
}
function checkY(){
    var y = document.getElementById("y");
    if ((y.value>9)||(y.value<1)){
        document.getElementById("submit").disabled=true;
        document.getElementById("tip2").style.display='block';
        return false;
    }
    else{
        document.getElementById("submit").disabled=false;
        document.getElementById("tip2").style.display='none';
        return true;
    }
}
function checkXY(){
    if(checkX() && checkY() == true){
        document.getElementById("submit").disabled=false;
    }
    else{
        document.getElementById("submit").disabled=true;
    }
}

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose= document.querySelector('.modal-close');
modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
}); 
modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateTable(){
    removeAllChildNodes(document.getElementById("table"));
    var table = document.createElement("table");
    document.getElementById("table").appendChild(table);

    var width = +document.getElementById("x").value;
    var height = +document.getElementById("y").value;

    for(let i = 0; i < (height + 1); i++){
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for(let j = 0; j < (width + 1); j++){
            var td = document.createElement('td');
            tr.appendChild(td);
            if ((i == 0) && (j == 0)){
                td.innerText = 'X,Y';}                
                else if ((i == 0) || (j == 0)){
                    if (i == 0){
                        td.style.fontWeight = 600;
                        td.innerText = j;
                    }
                    if (j == 0){
                        td.style.fontWeight = 600;
                        td.innerText = i;
                    }
                }
            else td.innerText = (i) * (j);
        }
    }
}