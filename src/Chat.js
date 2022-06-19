import React from 'react'
import './Chat.css'
import {Avatar, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Chat = () => {
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
    </div>
)}

export default Chat