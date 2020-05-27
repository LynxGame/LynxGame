const mysql = require("mysql");

class Contacto {
    constructor(oConfig){
        this.oConfig=oConfig;
    }
    agregarUsuario(Nombre,Apellido,Correo,Contraseña,Username){
        var con = mysql.createConnection(this.oConfig);
        con.connect(function(error){
            try {
                if(error){
                    console.log("Error al establecer la conexion a la base de datos --" + error);
                }
                else{
                    console.log("Conexion exitosa");
                    con.query("SELECT COUNT(*) AS USUARIOS FROM USUARIO",function(error,res,campo){
                        if(error){
                            console.log("Error en select de la DB --" + console.error());
                        }
                        else{
                            console.log("Usuarios encontrados: " + res[0].usuario);
                            if(parseInt(res[0].usuario)==0){
                                con.query('INSET INTO usuarios (Nombre,Apellidos,Correo,Contrasenia,Username)',function(error,res,campo){
                                    
                                })
                            }
                        }
                    })
                }

            } catch (x) {
                
            }
        });
    }
}
module.exports = Contacto;
