const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, job) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(job)
    })
})
interiorRouter.post("/", (req, res, next) => {
    const newThing = new Interior(req.body)
    newThing.save((err, savedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(201)
    })
})

module.exports = interiorRouter