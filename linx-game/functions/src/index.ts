import * as functions from 'firebase-functions';
import { connect } from './config';
import { Personal } from './entidades/Personal';
import { Videojuegos} from './entidades/Videojuegos';
import { Genero } from './entidades/Genero';
import { Precio } from './entidades/Precio';
import { Media } from './entidades/Media';
import { Venta } from './entidades/Venta';
import { Cliente } from './entidades/Cliente';
import { Compra } from './entidades/Compra';
import { Tarjeta } from './entidades/Tarjeta';
import { Desarrolladores } from './entidades/Desarrolladores';

//Personal

export const crearPersonal = functions.https.onRequest(async (request,response) => {

    const { nombre, apellidos, telefono, salario, password } = request.body;

    try {
        const connection = await connect();

        const repoUser = connection.getRepository(Personal);

        const nuevoUsuario = new Personal();
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellidos = apellidos;
        nuevoUsuario.telefono = telefono;
        nuevoUsuario.salario = salario;
        nuevoUsuario.password = password;

        const guardarUsuario = await repoUser.save(nuevoUsuario);

        response.send(guardarUsuario);

    } catch (error) {
        response.send(error)
    }
})

export const getAllPersonal = functions.https.onRequest(async (request,response) => {
    const connection = await connect();
    const repoPersonal = connection.getRepository(Personal);

    const allPersonal = await repoPersonal.find();

    response.send(allPersonal);
})

exports.getOnePersonal = functions.https.onRequest(async (request,response) => {

    response.set('Access-Control-Allow-Origin', '*');
    const { username , password } = request.body;

    try {
        const connection = await connect();
        const repoOnePersonal = connection.getRepository(Personal);

        const onePersonal = await repoOnePersonal.createQueryBuilder("personal")
                                            .where("personal.apellidos = :apellidos", { apellidos : username })
                                            .andWhere("personal.password = :password", { password : password})
                                            .getOne();

        response.send(onePersonal);

    } catch (error) {
        response.send(error);
    }
    
    //el Return debe ser todo el ObjetoPersonal
})

//Videojuego

export const crearVideojuego = functions.https.onRequest(async(request,response)=>{

    const { baner1,baner2,baner3,preview,trailer,nombre , descripcion , fecha, clasificion,licencias_disp,genero,desarrolladores,precio,venta,compra} = request.body;

    try{
        const connection=await connect();

        const repoMedia = connection.getRepository(Media);
        

        const nuevoMedia = new Media();
        nuevoMedia.baner1=baner1;
        nuevoMedia.baner2=baner2;
        nuevoMedia.baner3=baner3;
        nuevoMedia.preview=preview;
        nuevoMedia.trailer=trailer;
                
        const guardarMedia = await repoMedia.save(nuevoMedia);

        response.send(guardarMedia);

        const repoGame = connection.getRepository(Videojuegos);

        const nuevoGame = new Videojuegos();
        nuevoGame.nombre=nombre;
        nuevoGame.descripcion=descripcion;
        nuevoGame.fecha=fecha;
        nuevoGame.clasificion=clasificion;
        nuevoGame.licencias_disp=licencias_disp;
        nuevoGame.genero=genero;
        nuevoGame.desarrolladores=desarrolladores;
        nuevoGame.precio=precio;
        nuevoGame.Media=nuevoMedia;
        nuevoGame.venta=venta;
        nuevoGame.compra=compra;

        const guardarGame = await repoGame.save(nuevoGame);

        response.send(guardarGame);
    }catch(error){
        response.send(error)
    }
})

export const getAllGames = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoGame = connection.getRepository(Videojuegos);

    const allGames = await repoGame.find();

    response.send(allGames);
})

