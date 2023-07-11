const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");
require("../Databases/dbConnect");
const userDetail = require("../Databases/kissanDetail");
const landDetail = require("../Databases/landDetail");
const bcrypt = require("bcryptjs");
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post("/api/register", async (req, res) => {
  try {
    const fetchedPswd = req.body.password[0];
    const hashedPswd = await bcrypt.hash(fetchedPswd, 10);
    const fetchedUserDetail = new userDetail({
      firstName: req.body.firstName[0],
      lastName: req.body.lastName[0],
      email: req.body.email[0],
      password: hashedPswd,
    });
    await fetchedUserDetail.save();
    const jwtToken = await fetchedUserDetail.generateAuthToken();
    res.send({
      jwt: jwtToken,
      id: fetchedUserDetail._id,
    });
    console.log(fetchedUserDetail);
    console.log(jwtToken);
  } catch (e) {
    console.log(e);
  }
});

router.post("/api/login", async (req, res) => {
  try {
    const fetchedUserDetail = req.body;
    const fetchedFromDb = await userDetail.findOne({
      email: req.body.email[0],
    });
    if (fetchedFromDb != null) {
      const pwMatch = await bcrypt.compare(
        fetchedUserDetail.password[0],
        fetchedFromDb.password
      );
      const jwtToken = await fetchedFromDb.generateAuthToken();
      if (pwMatch) {
        res.send({
          loginMatched: true,
          jwt: jwtToken,
          id: fetchedFromDb._id,
        });
      } else {
        res.send({
          loginMatched: false,
        });
      }
    } else {
      res.send({
        loginMatched: false,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/api/authcheck", async (req, res) => {
  try {
    const fetchedUserDetail = req.body;
    if(fetchedUserDetail.jwt==null){
        res.send({
            auth : "failed"
        })
        return;
    }
    const verifyToken = jwt.verify(fetchedUserDetail.jwt,process.env.JWTTOKEN_KEY);
      const user = await userDetail.findOne({ _id: verifyToken._id });
      if(user!=null){
        res.send({
            auth : "success"
        })
      }else {
        res.send({
            auth : "failed"
        })
      }
  } catch (e) {
    console.log(e);
  }
});

router.post("/api/addland",async(req,res)=>{
  try{
    let fetchedData = req.body;
    const landDatadb = new landDetail({
      user_id:fetchedData.user_id,
      fieldName:fetchedData.fieldName[0],
    landArea:fetchedData.landArea[0],
    addfield:fetchedData.addfield[0],
    location:fetchedData.location,
    description:fetchedData.description[0],
    });
    await landDatadb.save();
    res.send(landDatadb);
  }catch(e){
    console.log(e);
  }
})

router.post("/api/test", async (req, res) => {
  try {
    console.log(req.body);
    res.send("data recieved successfully");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
