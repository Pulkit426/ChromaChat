import React, { useState } from 'react'
import './Chat.css'
import {Avatar, IconButton} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import messageService from '../services/messages'
import { newMessage } from '../reducers/messages';
import {useParams} from "react-router-dom"

const Chat = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const messages = useSelector(state => state.messages)
  const rooms = useSelector(state => state.rooms)
  console.log("INISDE CHAT COMPONENT",messages, rooms)

  const [messageInput,setMessageInput] = useState('')
  const {roomId} = useParams()

  const filteredRoom = rooms.find(room => room.id===roomId)
  console.log("FILTER ROOM", filteredRoom)
  

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
        name: user.username,
        message: messageInput,
        timestamp: setISTTime(),
        received: true,
        room: roomId
      })

    dispatch(newMessage(msg))
    setMessageInput('')
    
  }

  return (
    <div className='chat'>
        <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${roomId}.svg`} />

            <div className="chat__headerInfo">
                <h3>{filteredRoom && filteredRoom.name}</h3>
            </div>

            <div className="chat__headerUser">
               {user.username} 
            </div>
            logged in 
        </div>

      <div className="chat__body">
        {messages && messages.slice().filter(msg =>       msg.room === roomId).
        map((message) => {
          return (
            <p className={`chat__message ${message.name === user.username && 'chat__receiver'}`}>
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

      <form onSubmit={sendMessage}>
        <input value={messageInput} 
               onChange= {(event) => setMessageInput(event.target.value) }
               placeholder="Type a message" 
               type="text" 
               required />
        <button type='submit'> Send </button>
      </form>

    </div>  
    </div>

)}

export default Chat