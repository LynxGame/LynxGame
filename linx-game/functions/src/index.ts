import * as functions from 'firebase-functions';
import { connect } from './config';
import { Personal } from './entidades/Personal';
import { Videojuegos} from './entidades/Videojuegos';
import { Genero } from './entidades/Genero';
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

    const { baner1, baner2 , baner3 , preview , trailer , nombre , descripcion , fecha, clasificion , licencias_disp , genero , desarrolladores , precio } = request.body;

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

        const guardarGame = await repoGame.save(nuevoGame);

        response.send(guardarGame);
    }catch(error){
        response.send(error)
    }
})

export const getAllGames = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoGame = connection.getRepository(Videojuegos).createQueryBuilder("videojuegos")
    .innerJoinAndSelect("videojuegos.Media","id")

    const allGames = await repoGame.getMany();

    response.send(allGames);
})

exports.getOneGame = functions.https.onRequest(async(request,response)=>{

    const { nombre } = request.body;

    try {
        const connection = await connect();
        const repoOneGame = connection.getRepository(Videojuegos);

        const oneGame = await repoOneGame.createQueryBuilder("games")
                                    .where("games.nombre = :nombre",{nombre:nombre})
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
    const repoVenta = connection.getRepository(Venta).createQueryBuilder("venta")
    .innerJoinAndSelect("venta.Cliente","username")
    .innerJoinAndSelect("venta.Videojuegos","nombre")
    
    const allVenta = await repoVenta.getMany();

    response.send(allVenta);
})

//Cambiar Cliente
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
    const repoCliente = connection.getRepository(Cliente)
    .createQueryBuilder("cliente")
    .innerJoinAndSelect("cliente.Tarjeta","id")

    const allCliente = await repoCliente.getMany();

    response.send(allCliente);
})

exports.getOneCliente = functions.https.onRequest(async(request,response)=>{

    const { username , password } = request.body;

    try {
        const connection = await connect();
        const repoOneCliente = connection.getRepository(Cliente);

        const oneCliente = await repoOneCliente.createQueryBuilder("cliente")
                                    .where("cliente.username = :username",{username:username})
                                    .andWhere("cliente.password = :password",{password:password})
                                    .getOne();

        response.send(oneCliente);
    } catch (error) {
        response.send(error)
    }
})

// CAMBIAR Tarjeta
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

exports.getOneTarjeta = functions.https.onRequest(async(request,response)=>{

    const { id } = request.body;

    try {
        const connection = await connect();


        const oneTarjeta = await connection.getRepository(Cliente).createQueryBuilder("cliente")
            .innerJoinAndSelect("cliente.Tarjeta","id").where("cliente.id = :id", { id: id })
            .getOne();

        response.send(oneTarjeta);
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

//Media

export const getAllMedia = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoMedia = connection.getRepository(Media);

    const allMedia = await repoMedia.find();

    response.send(allMedia);
})

//Genero

export const getAllGenero = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoGenero = connection.getRepository(Genero);

    const allGenero = await repoGenero.find();

    response.send(allGenero);
})
