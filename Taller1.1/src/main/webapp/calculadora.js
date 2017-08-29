//javascript Omar Sisa Niño - Harold Parra Gonzales-  Juan Pablo Cuenu
var pantalla;
window.onload = function () {
   pantalla = document.getElementById('pantalla');
}

function writeNumber(n){
    pantalla.innerHTML=pantalla.textContent==0?n:pantalla.textContent+n
};
function writeOperator(n){
    var text = pantalla.textContent;
    pantalla.innerHTML=$.isNumeric(text.slice(-1))?text+n:text;
};

function comma(){
    var text = pantalla.textContent;
    var numbers = text.split(/[+*\-/]/);
    if (!numbers[numbers.length-1].includes('.') && numbers[numbers.length-1]!="") {
        pantalla.innerHTML=text+'.';
    }
};

function BorrarTodo(){
    pantalla.innerHTML="0";
};
function Borrar(){
    var text = pantalla.textContent;
    pantalla.innerHTML=text.length>1?text.slice(0,-1):'0';
};

function solve(){
    pantalla.innerHTML = eval(pantalla.textContent.replace(/x/g , "*"));
};
