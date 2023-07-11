require ("dotenv").config();
const mongoose = require("mongoose");

const landDetailSchema = new mongoose.Schema({
    user_id: String,
    fieldName:String,
    landArea:Number,
    addfield:String,
    location:{
        lat:Number,
        lng:Number,
    },
    description:String,
})

const landDetailModel = new mongoose.model("landDetail",landDetailSchema);
module.exports = landDetailModel;