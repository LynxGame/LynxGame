
class Usuario{
    usuario = function(        
    ID,
    Nombre,
    Apellido,
    UserName,
    Email,
    Edad,
    Password,
    Creditos,
    IDCard,
    Banco,
    CardNumber,
    FVenc,
    CCV,
    IDDir,
    CP,
    Calle,
    Numero,
 ){
    this.CreditCard = {
        IDCard,
        Banco,
        CardNumber,
        FVenc,
        CCV
    };
    this.Direccion = {
        IDDir,
        CP,
        Calle,
        Numero
    };
    this.ID = ID;
    this.NombreCompleto = {
        Nombre,
        Apellido
    };
    this.UserName = UserName;
    this.Email = Email;
    this.Edad = Edad;
    this.Password = Password;
    this.Creditos = Creditos;

    
    }

}

