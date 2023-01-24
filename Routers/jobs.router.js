const express = require("express")
const JobRouter = express.Router()
const { getJob, addJob, deleteJob, editJob }  = require("../Controllers/jobs.controller")
const {authenticate} = require("../MiddleWares/authenticate")


JobRouter.get("/", authenticate, getJob)
JobRouter.post("/add", authenticate, addJob)
JobRouter.delete("/delete/:jobId", authenticate, deleteJob)
JobRouter.patch("/edit/:jobId", authenticate, editJob)

module.exports = {JobRouter}