exports.getOneGame = functions.https.onRequest(async(request,response)=>{

    const { nombre , descripcion , fecha, clasificion,licencias_disp,genero,desarrolladores,precio,media,venta,compra} = request.body;

    try {
        const connection = await connect();
        const repoOneGame = connection.getRepository(Videojuegos);

        const oneGame = await repoOneGame.createQueryBuilder("games")
                                    .where("games.nombre = :nombre",{nombre:nombre})
                                    .andWhere("games.descripcion =:descripcion",{descripcion:descripcion})
                                    .andWhere("games.fecha = :fecha",{fecha:fecha})
                                    .andWhere("games.clasificion =:clasificion",{clasificion:clasificion})
                                    .andWhere("games.licencias_disp=:licencias_disp",{licencias_disp:licencias_disp})
                                    .andWhere("games.genero=:genero",{genero:Genero})
                                    .andWhere("games.desarrolladores=:desarrolladores",{desarrolladores:desarrolladores})
                                    .andWhere("games.precio=:precio",{precio:Precio})
                                    .andWhere("games.media=:media",{media:Media})
                                    .andWhere("games.venta=:venta",{venta:Venta})
                                    .andWhere("games.compra=:compra",{compra:Compra})
                                    .getOne();

        response.send(oneGame);
    } catch (error) {
        response.send(error)
    }
})

//Ventas

export const crearVenta = functions.https.onRequest(async(request,response)=>{

    const {cliente , fecha, videojuegos} = request.body;

    try{
        const connection=await connect();

        const repoVenta = connection.getRepository(Venta);

        const nuevoVenta = new Venta();
        nuevoVenta.fecha=fecha;
        nuevoVenta.cliente= cliente;
        nuevoVenta.videojuegos= videojuegos;
                
        const guardarVenta = await repoVenta.save(nuevoVenta);

        response.send(guardarVenta);
    }catch(error){
        response.send(error)
    }
})

export const getAllVentas = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoVenta = connection.getRepository(Venta);

    const allVenta = await repoVenta.find();

    response.send(allVenta);
})

exports.getOneVenta = functions.https.onRequest(async(request,response)=>{

    const { fecha } = request.body;

    try {
        const connection = await connect();
        const repoOneVenta = connection.getRepository(Venta);

        const oneVenta = await repoOneVenta.createQueryBuilder("venta")
                                    .where("venta.fecha = :fecha",{fecha:fecha})                            
                                    .andWhere("venta.cliente = :cliente",{cliente : Cliente})
                                    .andWhere("venta.VideoJuegos =:Videojuegos",{videojuegos:Videojuegos})
                                    .getOne();

        response.send(oneVenta);
    } catch (error) {
        response.send(error)
    }
})


//Cliente

export const crearCliente = functions.https.onRequest(async(request,response)=>{

    const { nombre,apellidos,username,email,edad,password,creditos,tarjeta,calle,cp,numero,ciudad,venta} = request.body;

    try{
        const connection=await connect();

        const repoCliente = connection.getRepository(Cliente);

        const nuevoCliente = new Cliente();
        nuevoCliente.nombre=nombre;
        nuevoCliente.apellidos=apellidos;
        nuevoCliente.username=username;
        nuevoCliente.email=email;
        nuevoCliente.edad=edad;
        nuevoCliente.password=password;
        nuevoCliente.creditos=creditos;
        nuevoCliente.calle=calle;
        nuevoCliente.cp=cp;
        nuevoCliente.numero=numero;
        nuevoCliente.ciudad=ciudad;
        nuevoCliente.Tarjeta=tarjeta;
        nuevoCliente.venta=venta;
                
        const guardarCliente = await repoCliente.save(nuevoCliente);

        response.send(guardarCliente);
    }catch(error){
        response.send(error)
    }
})

export const getAllCliente = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoCliente = connection.getRepository(Cliente);

    const allCliente = await repoCliente.find();

    response.send(allCliente);
})

