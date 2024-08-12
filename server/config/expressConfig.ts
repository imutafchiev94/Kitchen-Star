import express from 'express';
import 'dotenv/config';
import cors from 'cors';

function setupExpress(app: any) {
    app.use(cors());
    app.use(express());
    app.use(express.urlencoded({extended: true}));
}

export default setupExpress;