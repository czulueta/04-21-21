const express = require("express")
const exteriorRouter = express.Router()
const Exterior = require("../models/exterior.js")

exteriorRouter.get("/", (req, res, next) => {
    Exterior.find((err, foundJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundJob)
    })
})
exteriorRouter.post("/", (req, res, next) => {
    const newJob = new Exterior(req.body)
    newJob.save((err, savedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savdedJob)
    })
})
module.exports = exteriorRouter