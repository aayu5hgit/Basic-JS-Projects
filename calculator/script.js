function display(value){
    document.getElementById('textarea').value += value;
}

function calculate(){
    let value = document.getElementById('textarea').value;
    let ans = eval(value);
    document.getElementById('textarea').value = ans;
}

function clr(){
    let clr = '';
    document.getElementById('textarea').value = clr;
}