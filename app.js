"use strict"

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.listen(port, () =>{
    console.log("Server running...")
})

app.get('/dog', (req,res) => {
    res.send("멍멍");
})