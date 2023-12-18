import mongoose from "mongoose";

/**
 * 
 */
async function connectToDB() {
    const dbURL = process.env.DB_HOST as string;

    try {
        console.log("Database connection established");

        await mongoose.connect(dbURL);
    }
    catch (error) {
        console.log(`Failed to connect to database: ${error}`);
        process.exit(1);
    }
}

export default connectToDB;