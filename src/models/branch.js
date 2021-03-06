const mongoose = require("mongoose")

const branchSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    name: {
        type: String,
        require: true
    },
    createdIn: {
        type: Date,
        require: true,
        default: new Date
    }
})

module.exports = mongoose.model("branch", branchSchema) 