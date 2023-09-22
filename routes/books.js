const express = require("express");
const router = express.Router();

const {
  getAllBooks,
 
  // getTask,

  // deleteTask,
} = require("../controllers/books");

router.route("/").get(getAllBooks);
//router.route("/:id").get(getTask).delete(deleteTask);

module.exports = router;
