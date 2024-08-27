import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`.bgYellow.bold);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); //bad request
    }
};

export default connectDB;