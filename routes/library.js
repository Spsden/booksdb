const express = require("express");
const router = express.Router();

const {
    createLibrary
  } = require("../controllers/library");

  router.route("/").post(createLibrary);

  module.exports = router