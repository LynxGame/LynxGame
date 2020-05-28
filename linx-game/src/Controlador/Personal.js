var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lynxgame_db'
});

connection.connect();

connection.query("Select * from personal",(error,results)=>{
    if(error) throw error;
    console.log(results);
})

connection.end();  
