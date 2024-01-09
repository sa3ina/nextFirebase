require("dotenv").config();
import mongoose from "mongoose";
const connectDb = () => {
  mongoose
    .connect(
      "mongodb+srv://bd6zv16m3:person@cluster0.pyzg9zp.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected to Mongodb");
    })
    .catch((err: Error) => {
      console.log("err" + err);
    });
};
export default connectDb;
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
