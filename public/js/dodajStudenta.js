function vracaObjekat(DOMobjekat) {
    console.log(DOMobjekat);
    var imeO = document.getElementById("imeStudenta").value;
    var prezimeO = document.getElementById("prezimeStudenta").value;
    var indeksO = document.getElementById("indeksStudenta").value;
    var grupaO = document.getElementById("grupaStudenta").value;

    var objekat = {
        ime: imeO,
        prezime: prezimeO,
        indeks: indeksO,
        grupa : grupaO

    }
    StudentAjax.dodajStudenta(objekat, pomocna3);
}

function pomocna3(error,data){
    console.log(error, data);
}

window.onload = function(){
    document.getElementById("btn-dodaj").addEventListener("click", function(){vracaObjekat(document.getElementById('unos').value)});
}