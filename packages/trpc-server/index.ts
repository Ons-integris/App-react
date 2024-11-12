import express from 'express';
import cors from 'cors';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';  // Add this import at the top

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors({ origin: 'http://localhost:5173' }));

// Setup TRPC router
const t = initTRPC.create();

// Define your TRPC router
const appRouter = t.router({
    getUser: t.procedure
        .input(z.object({ id: z.string() }))
        .query(async ({ input }) => {
            return { id: input.id, name: 'User' };
        }),
});

// Set up the express middleware to handle TRPC requests
app.use('/trpc', (req, res, next) => {
    const caller = t.createCallerFactory(appRouter)({});
    req.body = caller[req.body.method as keyof typeof caller](req.body.input);
    next();
});
// Start the server
app.listen(4000, () => {
    console.log('TRPC server is running on http://localhost:4000');
});