exports.getOneCliente = functions.https.onRequest(async(request,response)=>{

    const { nombre,apellidos,username,email,edad,password,creditos,tarjeta,calle,cp,numero,ciudad,venta} = request.body;

    try {
        const connection = await connect();
        const repoOneCliente = connection.getRepository(Venta);

        const oneCliente = await repoOneCliente.createQueryBuilder("cliente")
                                    .where("cliente.nombre=:",{nombre:nombre})
                                    .andWhere("cliente.apellidos=:apellidos",{apellidos:apellidos})
                                    .andWhere("cliente.username=:username",{username:username})
                                    .andWhere("cliente.email=:email",{email:email})
                                    .andWhere("cliente.edad=:edad",{edad:edad})
                                    .andWhere("cliente.password=:password",{password:password})
                                    .andWhere("cliente.creditos=:creditos",{creditos:creditos})
                                    .andWhere("cliente.calle=:calle",{calle:calle})
                                    .andWhere("cliente.cp=:cp",{cp:cp})
                                    .andWhere("cliente.numero=:numero",{numero:numero})
                                    .andWhere("cliente.ciudad=:ciudad",{ciudad:ciudad})
                                    .andWhere("cliente.tarjeta=:tarjeta",{tarjeta:Tarjeta})
                                    .andWhere("cliente.venta=:venta",{venta:Venta})
                                    .getOne();

        response.send(oneCliente);
    } catch (error) {
        response.send(error)
    }
})

//Tarjeta

export const crearTarjeta = functions.https.onRequest(async(request,response)=>{

    const { banco,numero,fecha,cvv} = request.body;

    try{
        const connection=await connect();

        const repoTarjeta = connection.getRepository(Tarjeta);

        const nuevoTarjeta = new Tarjeta();
        nuevoTarjeta.banco=banco;
        nuevoTarjeta.numero=numero;
        nuevoTarjeta.fecha=fecha;
        nuevoTarjeta.cvv=cvv;
                
        const guardarTarjeta = await repoTarjeta.save(nuevoTarjeta);

        response.send(guardarTarjeta);
    }catch(error){
        response.send(error)
    }
})

export const getAllTarjeta = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoTarjeta = connection.getRepository(Cliente);

    const allTarjeta = await repoTarjeta.find();

    response.send(allTarjeta);
})

exports.getOneTarjeta = functions.https.onRequest(async(request,response)=>{

    const { banco,numero,fecha,cvv} = request.body;

    try {
        const connection = await connect();
        const repoOneTarjeta = connection.getRepository(Tarjeta);

        const oneTarjeta = await repoOneTarjeta.createQueryBuilder("tarjeta")
                                    .where("tarjeta.banco=:banco",{banco:banco})
                                    .andWhere("tarjeta.numero=:numero",{numero:numero})
                                    .andWhere("tarjeta.fecha=:fecha",{fecha:fecha})
                                    .andWhere("tarjeta.cvv=:cvv",{cvv:cvv})
                                    .getOne();

        response.send(oneTarjeta);
    } catch (error) {
        response.send(error)
    }
})

//Precio

export const getAllPrecio = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoPrecio = connection.getRepository(Precio);

    const allPrecio = await repoPrecio.find();

    response.send(allPrecio);
})

exports.getOnePrecio = functions.https.onRequest(async(request,response)=>{

    const { regular,descuento,apartado} = request.body;

    try {
        const connection = await connect();
        const repoOnePrecio = connection.getRepository(Precio);

        const onePrecio = await repoOnePrecio.createQueryBuilder("precio")
                                    .where("precio.regular=:regular",{regular:regular})
                                    .andWhere("precio.descuento=:descuento",{descuento:descuento})
                                    .andWhere("precio.apartado=:apartado",{apartado:apartado})
                                    .andWhere("precio.videojuegos=:videojuegos",{videojuegos:Videojuegos})
                                    .getOne();

        response.send(onePrecio);
    } catch (error) {
        response.send(error)
    }
})

//Desarrolladores

export const getAllDesarrollador = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoDesarrolladores = connection.getRepository(Desarrolladores);

    const allDesarrolladores = await repoDesarrolladores.find();

    response.send(allDesarrolladores);
})

