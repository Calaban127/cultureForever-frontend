//require dot env b.c this is the entry point for the app
require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// let's go!

//deets creates a clickable link from the url
//sell it

//TODO use express middleware to handle cookies (JWT)
//TODO use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port
     http:/localhost:${deets.port}`);
  }
);
