const mongoose = require('mongoose')
const {AppliedJob} = require("../Models/jobApplied.model")
const jwt = require("jsonwebtoken")


const getAppliedJob = async (req, res)=>{
    const token = req.headers?.authorization?.split(" ")[1];
try{
    var decoded = jwt.verify(token, 'secret');
const jobs = await AppliedJob.find({userId: decoded.userId})
    res.send({ jobs });
}catch(err){
    res.send({ err: "Something went wrong" });
}
}

const addApplyJob = async (req, res)=>{
    const payload = req.body
try{
const job = new AppliedJob(payload)
await job.save()
res.send({ payload });
}catch(err){
    res.send({ "err": "Something went wrong" });
}
}


module.exports = {
    getAppliedJob,
    addApplyJob
}