var TestoviParser=(function(){
    var dajTacnost=function(ulaz) {
        try {
         var objekat = JSON.parse(ulaz);
 
         var Rezultat = {
             "tacnost": "vrijednost",
             "greske": []
         }
 
         var brojTestova = objekat.stats.tests;
         var testoviProsli = objekat.stats.passes;
         var testoviPali = objekat.stats.failures;
         var procenat=(testoviProsli/brojTestova)*100;
 
         if (procenat%10 == 0) {
            Rezultat.tacnost=procenat+"%";
 
         } else {
            Rezultat.tacnost=procenat.toFixed(1)+"%";
         }
 
         for(let i=0; i<objekat.failures.length; i++){
             Rezultat.greske.push(objekat.failures[i].fullTitle); 
          }
 
         console.log(Rezultat);
         return Rezultat;
     }
 
 catch (error) {
 
     var RezultatError={
          "tacnost": "0%",
          "greske": ["Testovi se ne mogu izvrsiti"]
      }
         console.log(RezultatError);
         return RezultatError;
       }
 }
  
 //3 zadatak 
 var porediRezultate=function(rezultat1,rezultat2){
     try {
        var rezultat1=JSON.parse(rezultat1);
        var rezultat2=JSON.parse(rezultat2);

        var objekat = {
            "promjena": "vrijednost",
            "greske": []
        }

        var jednaki = 0;

        if (rezultat1.stats.tests == rezultat2.stats.tests) {
            for (var i = 0; i < rezultat1.stats.tests; i++) {
                if (rezultat1.tests[i].fullTitle == rezultat2.tests[i].fullTitle) {
                    jednaki = 1;
                }
                else {
                    jednaki = 0; 
                    break;
                }
            }
        }
        else {
            jednaki = 0;
        }


    if (jednaki == 1) {

        var objekat2 = dajTacnost(JSON.stringify(rezultat2));
        objekat.promjena = objekat2.tacnost;
        
        objekat.greske = objekat2.greske;
        objekat.greske.sort();

    } else {
        //vrijednost
    
        var rezultujuciNiz = []; // testovi koji padaju u rezultat1 a nema ih u rezultat2

        for (var i = 0; i < rezultat1.failures.length; i++) {
            if (!(rezultat2.tests.find(element => element.fullTitle == rezultat1.failures[i]))) 
                rezultujuciNiz.push(rezultat1.failures[i]); 
        }

        /* 
        console.log("provjera")
        console.log(rezultujuciNiz.length)
        console.log(rezultat2.failures.length)
        console.log(rezultat1.failures.length)
        console.log(rezultujuciNiz.length)

        var x = rezultujuciNiz.length + rezultat2.failures.length;
        var y = rezultat2.tests.length + rezultujuciNiz.length;
        let z = x/y;
        console.log(z);*/

        objekat.promjena = (rezultujuciNiz.length + rezultat2.failures.length) /
         (rezultat2.tests.length + rezultujuciNiz.length) * 100 + "%";
        //console.log(objekat.promjena)

        //niz gresaka
        
        

        //greske samo u rezultatu2
        var rezultujuciNiz2=[]; // greske koje se pojavljuju samo u rezultat2
        for (var i = 0; i < rezultat2.failures.length; i++) {
            if (!rezultat1.tests.find(element => element.fullTitle == rezultat2.failures[i])) 
                rezultujuciNiz2.push(rezultat2.failures[i]); 
        }
      // console.log(rezultujuciNiz2.length)

        rezultujuciNiz.sort();
        var niz = rezultujuciNiz;
        //console.log(niz.length)
        rezultujuciNiz2.sort();


        for (var i = 0; i < rezultujuciNiz2.length; i++) {
         niz.push(rezultujuciNiz2[i]);
        }

        objekat.greske = niz;
    }

        console.log(objekat);
        return objekat;

   }
     catch(error) {
         var objekat = {
             "promjena": "vrijednost",
             "greske": []
         }
         objekat.promjena = 0 + "%";
         
         console.log(objekat)
         return objekat;
     }
 
    }
    return {
        dajTacnost:dajTacnost,
        porediRezultate:porediRezultate
     }
   } ());
  



  //provjera 1 zad
