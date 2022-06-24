import React, { useState } from 'react'
import './Chat.css'
import {Avatar, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { useDispatch, useSelector } from 'react-redux';
import messageService from './services/messages'
import { newMessage } from './reducers/messages';

const Chat = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state)
  console.log("INISDE CHAT COMPONENT",messages)

  const [messageInput,setMessageInput] = useState('')

  const setISTTime = () => { 
    var dateUTC = new Date();
  var dateUTC = dateUTC.getTime() 
  var dateIST = new Date(dateUTC);
  //date shifting for IST timezone (+5 hours and 30 minutes)
  dateIST.setHours(dateIST.getHours() + 5); 
  dateIST.setMinutes(dateIST.getMinutes() + 30);
  return dateIST
  }
    

  const sendMessage = async (event) => {
    event.preventDefault()

    const msg = await messageService.create({
      name: "Pulkit",
      message: messageInput,
      timestamp: setISTTime(),
      received: false
    })

    dispatch(newMessage(msg))
    setMessageInput('')
    
  }

  return (
    <div className='chat'>
        <div className="chat__header">
            <Avatar />

            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p> Last Seen at ... </p>
            </div>

            <div className="chat__headerRight">
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
              
              <IconButton>
              <AttachFileIcon />
              </IconButton>

              <IconButton>
                <MoreVertIcon /> 
              </IconButton>
          
            </div>
        </div>

      <div className="chat__body">
        {messages && messages.slice().map((message) => {
          return (
            <p className={`chat__message ${message.received && 'chat__receiver'}`}>
          <span className="chat__name">
            {message.name}
          </span>

          {message.message}

          <span className="chat__timestamp">
            {message.timestamp}
          </span>
        </p>)

        })}
        
      </div>

    <div className="chat__footer">
      <InsertEmoticonOutlinedIcon />

      <form onSubmit={sendMessage}>
        <input value={messageInput} 
               onChange= {(event) => setMessageInput(event.target.value) }
               placeholder="Type a message" 
               type="text" 
               required />
        <button type='submit'> Send </button>
      </form>

      <MicNoneOutlinedIcon />

    </div>  
    </div>

)}

export default Chat