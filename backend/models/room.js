const mongoose = require('mongoose')

const schema = mongoose.Schema({
name: String,
messages: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'messageContent'
}]
})

schema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Room', schema)