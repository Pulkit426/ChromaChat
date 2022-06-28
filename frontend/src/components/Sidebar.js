import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
import roomService from '../services/rooms'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    roomService.getAll().then(data => setRooms(data))
  }, [])

  const createChat = async () => {
    const roomName = window.prompt("Enter the name of the room")

    if(roomName){
      const newRoom = await roomService.create({name: roomName})
      setRooms(prevRooms => [...prevRooms, newRoom])
    }
  
  }

  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
        <Avatar />
            <div className='sidebar__headerRight'>
              
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

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start a new chat" />
          </div>
        </div>

         <div onClick={createChat} className="sidebar__newChatRoom">
         <h3> +  Add New Room </h3>       
        </div>

        <div className="sidebar__chats">
         
        {rooms && rooms.map(room => <Link to={`/rooms/${room.id}`} > <SidebarChat room={room} /> </Link>)}
        </div>

        
       
    </div>

  )
}

export default Sidebar