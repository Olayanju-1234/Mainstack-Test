import 'module-alias/register';
import config from '@config/envs';

const { PORT } = config;

import app from './app';
import { connectDB } from '@config/database';

// Connect to the database
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
