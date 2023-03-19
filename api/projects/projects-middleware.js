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

    const failureError = {
        message: "Project name and description and required.",
        status: 400
    };

    if(name && typeof name == "string" && description && typeof description == "string") {
        name = name.trim();
        description = description.trim();

        if(name && description) next();
        else next(failureError);
    } else next(failureError);
}

module.exports = {
    validateProjectID,
    validateProject
};