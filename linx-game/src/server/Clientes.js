const mysql = require("mysql");

class Clientes {
    constructor(oConfig){
        this.oConfig=oConfig;
    }
    agregarUsuario(Nombre,Apellido,Username,Correo,Edad,Contraseña){
        var con = mysql.createConnection(this.oConfig);
        con.connect(function(error){
            try {
                if(error){
                    console.log("Error al establecer la conexion a la base de datos --" + error);
                }
                else{
                    console.log("Conexion exitosa");
                    con.query("SELECT COUNT(*) AS USUARIOS FROM clientes_lynxgame",function(error,res,campo){
                        if(error){
                            console.log("Error en select de la DB --" + console.error());
                        }
                        else{
                            console.log("Usuarios encontrados: " + res[0].usuario);
                            if(parseInt(res[0].usuario)==0){
                                con.query('INSET INTO clientes_lynxgame (cli_nombre,cli_apellido,cli_username,cli_email,cli_edad,cli_contrasenia) values('${Nombre}','${Apellido}','${Username}','${Correo}','${Edad}','${Contraseña}')',function(error,res,campo){
                                    if(error){
                                        console.log("Error al insertar nuevo usuario en la DB --" + console.error());
                                    }
                                    else{
                                        console.log("Nuevo usuario registrado");
                                    }
                                });
                            }
                        }
                    });
                }

            } catch (x) {
                console.log("Clientes.agregarUsuario.connect -- Error-- "+ x);
            }
        });
    }
}
module.exports = Clientes;
