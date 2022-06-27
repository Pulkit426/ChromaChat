import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@mui/material'

const SidebarChat = (props) => {
  return (
    <div className='sidebarChat'>
       <Avatar />
        <div className="sidebarChat__info">
            <h2> {props.room.name} </h2>
            <p> Last message </p>
        </div>
    </div>
  )
}

export default SidebarChat
