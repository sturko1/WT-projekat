var vjezbeDivs = [];
const VjezbeAjax = (function (){
  
var dodajInputPolja = function (DOMzadaci, brojVjezbi){
  DOMzadaci.innerHTML = "";
  var broj = parseInt(brojVjezbi);
  if (brojVjezbi > 15 || brojVjezbi < 1) {
    
    alert("Unijeli ste neispravne podatke. Molimo pokušajte ponovo!");
    return;
  }

 // DOMzadaci.innerHTML = "";
  for (var i = 0; i < brojVjezbi; i++) {
      
      DOMzadaci.innerHTML += '<label for = "z' + i + '" class = "labele"> Broj zadataka vježbe ' + (i+1) + ':</label>' +
      '<input type = "number" id ="z' + i +'" name = "z' + i +'" value = "4" class = "labele">'
  }
let button = document.createElement("input");   
button.setAttribute("type", "button");  
button.setAttribute("value", "Posalji");
button.setAttribute("class", "input-btn");
DOMzadaci.appendChild(button);

button.addEventListener("click",function(){ vracaObjekat(DOMzadaci)});
}


var posaljiPodatke = function (vjezbeObjekat, callbackFja) {

console.log(vjezbeObjekat);

var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {// Anonimna funkcija
    if (ajax.readyState == 4 && ajax.status == 200){
        var jsonRez = JSON.parse(ajax.responseText);
        callbackFja(null,jsonRez);
    }
    else if (ajax.readyState == 4){
      var jsonRez = JSON.parse(ajax.responseText); 
      callbackFja(jsonRez.data,null);
    }
}

var string = "";

for (var i = 0; i < vjezbeObjekat["brojVjezbi"]; i++) {
  if (i == vjezbeObjekat["brojVjezbi"] - 1) 
   string += vjezbeObjekat["brojZadataka"][i];
  else 
   string += vjezbeObjekat["brojZadataka"][i] + ",";

}

vjezbeObjekat["brojZadataka"] = string;

//location.href = "z2new.html";

ajax.open("POST","http://localhost:3000/vjezbe",true);
ajax.setRequestHeader("Content-Type", "application/json");
ajax.send(JSON.stringify(vjezbeObjekat));
window.open("http://localhost:3000/vjezbe.html");
//location.assign("http://localhost:3000/vjezbe.html"); // zbog testova nmz 
}


var dohvatiPodatke = function (fnCallback){
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function(){
  if (ajax.readyState == 4 && ajax.status == 200){
    let jsonRez = JSON.parse(ajax.responseText); 
    let brojVjezbi=jsonRez.brojVjezbi;
    let zadaci=jsonRez.brojZadataka;
    let pogresni=[];
    if(brojVjezbi<1 || brojVjezbi>15){
        pogresni.push("brojVjezbi");
        
    }
    
    for(var i=0; i<zadaci.length; i++){
        if(zadaci[i]<0 || zadaci[i]>10){
            pogresni.push(zadaci[i]);
        }
    }
     if(brojVjezbi!=zadaci.length){
        pogresni.push("brojZadataka");
    }

    let objekat={
      status:'error',
      data:pogresni
  }
  
  if(pogresni.length>0) {
    res.send(JSON.stringify(objekat));
    res.status(404);
    return;
}
    fnCallback(null,jsonRez);
  }

else if (ajax.readyState == 4 && ajax.status==404){
  let jsonRez = JSON.parse(ajax.responseText); 
  fnCallback(jsonRez.data,null);
  console.log(jsonRez);
}
  }
  ajax.open("GET","http://localhost:3000/vjezbe",true);
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send();

}


var iscrtajVjezbe = function(odabirVjezbe,objekat){
  vjezbeDivs = []; 

  var brojV=objekat.brojVjezbi;
  var brojZ=objekat.brojZadataka;
  /*  if(brojV>15 || brojV<=0){
     console.log("Pogresan broj vjezbi");
     return ;
   } */

   for(let i=0; i<brojV; i++){
      let divVjezbe=document.createElement("div");
      divVjezbe.setAttribute("id", "divVjezbe"+(i+1));
      divVjezbe.setAttribute("class", "zadaci");
      divVjezbe.hidden = true; 

      let button = document.createElement("input");   
      button.setAttribute("type", "button");  
      button.setAttribute("id","vjezbe"+(i+1));
      button.setAttribute("value", "Vjezba"+(i+1));
      button.setAttribute("class", "dugmadVjezbe");
      odabirVjezbe.appendChild(button);
      odabirVjezbe.appendChild(divVjezbe);
      vjezbeDivs.push(divVjezbe); 
    button.addEventListener("click",function(){ VjezbeAjax.iscrtajZadatke(divVjezbe,parseInt(brojZ[i]))}); 
  
  
     }
  }
/* }
var myFunction = function (divName) {
  
  if ((document.getElementById(divName)).getAttribute("style") == "display:none") {
    console.log("nije");
    (document.getElementById(divName)).setAttribute("style", "display:block");
  } else {
    console.log("jeste");
    (document.getElementById(divName)).setAttribute("style", "display:none");
  }
} */
/*
var iscrtajZadatke2 = function (vjezbe, brojZadataka, brojVjezbi, vjezbaPoRedu){
  for (let j = 0; j < brojVjezbi; j++) {
    if (j != vjezbaPoRedu && document.getElementById("vjezbe"+(j+1))!=null) {
      if (document.getElementById("vjezbe"+(j+1)).clicked == true) {
        document.getElementById("divVjezbe"+(j+1)).setAttribute("style", "display:none");
      }
      //zatvori ove ostale 
    }
  }
    iscrtajZadatke(vjezbe, brojZadataka);
} 
*/
var iscrtajZadatke = function (vjezbe, brojZadataka){ 
  
  vjezbe.innerHTML="";
  if(brojZadataka>=1 && brojZadataka<=15){
    for(let i = 0; i<vjezbeDivs.length; i++){
        if(vjezbeDivs[i].getAttribute("id") == vjezbe.getAttribute("id")){ 
          let vidiljivost = vjezbe.hidden; 
          if(vidiljivost){                
            vjezbeDivs[i].hidden = false; 
          }
          else {
            vjezbeDivs[i].hidden = true; 
          } 
        }  
        else
        vjezbeDivs[i].hidden = true; 
    }

    for(let i=0; i<brojZadataka; i++){
        let button = document.createElement("input");   
        button.setAttribute("type", "button");  
        button.setAttribute("id","z"+(i+1));
        button.setAttribute("value", "Zadatak"+(i+1)); 
        button.setAttribute("class", "dugmadZadaci");
        vjezbe.appendChild(button);    
    }  
  }
  else {
    vjezbe.innerHTML="";
  }
} 

return {
  dodajInputPolja : dodajInputPolja,
  dohvatiPodatke : dohvatiPodatke,
  posaljiPodatke : posaljiPodatke,
  iscrtajVjezbe : iscrtajVjezbe,
  iscrtajZadatke : iscrtajZadatke,
  //iscrtajZadatke2 : iscrtajZadatke2,
  //myFunction : myFunction
}


}());