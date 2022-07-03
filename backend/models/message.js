const mongoose = require('mongoose')

const schema = mongoose.Schema({
message: String,
name: String,
timestamp: String,
received: Boolean,
room : {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Room'
}
})

schema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('messageContent', schema)