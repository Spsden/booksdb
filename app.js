const express = require("express");
require("express-async-errors");
const app = express();
const { connectDB } = require("./db/connect");
require("dotenv").config();
const auth = require("./routes/auth");
const books = require("./routes/books");
const library = require("./routes/library")

const notFound = require("./middleware/not_found");
const errorHandler = require("./middleware/error_handler");
const authenticateUser = require("./middleware/authentication");

//security packages
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');


///middlewares

app.set('trust proxy', 1)
app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, 
	max: 100, 
	standardHeaders: true, 
	legacyHeaders: false, 
}))
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())

 app.use("/api/v1/auth/", auth);
app.use("/api/v1/bookdb/", books);
app.use("/api/v1/library/",authenticateUser,library)
app.use(notFound);
app.use(errorHandler);

const port = 5000;

const start = async () => {
  try {
    console.log(process.env.MONGO_URI)
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app





///Designed ports
//app.get('/api/v1/tasks') =get all tasks
//app.post('api/v1/tasks') = create a new task
//app.get('api/v1/tasks/:id') = get a single task
//app.delete('api/v1/tasks/:id') = delete a single task
//app.patch('api/v1/tasks/:id') = update a single task


