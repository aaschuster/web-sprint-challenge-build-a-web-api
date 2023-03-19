const express = require("express")

const Actions = require("./actions-model");

const {
    validateActionID,
    validateAction
} = require("./actions-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
    Actions.get()
        .then( actions => res.json(actions) )
        .catch(next);
})

router.get("/:id", validateActionID, (req, res, next) => {
    Actions.get(req.params.id)
        .then( action => res.json(action) )
        .catch(next);
})

router.post("/", validateAction, (req, res, next) => {
    Actions.insert(req.body)
        .then( newAction => res.json(newAction) )
        .catch(next);
})

router.put("/:id", validateAction, validateActionID, (req, res, next) => {
    Actions.update(req.params.id, req.body)
        .then( updatedAction => res.json(updatedAction) )
        .catch(next);
})

router.delete("/:id", validateActionID, (req, res, next) => {
    Actions.remove(req.params.id)
        .then(() => res.end())
        .catch(next);
})

module.exports = router;