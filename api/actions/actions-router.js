const express = require("express")

const Actions = require("./actions-model");

const {
    validateActionID
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

module.exports = router;