import type { Config } from '@jest/types';
import { resolve } from 'path'; // Import the resolve function from Node.js path module

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: resolve(__dirname, './src'), // Use resolve to get the absolute path to the root directory
  moduleNameMapper: {
    '^@models/(.*)$': `${resolve(__dirname, './src/models')}/$1`, // Use resolve to get the absolute path to src/models
    '^@utils/(.*)$': `${resolve(__dirname, 'src/utils')}/$1`, // Use resolve to get the absolute path to src/utils
    '^@interfaces/(.*)$': `${resolve(__dirname, 'src/interfaces')}/$1`, // Use resolve to get the absolute path to src/interfaces
    '^@services/(.*)$': `${resolve(__dirname, 'src/services')}/$1`, // Use resolve to get the absolute path to src/services
    '^@controllers/(.*)$': `${resolve(__dirname, 'src/controllers')}/$1`, // Use resolve to get the absolute path to src/controllers
    '^@middlewares/(.*)$': `${resolve(__dirname, 'src/middlewares')}/$1`, // Use resolve to get the absolute path to src/middlewares
    '^@errors/(.*)$': `${resolve(__dirname, 'src/errors')}/$1`, // Use resolve to get the absolute path to src/errors
    '^@config/(.*)$': `${resolve(__dirname, 'src/config')}/$1`, // Use resolve to get the absolute path to src/config
    '^@root/(.*)$': `${resolve(__dirname, 'src')}/$1`, // Use resolve to get the absolute path to src
  },
};

export default config;
