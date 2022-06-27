const router = require('express').Router()
const Room = require('../models/room')

router.get('/', (req,res) => {
    Room.find(
        (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })

})


router.post('/', (req,res) => {
    const newRoom = req.body

    Room.create(newRoom, (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

module.exports = router