const mongoose = require("mongoose");
require ("dotenv").config();
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017").then(()=>{
    console.log("Database Connected");
})
.catch((e)=>{
    console.log(e);
})