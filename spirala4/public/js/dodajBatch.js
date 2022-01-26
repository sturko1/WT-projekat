function vracaObjekat2(DOMobjekat) {
    console.log("ovo je dom tj csv " + DOMobjekat);
    var string = document.getElementById('csvString').value;
    StudentAjax.dodajBatch(string, pomocna2);
}

function pomocna2(error,data){
    console.log("Ovo je greska22222: " + error, data);
}

window.onload = function(){
    document.getElementById("btn-posalji").addEventListener("click", function(){vracaObjekat2(document.getElementById('unos').value)});

}