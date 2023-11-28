import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;

const urlDatabase = `mongodb+srv://${user}:${password}@cluster0.puynk6p.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(urlDatabase);

mongoose.connection.on('connected', () => {
  console.log('connection established');
});

mongoose.connection.on('error', (error) => {
  console.log(`sometihing went wrong: ${error}`);
});


export default mongoose.connection;

