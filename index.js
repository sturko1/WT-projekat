//komentar
const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())
const baza = require("./baza.js");
const { resolve } = require("path");
const { rejects } = require("assert");
//const { sequelize, zadatak, vjezba, student, grupa} = require("./baza");
const vjezba = baza.vjezba;
const student = baza.student;
const zadatak = baza.zadatak;
const grupa = baza.grupa;

app.use(express.static('./public/html'));
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));
app.use(express.static('./public/gspec'));
app.use(express.static('./public/images'));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));


//obzirom da baza treba biti prazna ova fja je nepotrebna ali u slucaju da bude potrebna moze se odkomentarisati
function inicijaliziraj() {
    
    return new Promise((resolve, reject) => {
/*
        baza.grupa.create({ naziv: "Grupa 1" }).then((g) => {

            var nizPromisea = [];

            nizPromisea.push(baza.student.create({ ime: "Sajra", prezime:"Turko", indeks:18471, grupaId: g.id }));

            nizPromisea.push(baza.vjezba.create({ naziv: "Vjezba1", brojZadataka:3 }).then((v) => {

                nizPromisea.push(baza.zadatak.create({ naziv: "Zadatak1", vjezbaId: v.id }))
                nizPromisea.push(baza.zadatak.create({ naziv: "Zadatak2", vjezbaId: v.id }))
                nizPromisea.push(baza.zadatak.create({ naziv: "Zadatak3", vjezbaId: v.id }));

                //console.log("prije resolve");
                return new Promise((resolve, reject) => { resolve(v); })
            
            }).catch(function(err){console.log("vjezba greska "+err);}));

            nizPromisea.push(baza.vjezba.create({ naziv: "Vjezba2", brojZadataka:1 }).then((v1) => {

                nizPromisea.push(baza.zadatak.create({ naziv: "Zadatak1", vjezbaId: v1.id })                
                    
                );
                //console.log("prije resolve");
                return new Promise((resolve, reject) => { resolve(v1); })
            
            }).catch(function(err){console.log("vjezba greska "+err);}));


            resolve(g);
            
        }).catch(function(err){console.log("grupa greska "+err);});   ;
*/
    });
}

baza.sequelize.sync({}).then(function () {
    inicijaliziraj().then(() => {
        console.log("Baza inicijalizirana");
    }).catch(() => {
        console.log("Greška 1");
    });
}).catch(() => {
    console.log("Greška 2");
});


app.get('/vjezbe', function(req, res) {
    baza.vjezba.findAll({include:{all:true}}).then(vjezbe => {
        var zadaciVjezbe = [];
          
        for(var i = 0; i < vjezbe.length; i++){
          zadaciVjezbe.push(vjezbe[i].zadataks.length);
        }
    
        let objekatVjezbe = {
            brojVjezbi: vjezbe.length,
            brojZadataka:zadaciVjezbe
        };
        return res.json(objekatVjezbe);
    });
});


app.post('/vjezbe', function(req,res){
    let tijelo = req.body; 
    let brojVjezbi=tijelo['brojVjezbi'];
    let zadaci=tijelo['brojZadataka'].split(',');
    let odgovor=[];
    if(brojVjezbi<1 || brojVjezbi>15){
        odgovor.push("brojVjezbi");
        
    }
    

    for(var i=0; i<zadaci.length; i++){
        console.log("broj zadataka: ",zadaci[i]);
        if(zadaci[i]<0 || zadaci[i]>10){
            odgovor.push("z"+(i+1));
        }
    }
    console.log("broj vjezbi" + brojVjezbi);
   if(brojVjezbi!=zadaci.length || zadaci.length<0 || zadaci.length>15 ){
        odgovor.push("brojZadataka");
    }

    let objekat={
        status:'error',
        data:"Pogresan parametar "+ odgovor
    }
    if(odgovor.length>0) {
        res.status(400);
        res.send(JSON.stringify(objekat));
        return;
    }


    let vjezbe=[];
    let zad=[];
    let idijevi=[];
    for(var i=1; i<=brojVjezbi; i++){
        let objekat1={
            naziv: '',
            brojZadataka: zadaci[i-1]
        }
        objekat1.naziv='Vjezba'+i;
        vjezbe.push(objekat1);
    };

   /* for (var i = 0; i < brojVjezbi; i++) {
        console.log(vjezbe[i].naziv);
    }
    for (var i = 0; i < zadaci.length; i++) {
        console.log(zadaci[i]);
    }

    for (var i = 0; i < zadaci.length; i++) {
        console.log("idijevi" + zadaci[i]);
    }*/

    zadatak.destroy({
        where:{}
    }).then(()=> {
        return vjezba.destroy({
            where : {}
        })
    }).then(()=>{
        return vjezba.bulkCreate(vjezbe).then(()=>{
            return vjezba.findAll().then((rezultat)=>{
                console.log(rezultat.naziv);
                for(let l=0; l<rezultat.length; l++){
                    idijevi.push(rezultat[l].id);
                }
                console.log("Ok");
            }).then(()=>{
                for(var i=1; i<=brojVjezbi; i++){
                    for(var j=1; j<=zadaci[i-1]; j++){
                        let objekat2=new Object();
                        objekat2.naziv="Zadatak"+j;
                        objekat2.vjezbaId=idijevi[i-1];
                        zad.push(objekat2);
                    }
                }

                return zadatak.bulkCreate(zad).then(()=>{
                    let objekat3={
                        brojVjezbi:brojVjezbi,
                        brojZadataka:zadaci
                    }
                    res.send(JSON.stringify(objekat3));
                }).catch(()=>{
                    res.json({message:"greska"});
                });
            })
        })

    })


});
    

