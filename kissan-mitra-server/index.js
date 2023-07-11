const express =require("express");
const app=express();
const port=process.env.PORT || 8080;
const router=require("./routes/routes");

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.use(express.json()); // if disabled the data will json data will come as undefined

app.listen(port,()=>{
    console.log("localhost connected");
})

app.use(router);