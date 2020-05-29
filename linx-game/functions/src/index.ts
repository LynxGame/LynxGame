import * as functions from 'firebase-functions';
import { connect } from './config';

import { Direccion } from './entidades/Direccion';
import { Personal } from './entidades/Personal';

export const crearPersonal = functions.https.onRequest(async (request,response) => {

    const { nombre, apellidos, telefono, salario, pass } = request.body;

    try {
        const connection = await connect();

        const repoUser = connection.getRepository(Personal);

        const nuevoUsuario = new Personal();
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellidos = apellidos;
        nuevoUsuario.telefono = telefono;
        nuevoUsuario.salario = salario;
        nuevoUsuario.password = pass;

        const guardarUsuario = await repoUser.save(nuevoUsuario);

        response.send(guardarUsuario);

    } catch (error) {
        response.send(error)
    }
})

export const getPersonal = functions.https.onRequest(async (request,response) => {
    const connection = await connect();
    const repoPersonal = connection.getRepository(Personal);

    // Get all rows
    const allPersonal = await repoPersonal.find();

    response.send(allPersonal);
})
