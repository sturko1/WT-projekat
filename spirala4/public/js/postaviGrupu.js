function vracaObjekat3(DOMobjekat) {
    console.log("dom objekat ok");
    var indeksO = document.getElementById("indeksStudenta").value;
    var grupaO = document.getElementById("novaGrupa").value;

    StudentAjax.postaviGrupu(indeksO, grupaO, pomocna4);
}

function pomocna4(error,data){
    console.log(error, data);
}

window.onload = function(){
    document.getElementById("btn-postavi").addEventListener("click", function(){vracaObjekat3(document.getElementById('unos').value)});
}