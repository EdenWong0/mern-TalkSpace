const mongoose = require("mongoose");
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PW;

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.2uh0jpb.mongodb.net/?retryWrites=true&w=majority&appName=chatAppMern`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Could not connect to MongoDB:", err));
