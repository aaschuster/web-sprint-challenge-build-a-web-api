const Projects = require("./projects-model");

async function validateProjectID(req, res, next) {
    req.project = await Projects.get(req.params.id);
    if(req.project) next();
    else next({
        message: "No such project ID.",
        status: 404
    })
}

module.exports = {
    validateProjectID
};