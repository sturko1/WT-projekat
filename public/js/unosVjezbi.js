function vracaObjekat(DOMobjekat) {
    console.log(DOMobjekat);
    var brojvjezbi = document.getElementById("brojVjezbi").value;
  
    var zadaci = [];
    for (var i = 0; i < brojvjezbi; i++) {
        zadaci[i] = document.getElementById("z"+i).value;
        if (zadaci[i] < 0 || zadaci[i] > 10) {
            alert("Unijeli ste neisprane podatke. Molimo pokušajte ponovo!");
            return;
        }
    }

    var objekat = {
        brojVjezbi: brojvjezbi,
        brojZadataka : zadaci
    }
    VjezbeAjax.posaljiPodatke(objekat, pomocna1);
}


function pomocna1(error,data){
    console.log(error, data);
}

window.onload = function(){
    document.getElementById("btn-submit").addEventListener("click", function(){VjezbeAjax.dodajInputPolja(document.getElementById('zadaci'), document.getElementById('brojVjezbi').value)});
}
