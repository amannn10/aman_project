import mongoose from 'mongoose';
const { connect } = mongoose;
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yoqy1dc.mongodb.net/amanDB?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    const conn = await connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log('MongoDB Connected Successfull', conn.connection.host);
  } catch (error) {
    console.error(`Mongo DB Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

export default connectDB;
