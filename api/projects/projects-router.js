const express = require("express");

const Projects = require("./projects-model");

const {

} = require("./projects-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
    Projects.get()
        .then( projects => res.json(projects))
        .catch(next);
})

module.exports = router;