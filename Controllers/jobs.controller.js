const mongoose = require('mongoose')
const {JobModel} = require("../Models/job.model")
const {AppliedJob} = require("../Models/jobApplied.model")
const jwt = require("jsonwebtoken")


const getJob = async (req, res)=>{
    const token = req.headers?.authorization?.split(" ")[1];
try{
    var decoded = jwt.verify(token, 'secret');
const jobs = await JobModel.find()
    res.send({ jobs });
}catch(err){
    res.send({ err: "Something went wrong" });
}
}


const addJob = async (req, res)=>{
    const payload = req.body
try{
    
const job = new JobModel(payload)
await job.save()
res.send({ payload });
}catch(err){
    res.send({ "err": "Something went wrong" });
}
}

const deleteJob = async (req, res)=>{
    const {jobId} = req.params
    try{
    await JobModel.findByIdAndDelete({_id:jobId})
    res.send({ "msg": "Job deleted" });
    }catch(err){
        res.send({ "err": "Something went wrong" });
    }
}

const editJob = async (req, res)=>{
    const {jobId} = req.params
    const payload = req.body
    try{
     await JobModel.findByIdAndUpdate({_id:jobId}, payload)
    res.send({ "msg": "Job updated" });
    }catch(err){
        res.send({ "err": "Something went wrong" });
    }
}


module.exports = {
    getJob,
    addJob,
    deleteJob,
    editJob
}