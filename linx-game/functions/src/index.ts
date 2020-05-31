import * as functions from 'firebase-functions';
import { connect } from './config';

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