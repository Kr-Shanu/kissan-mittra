require ("dotenv").config();
const mongoose = require("mongoose");
const jwt = require ("jsonwebtoken");

const userDetailSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
});

userDetailSchema.methods.generateAuthToken = async function () {
    try{
        const token = await jwt.sign(
            { _id: this._id.toString() },
            process.env.JWTTOKEN_KEY
          );
          this.tokens = this.tokens.concat({ token: token });
          await this.save();
          return token;
    }catch(e){
        console.log(e);
    }
};

const kissanDetailModel = new mongoose.model("KissanDetail",userDetailSchema);
module.exports = kissanDetailModel;