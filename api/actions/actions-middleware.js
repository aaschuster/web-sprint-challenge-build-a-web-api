const Actions = require("./actions-model");
const Projects = require("../projects/projects-model");

async function validateActionID(req, res, next) {
    req.action = await Actions.get(req.params.id);
    if(req.action) next();
    else next({
        message: "No such action ID.",
        status: 404
    })
}

async function validateAction(req, res, next) {
    try {
        const { project_id } = req.body;
        if(!project_id) throw new Error("Please provide project id.");

        const project = await Projects.get(project_id);
        if(!project) throw new Error("Project ID not valid.");

        let { description, notes } = req.body;
        
        if(description && typeof description == "string" && notes && typeof notes === "string") {
            description = description.trim();
            notes = notes.trim();

            if(description.length>128) throw new Error("Description has character limit of 128.");
            else if (description && notes) next();
            else throw new Error("Description and notes are required.");
        } else throw new Error("Description and notes are required and must be strings.");
    } catch (err) {
        next({
            message: err.message,
            status: 422
        })
    }
}

module.exports = {
    validateActionID,
    validateAction
}