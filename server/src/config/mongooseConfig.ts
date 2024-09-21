import 'dotenv/config';
import mongoose from 'mongoose';
import Logger from './loggerConfig';

function connect() {
    mongoose.connect(process.env.CONNECTION_STRING as string);

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
        Logger.debug('Database connected');
    })
}

export default connect;