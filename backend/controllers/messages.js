const router = require('express').Router()

const Message = require('../models/message')

router.get('/', (req,res) => {
    Message.find(
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

    // if (!request.user) {
    //     return response.status(401).json({ error: 'token missing or invalid' })
    //   }
      
    const dbMessage = req.body

    Message.create(dbMessage, (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

module.exports = router