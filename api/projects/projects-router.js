const express = require("express");

const Projects = require("./projects-model");

const {
    validateProjectID,
    validateProject
} = require("./projects-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
    Projects.get()
        .then( projects => res.json(projects) )
        .catch(next);
})

router.get("/:id", validateProjectID, (req, res, next) => {
    Projects.get(req.params.id)
        .then( project => res.json(project) )
        .catch(next);
})

router.post("/", validateProject, (req, res, next) => {
    Projects.insert(req.body)
        .then( newProject => res.status(201).json(newProject) )
        .catch(next);
})

router.put("/:id", validateProject, validateProjectID, (req, res, next) => {
    Projects.update(req.params.id, req.body)
        .then( updatedProject => res.json(updatedProject) )
        .catch(next);
})

module.exports = router;