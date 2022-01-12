const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())


app.use(express.static('./public/html'));
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));
app.use(express.static('./public/gspec'));
app.use(express.static('./public/images'));

//GET 
app.get("/vjezbe", function (req, res) {

    fs.readFile("vjezbe.csv", function (err, data) {
        
        if (err) throw err;
        var pomocni = data.toString().split(" ");
        //console.log(pomocni.length);
        var vjezbe = pomocni[0];
        
        var zadaci = pomocni[1].split(",");

        var objekat = {
            brojVjezbi : vjezbe, 
            brojZadataka : zadaci
        };
        res.json(objekat);

    });
});
//POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/vjezbe", function (req, res) {
    var odgovor = "";
    
            if (req.body["brojVjezbi"] <=0 || req.body["brojVjezbi"]>15) 
                odgovor = "Pogrešan parametar brojVjezbi";

            var zadaci = req.body["brojZadataka"].split(",");
            //ovo se desi kad pritisnem ono dugme koje pozove fju sa post zahtjevom
            for (var i = 0; i < zadaci.length-1; i++) {
            if (zadaci[i] < 0 || zadaci[i] > 10) {
                if (odgovor.length == 0) odgovor += zadaci[i];
                else
                odgovor += "," + zadaci[i];
                }
            }
            
            if (odgovor.length > 0) {

            var objekat = {status : "error", data: odgovor};
            res.status(400);
            res.json(objekat);
            console.log(objekat);
            console.log("Greska");
            }
            else {
                var vjezba = req.body["brojVjezbi"].toString() + " " + req.body["brojZadataka"].toString();
            fs.writeFile('vjezbe.csv',vjezba, function(err) {
                if (err) throw err;
                res.json({message:"Uspjesno dodan red",data:vjezba});
                console.log("uspjesno");
            });
            }

});

app.listen(3000, () => console.log("app is running"));