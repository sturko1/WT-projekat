var odabirVjezbe, zajednicki;

function pomocna1(error, data) {
    if (error == null) {
        console.log(data);
        VjezbeAjax.iscrtajVjezbe(odabirVjezbe, data);
    }
    else {
        console.log(error, data);
    }
}



window.onload = function() {
    //console.log("Provjera ");
    odabirVjezbe = document.getElementById("odabirVjezbe");
    zajednicki=document.getElementById("zajednicki");
    //console.log(pomocna1);
    VjezbeAjax.dohvatiPodatke(pomocna1);
}