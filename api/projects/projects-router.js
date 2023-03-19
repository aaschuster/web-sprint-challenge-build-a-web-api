const express = require("express");

const Projects = require("./projects-model");

const {

} = require("./projects-middleware");

const router = express.Router();

router.get("/", (req, res) => {
    res.json("Hello from projects router");
})

module.exports = router;