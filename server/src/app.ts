import 'dotenv/config';
import express from 'express';
import config from '../config/config';
import setupExpress from '../config/expressConfig';
import connect from '../config/mongooseConfig';

const app = express();

app.set('trust proxy', 1);

setupExpress(app);
connect();


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})