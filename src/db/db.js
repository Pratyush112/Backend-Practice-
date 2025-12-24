import mongoose from "mongoose";
import {DatabaseName} from "../constants.js";

const connectDB = async () => {
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DatabaseName}`);
        console.log("Connected to MongoDB Host || DB Host: ", connectioninstance.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        process.exit(1);
    }
}

export default connectDB;
