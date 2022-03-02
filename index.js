const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const rout = require("./Rout");
const cors = require("cors")
const url = "mongodb://localhost:27017/todo";

mongoose.connect(url).then(()=>{
    console.log("connected db");
})
 
const app = express();

app.use(express.json());
app.use("/img",express.static("./photos"))

app.use(morgan("dev"));
app.use(cors())
app.use("/",rout);


app.listen(7070,()=> console.log("connected"))