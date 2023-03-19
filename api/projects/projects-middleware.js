const Projects = require("./projects-model");

async function validateProjectID(req, res, next) {
    req.project = await Projects.get(req.params.id);
    if(req.project) next();
    else next({
        message: "No such project ID.",
        status: 404
    })
}

function validateProject(req, res, next) {
    let { name, description } = req.body;

    if(name) name = name.trim();
    if(description) description = description.trim();

    if(name && description) next();
    else next({
        message: "Project name and description and required.",
        status: 422
    });
}

module.exports = {
    validateProjectID,
    validateProject
};