//TestoviParser.dajTacnost("{\"stats\":{\"suites\":2,\"tests\":2,\"passes\":2,\"pending\":0,\"failures\":0,\"start\":\"2021-11-05T15:00:26.343Z\",\"end\":\"2021-11-05T15:00:26.352Z\",\"duration\":9},\"tests\":[{\"title\":\"should draw 3 rows when parameter are 2,3\",\"fullTitle\":\"Tabela crtaj() should draw 3 rows when parameter are 2,3\",\"file\":null,\"duration\":1,\"currentRetry\":0,\"speed\":\"fast\",\"err\":{}},{\"title\":\"should draw 2 columns in row 2 when parameter are 2,3\",\"fullTitle\":\"Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3\",\"file\":null,\"duration\":0,\"currentRetry\":0,\"speed\":\"fast\",\"err\":{}}],\"pending\":[],\"failures\":[],\"passes\":[{\"title\":\"should draw 3 rows when parameter are 2,3\",\"fullTitle\":\"Tabela crtaj() should draw 3 rows when parameter are 2,3\",\"file\":null,\"duration\":1,\"currentRetry\":0,\"speed\":\"fast\",\"err\":{}},{\"title\":\"should draw 2 columns in row 2 when parameter are 2,3\",\"fullTitle\":\"Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3\",\"file\":null,\"duration\":0,\"currentRetry\":0,\"speed\":\"fast\",\"err\":{}}]}");




/*

//provjera 3 zad
TestoviParser.porediRezultate(`{
    "stats": {
    "suites": 3,
    "tests": 3,
    "passes": 3,
    "pending": 0,
    "failures": 0,
    "start": "2021-11-05T15:00:26.343Z",
    "end": "2021-11-05T15:00:26.352Z",
    "duration": 9
    },
    "tests": [
    {
    "title": "Test1",
    "fullTitle": "Test1: Prolazi",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
    },
    {
    "title": "Test2",
    "fullTitle": "Test2: Prolazi",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
    },
    {
    "title": "Test3",
    "fullTitle": "Test3: Prolazi",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
 }
],
"pending": [],
"failures": [],
"passes": [
    {
        "title": "Test1",
        "fullTitle": "Test1: Prolazi",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
        },
        {
        "title": "Test2",
        "fullTitle": "Test2: Prolazi",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
        },
        {
        "title": "Test3",
        "fullTitle": "Test3: Prolazi",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
     }
]
}`,`{
    "stats": {
    "suites": 3,
    "tests": 4,
    "passes": 2,
    "pending": 0,
    "failures": 2,
    "start": "2021-11-05T15:00:26.343Z",
    "end": "2021-11-05T15:00:26.352Z",
    "duration": 9
    },
    "tests": [
    {
    "title": "Test4",
    "fullTitle": "Test4: Prolazi",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
    },
    {
    "title": "Test5",
    "fullTitle": "Test5: Prolazi",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
    },
    {
    "title": "Test6",
    "fullTitle": "Test6: Prolazi",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
 },
 {
 "title": "Test7",
 "fullTitle": "Test7: Prolazi",
 "file": null,
 "duration": 0,
 "currentRetry": 0,
 "speed": "fast",
 "err": {}
}
],
"pending": [],
"failures": [
    {
    "title": "Test5",
    "fullTitle": "Test5: Prolazi",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
    },
    {
    "title": "Test6",
    "fullTitle": "Test6: Prolazi",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
 }],
"passes": [
    {
        "title": "Test4",
        "fullTitle": "Test4: Prolazi",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
        },
        {
        "title": "Test7",
        "fullTitle": "Test7: Prolazi",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
     }
]
}`)

*/