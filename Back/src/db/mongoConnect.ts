import mongoose from 'mongoose'

export async function initDB() {
  try {
    mongoose.set('strictQuery', false);
    console.log("test",process.env.testo);
    
    await mongoose.connect(process.env.mongoDB_URI);
    console.log("\x1b[33m Connected to DataBase MongoDB\x1b[0m ");
  } catch (error) {
    console.log(error);
  }
}