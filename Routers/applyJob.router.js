const express = require("express")
const ApplyJobRouter = express.Router()
const { getAppliedJob, addApplyJob }  = require("../Controllers/appliedJobs.controller")
const {authenticate} = require("../MiddleWares/authenticate")


ApplyJobRouter.get("/", authenticate, getAppliedJob)
ApplyJobRouter.post("/add", authenticate, addApplyJob)


module.exports = {ApplyJobRouter}

