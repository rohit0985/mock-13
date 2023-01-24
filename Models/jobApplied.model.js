const mongoose = require("mongoose")

const appliedJobsSchema = mongoose.Schema({
    company: {type: String},
    position : {type: String},
    contract : {type: String},
    location : {type : String},
    userId : {type: String}
},
{
    versionKey : false, 
    timestamps: true
}
)

const AppliedJob = mongoose.model("appliedJob", appliedJobsSchema);

module.exports = {AppliedJob}