app.post('/student',function(req,res){
   let indexS = parseInt(req.body.indeks);
   let grupaS = req.body.grupa;
    baza.student.findAll({where : { indeks : indexS }}).then((s)=>{
       if(s.length!=0){
              return res.json({ status: 'Student sa indexom '+indexS+' već postoji!' });
       }
  
       else{
           baza.grupa.findOrCreate({where : { naziv : grupaS }}).then((g)=>{
            baza.student.create({
                ime:req.body.ime,
                prezime:req.body.prezime,
                indeks:req.body.indeks,
                grupaId:g[0].id
            }).then((student)=>{
                res.json({status:"Kreiran student!"});
            }).catch((error)=>{
              res.json({status:"Greska",error:error});
          });

           }).catch(()=>{
            res.json({status:"GreskafindOrcreate"});
        
        });
       }
   }).catch(()=>{
    res.json({status:"Nijedno polje ne smije biti prazno. Molimo popunite sva polja!"});

});
 
});


app.put('/student/:index',function(req,res){ 
    var grupaS=req.body.grupa; 
    var indeksS=parseInt(req.params['index']);

    baza.student.findOne({where:{indeks:indeksS}}).then((s)=>{ 
        if(s == null){
               return res.json({ status: 'Student sa indexom '+ indeksS +' ne postoji!' });
        }
         else {            
            baza.grupa.findOrCreate({where : { naziv : grupaS }}).then((g)=>{
                  s.update({grupaId:g[0].id}).then(()=>{
                    return res.json({status:'Promijenjena grupa studentu ' + indeksS});
                  });   
                 
            }).catch((err)=>{
                return res.json({status:"Pogrešno uneseni parametri!" + err.message}); 
             }); 
        } 
    });   
 });


 app.post('/batch/student',function(req,res){
    var nizOdStudenti=[];    
    var nizOdGrupe=[];
    var sviStudenti=req.body.toString().split(/[\r\n]/);
    
    console.log("index.js " + req.body);

    for(let i = 0; i < sviStudenti.length; i++){

        let jedanStudent = sviStudenti[i].split(",");

        let student = {
            ime : jedanStudent[0],
            prezime : jedanStudent[1], 
            indeks : jedanStudent[2], 
            grupa : jedanStudent[3], 
            grupaId : null
        }

        let grupa = {
            naziv:jedanStudent[3]
        }
        nizOdStudenti.push(student);
        nizOdGrupe.push(grupa);
    }

    baza.grupa.bulkCreate(nizOdGrupe, { // kreiram grupu ako ne postoji 
        ignoreDuplicates: true,
        returning: true
    }).then(() => { 
        baza.grupa.findAll().then(grupe => {
            for(let i = 0; i<nizOdStudenti.length; i++){  
                let grupa = grupe.filter(x => x.naziv == nizOdStudenti[i].grupa); 
                nizOdStudenti[i].grupaId = grupa[0].id;
            }
            baza.student.bulkCreate(nizOdStudenti, {
                ignoreDuplicates: true,
                returning: true}).then(studenti => {
                var nepostojeciIndeksi = 0; 
                var postojeciIndeksiString = ""; 
                for(let i = 0; i<studenti.length; i++){
                    if(studenti[i].id == null){
                        nepostojeciIndeksi++; 
                        postojeciIndeksiString+=studenti[i].indeks + ',';
                    }
                }
                if(postojeciIndeksiString.length){
                    postojeciIndeksiString=postojeciIndeksiString.substring(0, postojeciIndeksiString.length-1); 
                }

                if(nepostojeciIndeksi == 0){
                   return res.json({status:"Dodano " + studenti.length+" studenata!"});
                }
                else {
                    return res.json({status:"Dodano "+ (studenti.length - nepostojeciIndeksi) + " studenata, a studenti " + postojeciIndeksiString + " već postoje!"})
                }
            }).catch((err)=>{
                return res.json("Greska: " + err.message); 
             }); 
        }).catch((err)=>{
            return res.json("Greska:" + err.message); 
        }); 
    }).catch((err)=>{
        return res.json("Greska: " + err.message); 
     }); 
console.log("gtv index");
 });



app.listen(3000, () => {
    console.log("Uspjesno otvoren port 3000");
});