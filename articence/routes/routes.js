const express = require('express');
const router = express.Router();
const csvtojson = require('csvtojson');


module.exports.index=function(req,res,next)
{
    csvtojson().fromFile("dataset.csv").then(source =>{
        console.log("hello world!")
        res.json(source);
        
    })
};


