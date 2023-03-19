const express = require('express');
const server = express();

server.use(express.json());

const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");

server.use("/api/projects", projectsRouter);
// server.use("/api/actions", actionsRouter);

server.use( (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server;
