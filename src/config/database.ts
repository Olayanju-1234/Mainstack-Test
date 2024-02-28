// config.db.ts

import { connect, connection, ConnectOptions, Mongoose } from 'mongoose';
import config from './envs';

// variables
const {
    MONGO_URI,
    MONGODB_DEVELOPMENT_NAME,
    MONGODB_TEST_NAME,
    MONGODB_PRODUCTION_NAME,
    NODE_ENV,
} = config;

let database_name: string = '';
// Optional configuration options for enhanced security and control
const options: ConnectOptions = {
    dbName: database_name,
    user: 'mainstack',
    pass: 'mainstack',
    // Add any additional options like auth or replica set configuration here
};

export async function connectDB(): Promise<void> {
    // Set the database name based on the environment
    switch (NODE_ENV) {
        case 'development':
            database_name = MONGODB_DEVELOPMENT_NAME;
            break;
        case 'test':
            database_name = MONGODB_TEST_NAME;
            break;
        case 'production':
            database_name = MONGODB_PRODUCTION_NAME;
            break;
        default:
            database_name = MONGODB_DEVELOPMENT_NAME;
            break;
    }

    connect(MONGO_URI, options);

    connection.on('connected', () => {
        console.log(`Connected to ${database_name} database`);
    });

    connection.on('error', (err) => {
        console.error(`Database connection error: ${err}`);
    });
}

export async function closeDB(): Promise<void> {
    await connection.close();
    console.log('Database connection closed');
}
