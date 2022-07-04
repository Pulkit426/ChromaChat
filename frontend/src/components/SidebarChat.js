import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@mui/material'
import { useSelector } from 'react-redux'

const SidebarChat = (props) => {
  const messages  = useSelector(state => state.messages)

  const lastMessage= messages.slice()
                              .filter(message => message.room === props.roomId)
  console.log(lastMessage)
                              

  return (
    <div className='sidebarChat'>
       <Avatar />
        <div className="sidebarChat__info">
            <h2> {props.room.name} </h2>
            <p>{lastMessage && `${lastMessage[lastMessage.length-1].name} : ${lastMessage[lastMessage.length-1].message}`} </p>
        </div>
    </div>
  )
}

export default SidebarChat
