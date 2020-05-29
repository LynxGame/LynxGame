import * as functions from 'firebase-functions';
import { connect } from './config';

import { Direccion } from './entidades/Direccion';
import { Personal } from './entidades/Personal';

export const crearPersonal = functions.https.onRequest(async (request,response) => {

    const { cp, calle, numero, ciudad, nombre, apellidos, telefono, salario, pass } = request.body;

    try {
        const connection = await connect();

        const repo = connection.getRepository(Direccion);

        const nuevaDireccion = new Direccion();
        nuevaDireccion.CP = cp;
        nuevaDireccion.calle = calle;
        nuevaDireccion.numero = numero;
        nuevaDireccion.ciudad = ciudad;
        
        const guardarDireccion = await repo.save(nuevaDireccion);

        response.send(guardarDireccion);

        const repoUser = connection.getRepository(Personal);

        const nuevoUsuario = new Personal();
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellidos = apellidos;
        nuevoUsuario.telefono = telefono;
        nuevoUsuario.salario = salario;
        nuevoUsuario.password = pass;
        nuevoUsuario.direccion = nuevaDireccion;

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
