import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@mui/material'
import { useSelector } from 'react-redux'

const SidebarChat = (props) => {
  const messages  = useSelector(state => state.messages)

  const filteredMessages= messages.slice()
                              .filter(message => message.room === props.roomId)
  console.log("LAST MESSAGE" , filteredMessages)
                              

  return (
    <div className='sidebarChat'>
       <Avatar src={`https://avatars.dicebear.com/api/bottts/${props.roomId}.svg`} />
        <div className="sidebarChat__info">
            <h2> {props.room.name} </h2>
            <p>{filteredMessages.length!==0 && `${filteredMessages[filteredMessages.length-1]?.name} : ${filteredMessages[filteredMessages.length-1].message.split(" ").splice(0,5).join(" ")}`} </p>
        </div>
    </div>
  )
}

export default SidebarChat
