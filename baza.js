const Sequelize = require('sequelize');
const sequelize = new Sequelize('wt2118471', 'root', 'password', { host: 'localhost', dialect: 'mysql', logging: false,operatorsAliases: false });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import modela
db.grupa = sequelize.import(__dirname + '/modeli/Grupa.js');
db.student = sequelize.import(__dirname + '/modeli/Student.js');
db.vjezba = sequelize.import(__dirname + '/modeli/Vjezba.js');
db.zadatak = sequelize.import(__dirname + '/modeli/Zadatak.js');



//test za bazu 
/*
sequelize.authenticate()
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Error: " + err));

    //sequelize.query('INSERT INTO student (ime, prezime, indeks) VALUES (Sajra, Turko, 18471)');
*/


db.grupa.hasMany(db.student);
db.student.belongsTo(db.grupa);

db.vjezba.hasMany(db.zadatak);
db.zadatak.belongsTo(db.vjezba);
module.exports = db;
//komentar