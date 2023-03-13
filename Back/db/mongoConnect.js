const mongoose = require('mongoose');
const {config} = require('../config/secret')
main().catch(err => console.log(err));

async function main() {
  mongoose.set('strictQuery', false);
  await mongoose.connect(`mongodb+srv://${config.userDB}:${config.passDB}@cluster0.ds3pany.mongodb.net/menkelApp`);
  console.log("Connected To pussy you mum");
}