const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./config/db')();
const VehicleRoute = require('./routes/vechicle');

app.use(cors()) 
app.use(express.json());

app.use("/api/vehicle", VehicleRoute);


app.listen(5000,()=>{
    console.log("listening on the port: 5000");
})