import mongoose from "mongoose";

const connection = {};
const URL = `${process.env.MONGO_URL}`
async function dbConnect() {
    if (connection.isConnected) {
        return true
    }
    const db = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    connection.isConnected = db.connections[0].readyState;
}
export default dbConnect;