require('dotenv').config()

exports.config = {
   userDB:process.env.USER_DB,
   passDB:process.env.PASS_DB,
   tokenSecret:process.env.TOKENSECRET,
   API_KEY:process.env.API_KEY,
   API_SECRET:process.env.API_SECRET,
   CLOUD_NAME:process.env.CLOUD_NAME,
   
}