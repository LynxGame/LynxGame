import {
    ConnectionOptions,
    Connection,
    createConnection,
    getConnection
} from "typeorm";

import 'reflect-metadata';

export const prod = process.env.NODE_ENV === 'lynxgame_production';

export const config : ConnectionOptions = {
    name: 'lynxgame_db',
    type: 'mysql',
    extra: {
        socketPath: '/cloudsql/lynx-game:us-west2:lynxgame-db',
    },
    username: 'root',
    password: 'root',
    database: 'lynxgame_db',
    synchronize: true,
    logging: false,
    entities: [
        'lib/entidades/**/*.js'
    ],

    ...(prod && {
        database: 'lynxgame_production',
        logging: false,
        extra: {
            socketPath: '/cloudsql/lynx-game:us-west2:lynxgame-db'
        },
    })
} 

export const connect = async () => {

    let connection: Connection;

    try{

        connection = getConnection(config.name);

    } catch(err){

        connection = await createConnection(config);

    }

    return connection

}