exports.getOneDesarrollador = functions.https.onRequest(async(request,response)=>{

    const { nombre,email,convenio} = request.body;

    try {
        const connection = await connect();
        const repoOneDesarrollador = connection.getRepository(Desarrolladores);

        const oneDesarrollador = await repoOneDesarrollador.createQueryBuilder("desarrollador")
                                    .where("desarrollador.nombre=:nombre",{nombre:nombre})
                                    .andWhere("desarrollador.email=:email",{email:email})
                                    .andWhere("desarrollador.convenio=:convenio",{convenio:convenio})
                                    .andWhere("desarrollador.videojuegos=:videojuegos",{videojuegos:Videojuegos})
                                    .getOne();

        response.send(oneDesarrollador);
    } catch (error) {
        response.send(error)
    }
})


//Compra

export const crearCompra = functions.https.onRequest(async(request,response)=>{

    const { fecha,licencia,videojuegos} = request.body;

    try{
        const connection=await connect();

        const repoCompra = connection.getRepository(Compra);
        

        const nuevoCompra = new Compra();
        nuevoCompra.fecha=fecha;
        nuevoCompra.licencia=licencia;
        nuevoCompra.videojuegos=videojuegos;
                
        const guardarCompra = await repoCompra.save(nuevoCompra);

        response.send(guardarCompra);
    }catch(error){
        response.send(error)
    }
})

export const getAllCompra = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoCompra = connection.getRepository(Compra);

    const allCompra = await repoCompra.find();

    response.send(allCompra);
})

exports.getOneCompra = functions.https.onRequest(async(request,response)=>{

    const { fecha,licencia} = request.body;

    try {
        const connection = await connect();
        const repoOneCompra = connection.getRepository(Compra);

        const oneCompra = await repoOneCompra.createQueryBuilder("compra")
                                    .where("compra.fecha=:fecha",{fecha:fecha})
                                    .andWhere("compra.licencia=:licencia",{licencia:licencia})
                                    .andWhere("compra.videojuegos=:videojuegos",{videojuegos:Videojuegos})
                                    .getOne();

        response.send(oneCompra);
    } catch (error) {
        response.send(error)
    }
})

//Media

export const getAllMedia = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoMedia = connection.getRepository(Media);

    const allMedia = await repoMedia.find();

    response.send(allMedia);
})

exports.getOneMedia = functions.https.onRequest(async(request,response)=>{

    const { baner1,baner2,baner3,preview,trailer} = request.body;

    try {
        const connection = await connect();
        const repoOneMedia = connection.getRepository(Media);

        const oneMedia = await repoOneMedia.createQueryBuilder("media")
                                    .where("media.baner1=:baner1",{baner1:baner1})
                                    .andWhere("media.baner2=:baner2",{baner2:baner2})
                                    .andWhere("media.baner3=:baner3",{baner3:baner3})
                                    .andWhere("media.preview=:preview",{preview:preview})
                                    .andWhere("media.trailer=:trailer",{trailer:trailer})
                                    .getOne();

        response.send(oneMedia);
    } catch (error) {
        response.send(error)
    }
})

//Genero

export const getAllGenero = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoGenero = connection.getRepository(Genero);

    const allGenero = await repoGenero.find();

    response.send(allGenero);
})

exports.getOneGenero = functions.https.onRequest(async(request,response)=>{

    const { nombre} = request.body;

    try {
        const connection = await connect();
        const repoOneGenero = connection.getRepository(Genero);

        const oneGenero = await repoOneGenero.createQueryBuilder("genero")
                                    .where("genero.nombre=:nombre",{nombre:nombre})
                                    .andWhere("genero.videojuegos=:videojuegos",{videojuegos:Videojuegos})
                                    .getOne();

        response.send(oneGenero);
    } catch (error) {
        response.send(error)
    }
})
