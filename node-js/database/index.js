import mongoose from "mongoose";
import Role from "../models/role.model";


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

mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
            });
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}
export default dbConnect;