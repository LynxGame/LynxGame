import * as functions from 'firebase-functions';
import { connect } from './config';

import { direccion } from './entidades/Direccion';
import { personal } from './entidades/Personal';

export const crearPersonal = functions.https.onRequest(async (request,response) => {

    const { cp, calle, numero, ciudad, nombre, apellidos, telefono, salario, pass } = request.body;

    try {
        const connection = await connect();

        const repo = connection.getRepository(direccion);

        const nuevaDireccion = new direccion();
        nuevaDireccion.CP = cp;
        nuevaDireccion.calle = calle;
        nuevaDireccion.numero = numero;
        nuevaDireccion.ciudad = ciudad;
        
        const guardarDireccion = await repo.save(nuevaDireccion);

        response.send(guardarDireccion);

        const repoUser = connection.getRepository(personal);

        const nuevoUsuario = new personal();
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
    const repoPersonal = connection.getRepository(personal);

    // Get all rows
    const allPersonal = await repoPersonal.find();

    response.send(allPersonal);
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
