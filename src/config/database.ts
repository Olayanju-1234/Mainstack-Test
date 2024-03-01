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
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
} = config;

let database_name: string = '';
// Optional configuration options for enhanced security and control
const options: ConnectOptions = {
    dbName: database_name,
    user: DATABASE_USERNAME,
    pass: DATABASE_PASSWORD,
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

    // Connect to the database
    connect(MONGO_URI, options);

    // Event listeners
    connection.on('connected', () => {
        console.log(`Connected to ${database_name} database`);
    });

    connection.on('error', (err) => {
        console.error(`Database connection error: ${err}`);
    });
}

// Close the database connection
export async function closeDB(): Promise<void> {
    await connection.close();
    console.log('Database connection closed');
}
