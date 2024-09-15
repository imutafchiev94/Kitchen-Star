import 'dotenv/config';
import express from 'express';
import setupExpress from './config/expressConfig';
import router from './routes';
import connect from './config/mongooseConfig';

const app = express();

app.set('trust proxy', 1);

setupExpress(app);

app.use('/api', router);

connect();


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})