import React, { useState } from 'react'
import './Chat.css'
import {Avatar, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { useSelector } from 'react-redux';

const Chat = () => {
  const messages = useSelector(state => state)
  console.log("INISDE CHAT COMPONENT",messages)

  const [input,setInput] = useState('')

  const sendMessage = (event) => {
    event.preventDefault()
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

      <form>
        <input value={input} 
               onChange= {(event) => setInput(event.target.value) }
               placeholder="Type a message" type="text" />
        <button onClick={sendMessage} type='submit'> Send </button>
      </form>

      <MicNoneOutlinedIcon />

    </div>  
    </div>

)}

export default Chat