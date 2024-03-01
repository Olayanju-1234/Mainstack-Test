import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from '@config/envs';
import router from '@routes/index';
import { errorHandler } from '@middlewares/error';
import { limiter } from '@utils/ratelimit';

const { NODE_ENV } = config;

const app = express();

// ** CORS ** for all origins
let whitelist: string[] = ['http://localhost:3000']; 

export const whitelistUrls = whitelist;

if (NODE_ENV !== 'production') {
    whitelist = [...whitelist, 'http://localhost:3000'];
}

const corsOptions = {
    origin: (origin: any, callback: any) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback('Not allowed by CORS', false);
        }
    },
};

app.use(cors(corsOptions));

// ** MORGAN **
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ** RATE LIMIT **
app.use(limiter);

// ** ROUTES **
app.get('/', (req: Request, res: Response) => {
    return res.status(200).send('Api is running');
});

// ** API Routes **
router(app);

// ** Undefined Routes **
app.use('*', (req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: "API endpoint doesn't exist",
    });
});

// ** Error Handler **
app.use(errorHandler);

export default app;
