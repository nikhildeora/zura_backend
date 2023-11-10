const express = require("express");
const { ProjectModel } = require("../models/project.model.js");
const projectRoute = express.Router();

// these all are private routes, if user logged in then only user can do that ServiceWorkerRegistration, In future when we create signup and login page, we send token and with help of token we create middleware.
projectRoute.get("/", async (req, res) => {
  const user_id = req.headers.authorization;
  try {
    const projects = await projectRoute.find({ user_id });
    res.send({ message: "successfully get all projects", projects });
  } catch (error) {
    res.send({ message: "error in getting projects", error });
  }
});

projectRoute.post("/create_project", async (req, res) => {
  const {project_name} = req.body;  
  const user_id = req.headers.authorization;
  try {
    const new_project = new projectRoute({project_name, user_id});
    await new_project.save();
    const projects = await projectRoute.find({ user_id });
    res.send({ message: "successfully created new project", projects });
  } catch (error) {
    res.send({ message: "error in creating project", error });
  }
});

module.exports = { projectRoute };
