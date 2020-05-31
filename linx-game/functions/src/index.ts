import * as functions from 'firebase-functions';
import { connect } from './config';
import {Cliente} from './entidades/Cliente';
import {Venta} from './entidades/Venta';
import {Videojuegos} from './entidades/Videojuegos';
import { Personal } from './entidades/Personal';

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

export const crearVideojuego = functions.https.onRequest(async(request,response)=>{

    const { Genero , nombre , descripcion , Desarrolladores, fecha, clasificion,Precio} = request.body;

    try{
        const connection=await connect();

        const repoGame = connection.getRepository(Videojuegos);

        const nuevoGame = new Videojuegos();
        nuevoGame.Genero=Genero;
        nuevoGame.nombre=nombre;
        nuevoGame.descripcion=descripcion;
        nuevoGame.Desarrolladores=Desarrolladores;
        nuevoGame.fecha=fecha;
        nuevoGame.clasificion=clasificion;
        nuevoGame.Precio=Precio;

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

    const { Genero , nombre , descripcion , Desarrolladores, fecha, clasificion,Precio} = request.body;

    try {
        const connection = await connect();
        const repoOneGame = connection.getRepository(Videojuegos);

        const oneGame = await repoOneGame.createQueryBuilder("games")
                                    .where("games.Genero = :Genero",{Genero : Genero})
                                    .andWhere("games.nombre = :nombre",{nombre:nombre})
                                    .andWhere("games.descripcion =:descripcion",{descripcion:descripcion})
                                    .andWhere("games.Desarrolladores =:Desarrolladores",{Desarrolladores:Desarrolladores})
                                    .andWhere("games.fecha = :fecha",{fecha:fecha})
                                    .andWhere("games.clasificion =:clasificion",{clasificion:clasificion})
                                    .andWhere("games.Precio=:Precio",{Precio:Precio})
                                    .getOne();

        response.send(oneGame);
    } catch (error) {
        response.send(error)
    }
})

export const crearVenta = functions.https.onRequest(async(request,response)=>{

    const {cliente , fecha, videojuegos} = request.body;

    try{
        const connection=await connect();

        const repoVenta = connection.getRepository(Venta);

        const nuevoVenta = new Venta();
        nuevoVenta.Cliente= cliente;
        nuevoVenta.Videojuegos= videojuegos;
        nuevoVenta.fecha=fecha;
                
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
                                    .where("venta.Cliente = :Cliente",{cliente : Cliente})
                                    .andWhere("venta.fecha = :fecha",{fecha:fecha})
                                    .andWhere("venta.VideoJuegos =:Videojuegos",{videojuegos:Videojuegos})
                                    .getOne();

        response.send(oneVenta);
    } catch (error) {
        response.send(error)
    }
})


export const crearCliente = functions.https.onRequest(async(request,response)=>{

    const { nombre,apellidos,username,email,edad,password,creditos,Tarjeta,calle,cp,numero,ciudad} = request.body;

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
        nuevoCliente.Tarjeta=Tarjeta;
        nuevoCliente.calle=calle;
        nuevoCliente.cp=cp;
        nuevoCliente.numero=numero;
        nuevoCliente.ciudad=ciudad;
                
        const guardarCliente = await repoCliente.save(nuevoCliente);

        response.send(guardarCliente);
    }catch(error){
        response.send(error)
    }
})

export const getAllCliente = functions.https.onRequest(async(request,response)=>{
    const connection = await connect();
    const repoVenta = connection.getRepository(Cliente);

    const allVenta = await repoVenta.find();

    response.send(allVenta);
})

exports.getOneVenta = functions.https.onRequest(async(request,response)=>{

    const {  fecha } = request.body;

    try {
        const connection = await connect();
        const repoOneVenta = connection.getRepository(Venta);

        const oneVenta = await repoOneVenta.createQueryBuilder("venta")
                                    .where("venta.Cliente = :Cliente",{cliente : Cliente})
                                    .andWhere("venta.fecha = :fecha",{fecha:fecha})
                                    .andWhere("venta.VideoJuegos =:Videojuegos",{videoJuegos:Videojuegos})
                                    .getOne();

        response.send(oneVenta);
    } catch (error) {
        response.send(error)
    }
})