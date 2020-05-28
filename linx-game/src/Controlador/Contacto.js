const mysql = require("mysql");

let con =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lynxgame_db'

});

con.connect();

con.query("Select * from videojuego",(err,res)=>{
    
    if(err) throw err;
    console.log(res);
})

con.end();  

module.exports = Contacto;
