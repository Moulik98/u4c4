const { ISO_8601 } = require("moment");
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{type: String , required :true},
        createdAt:{type : date , default: Date.now},
        updatedAt:{type : date , default: Date.now},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("todo", todoSchema)