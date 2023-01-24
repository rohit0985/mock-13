const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
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

const JobModel = mongoose.model("job", jobSchema);

module.exports = {JobModel}