const express = require("express");
const router = express.Router();

const {
    createLibrary,
    getAllLibrary
  } = require("../controllers/library");

  router.route("/").get(getAllLibrary).post(createLibrary)

  module.exports = router