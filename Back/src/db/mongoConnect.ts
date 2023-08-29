import mongoose from 'mongoose'

export async function initDB() {
  try {
    mongoose.set('strictQuery', false);
    console.log("test",process.env.testo);
    
    await mongoose.connect(process.env.mongoDB_URI);
    console.log("Connected to DataBase MongoDB");
  } catch (error) {
    console.log(error);
  }
}