import express from 'express';
import cors from 'cors';
import { Application } from 'express-serve-static-core';

const app: Application = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    res.json({
        message: "Api conectada"
    })
});

app.use((err: any, req: any, res: any, next: any)=>{
    console.log(err);
    res.status(500).json({
        error: "Error interno en el servidor"
    });
});


export default app;