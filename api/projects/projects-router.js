const express = require("express");

const Projects = require("./projects-model");

const {
    validateProjectID
} = require("./projects-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
    Projects.get()
        .then( projects => res.json(projects))
        .catch(next);
})

router.get("/:id", validateProjectID, (req, res, next) => {
    Projects.get(req.params.id)
        .then( project => res.json(project))
        .catch(next);
})

module.exports = router;