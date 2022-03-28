const { ISO_8601 } = require("moment");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String , required :true},
        lastName: {type: String , required: false},
        email: {type: String , required :true},
        password: {type: String , required :true},
        createdAt:{type : date , default: Date.now},
        updatedAt:{type : date , default: Date.now},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
module.exports = mongoose.model("user", userSchema)