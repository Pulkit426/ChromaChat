const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port= process.env.PORT || 3001

const connection_url = 'mongodb+srv://admin:LAZWIpVF57CO3DjA@cluster0.zey54oo.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url)

app.get('/', (req,res) => res.status(200).send("HELLO"))

app.listen(port, () => console.log(`Listening to port ${port}`))