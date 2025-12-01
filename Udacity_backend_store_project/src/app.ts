import express from 'express';
import cors from 'cors';
import client from './db';


const app = express();

app.use(cors({
    origin: 'http://localhost:4200', // Angular app
    credentials: true,
    methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization']
}));

app.options('*', cors({
    origin: 'http://localhost:4200',
    credentials: true
}));


app.use(express.json());


//Health check
app.get('/ping', async (req, res) => {
    try {
        // quick db check
        const result = await client.query('SELECT 1+1 as result');
        res.json({ ok: true, db: result.rows[0].result });
    } catch (err) {
        res.status(500).json({ ok: false, error: 'DB connection failed', detail: err });
    }
});


export default app;