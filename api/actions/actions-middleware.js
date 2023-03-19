const Actions = require("./actions-model");

async function validateActionID(req, res, next) {
    req.action = await Actions.get(req.params.id);
    if(req.action) next();
    else next({
        message: "No such action ID.",
        status: 404
    })
}

module.exports = {
    validateActionID
}