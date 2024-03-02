import { rateLimit } from 'express-rate-limit';

export const limiter = rateLimit({
    windowMs: 3 * 60 * 1000, // 3 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: 'Too many requests from this IP, please try again after 3 mins',
    // store: ... , // Redis, Memcached, etc. See below.
    validate: {xForwardedForHeader: false}, // Disable `X-Forwarded-For` header validation.
});
