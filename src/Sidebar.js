import React from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        Sidebar 
        <div className='sidebar_header'>
        <Avatar />
            <div className='sidebar_headerRight'>
              
              <IconButton>
                <DonutLargeIcon />
              </IconButton>

              <IconButton>
                <ChatIcon/>
              </IconButton>

              <IconButton>
                <MoreVertIcon />
              </IconButton>
           
           
            </div>
        </div>
       
    </div>

  )
}

export default Sidebar