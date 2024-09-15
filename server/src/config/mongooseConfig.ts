import 'dotenv/config';
import mongoose, { ConnectOptions } from 'mongoose';

function connect() {
    mongoose.connect(process.env.CONNECTION_STRING as string);

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
        console.log('Database connected');
    })
}

export default connect;