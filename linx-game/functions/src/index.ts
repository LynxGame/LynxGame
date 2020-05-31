import * as functions from 'firebase-functions';
import { connect } from './config';
import {Cliente} from './entidades/Cliente';
import {Compra} from './entidades/Compra';
import {Desarrolladores} from './entidades/Desarrolladores';
import {Genero} from './entidades/Genero';
import {Media} from './entidades/Media';
import {Precio} from './entidades/Precio';
import {Tarjeta} from './entidades/Tarjeta';
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