var vjezbeDivs = [];
const StudentAjax = (function (){


var dodajStudenta = function (student, fnCallback) {

//console.log(student);

var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200){
        var odgovor = JSON.parse(ajax.responseText);
        const odgovorServera = document.getElementById("ajaxstatus");
        odgovorServera.innerHTML = odgovor.status;
        var jsonRez = JSON.parse(ajax.responseText);
        fnCallback(null,jsonRez);
    }
    else if (ajax.readyState == 4){
      var odgovor = JSON.parse(ajax.responseText);
      const odgovorServera = document.getElementById("ajaxstatus");
      odgovorServera.innerHTML = odgovor.status;
      var jsonRez = JSON.parse(ajax.responseText); 
      fnCallback(jsonRez.data,null);
    }
}

ajax.open("POST","http://localhost:3000/student",true);
ajax.setRequestHeader("Content-Type", "application/json");
ajax.send(JSON.stringify(student));
//alert("Uspjesno ste dodali studenta. ");
document.getElementById("ajaxstatus").innerHTML = ajax.responseText.status;
}

var postaviGrupu = function (index,grupa,fnCallback) {
    console.log("indeks i grupa " + index, grupa);


var ajax = new XMLHttpRequest();
var objekat = {
  indeks:index,
  grupa:grupa
}
ajax.onreadystatechange = function() {// Anonimna funkcija
    if (ajax.readyState == 4 && ajax.status == 200){
      var odgovor = JSON.parse(ajax.responseText);
      const upisUHtml = document.getElementById("ajaxstatus");
      upisUHtml.innerHTML = odgovor.status;
        var jsonRez = JSON.parse(ajax.responseText);
        fnCallback(null,jsonRez);
    }
    else if (ajax.readyState == 4){
      var odgovor = JSON.parse(ajax.responseText);
      const upisUHtml = document.getElementById("ajaxstatus");
      upisUHtml.innerHTML = odgovor.status;
      var jsonRez = JSON.parse(ajax.responseText); 
      fnCallback(jsonRez.data,null);
    }
}

ajax.open("PUT","http://localhost:3000/student/" + index,true);
ajax.setRequestHeader("Content-Type", "application/json");
ajax.send(JSON.stringify(objekat));
document.getElementById("ajaxstatus").innerHTML = ajax.responseText.status;
} 

var dodajBatch = function(csvStudenti,fnCallback) {
    console.log("OVO je ajax " + csvStudenti);

    
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
        if (ajax.readyState == 4 && ajax.status == 200){
          var odgovor = JSON.parse(ajax.responseText);
          const upisUHtml = document.getElementById("ajaxstatus");
          upisUHtml.innerHTML = odgovor.status;
            var jsonRez = JSON.parse(ajax.responseText);
            fnCallback(null,jsonRez);
        }
        else if (ajax.readyState == 4){
          var odgovor = JSON.parse(ajax.responseText);
          const upisUHtml = document.getElementById("ajaxstatus");
          upisUHtml.innerHTML = odgovor.status;
          var jsonRez = JSON.parse(ajax.responseText); 
          fnCallback(jsonRez.data,null);
        }
    }
    if (csvStudenti == "") {
        document.getElementById("ajaxstatus").innerHTML = "Polje ne smije biti prazno. Molimo unesite csv file";
      return;
    }
    ajax.open("POST","http://localhost:3000/batch/student",true);
    ajax.setRequestHeader("Content-Type", "text/plain");
    ajax.send(csvStudenti);
    document.getElementById("ajaxstatus").innerHTML = ajax.responseText.status;
}

return {
  dodajStudenta : dodajStudenta,
  postaviGrupu: postaviGrupu,
  dodajBatch: dodajBatch
}


}());
