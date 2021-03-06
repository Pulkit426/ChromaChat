import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
import roomService from '../services/rooms'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { newRoom } from '../reducers/rooms';
import LogoutMenu from './LogoutMenu';

const Sidebar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const rooms = useSelector(state => state.rooms)
  const [filteredRooms, setFilteredRooms] = useState(rooms) 
  console.log("SIDEBAR FILTERED ROOMS",filteredRooms)

  useEffect(() => {
    setFilteredRooms(rooms)
  }, [rooms])

  const createChat = async () => {
    const roomName = window.prompt("Enter the name of the room")

    if(roomName){
      const newRoomValue = await roomService.create({name: roomName})
      dispatch( newRoom(newRoomValue))
      setFilteredRooms(prevRooms => [...prevRooms, newRoomValue])
    }
  
  }

  const handleSearch = (event) => {
    const searchValue = event.target.value
    setFilteredRooms(rooms.filter(room => room.name.toLowerCase().includes(searchValue.toLowerCase())))
  }

  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
        <Avatar src={`https://api.multiavatar.com/${user.username}.svg`}/>
            <div className='sidebar__headerRight'>
              <LogoutMenu />           
            </div>
        </div>

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search Rooms" onChange= {handleSearch}/>
          </div>
        </div>

         <div onClick={createChat} className="sidebar__newChatRoom">
         <h3> +  Add New Room </h3>       
        </div>

        <div className="sidebar__chats">
         
        {rooms && filteredRooms.map(room => <Link style={{textDecoration: "none", color: "black"}} to={`/rooms/${room.id}`} > <SidebarChat room={room} roomId={room.id} /> </Link>)}
        </div>

        
       
    </div>

  )
}

export default Sidebar