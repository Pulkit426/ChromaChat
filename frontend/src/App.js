import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import messageService from './services/messages'
import { useDispatch, useSelector } from 'react-redux';
import { intitializeMessages, newMessage } from './reducers/messages';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import roomService from './services/rooms'
import {intitializeRooms} from './reducers/rooms'
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages)
  const rooms = useSelector(state => state.rooms)
  
  const initializeAllMessages = async () => {
    const allMessages = await messageService.getAll()
    dispatch(intitializeMessages(allMessages))
  }

  const initializeAllRooms = async () => {
    const allRooms = await roomService.getAll()
    dispatch(intitializeRooms(allRooms))
    console.log("ROOMS USEEFFECT", rooms)
  }

  useEffect(() => {
    initializeAllMessages()
    initializeAllRooms()
  }, [])

  useEffect(() => {
    const pusher = new Pusher('a71c2a5658b701ee38fc', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (message) => {
      dispatch(newMessage(message))
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages])

  console.log(messages)

  return (
   
      <div className="app">
      <div className='app_body'>
      <Router>
        <Sidebar />
        
        <Routes>
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/signup' element={<SignUpPage /> } />

        <Route path='/rooms/:roomId' element={<Chat />} />

        </Routes>
      
        

        </Router>
      </div>
      
    </div>
  
    
  );
}

export default App;
