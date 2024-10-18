import mongoose from "mongoose";

const ConnectDB = async () => {

    mongoose.connection.on('connected' , () => {
        console.log("Database Connected");
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}

export default ConnectDB