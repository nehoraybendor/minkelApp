import mongoose from 'mongoose'
import { config } from 'dotenv';




export async function initDB() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect((config as any).mongoDB_URI);
    console.log("Connected to DataBase MongoDB");
  } catch (error) {
    console.log(error);
  }
}