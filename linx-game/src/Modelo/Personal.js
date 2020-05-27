const mysql = require("mysql");

class Personal{
    constructor(oConfig){
        this.oConfig=oConfig;
    }
    agregarPersonal(Nombre,Apellido,Telefono,Salario,Contraseña){
        var con = mysql.createConnection(this.oConfig);
        con.connect(function(error){
            try {
                if(error){
                    console.log("Error al establecer la conexion a la base de datos --" + error);
                }
                else{
                    console.log("Conexion exitosa");
                    con.query("SELECT COUNT(*) AS Personal FROM personal_lynxgame",function(error,res,campo){
                        if(error){
                            console.log("Error en select de la DB --" + console.error());
                        }
                        else{
                            console.log("Usuarios encontrados: " + res[0].usuario);
                            if(parseInt(res[0].usuario)==0){
                                con.query('INSET INTO personal_lynxgame (per_nombre,per_apellido,per_telefono,per_salario,per_contrasenia) values("Juan Carlos","Calderon Davila","29384716","Juancho1314")',function(error,res,campo){
                                    if(error){
                                        console.log("Error al insertar nuevo usuario en la DB --" + console.error());
                                    }
                                    else{
                                        console.log("Nuevo personal registrado");
                                    }
                                });
                            }
                        }
                    });
                }

            } catch (x) {
                console.log("Personal.agregarUsuario.connect -- Error-- "+ x);
            }
        });
    }
}
module.exports = Personal;
