var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lynxgame_db'
});

connection.connect();


    connection.query("Select * from Videojuego where videojuego_nombre='Age of Empires'",(error,results)=>{
        if(error) throw error;
        console.log(results);
    })


connection.end();  