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
import { initializeUser } from './reducers/user';
import {Navigate} from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages)
  const rooms = useSelector(state => state.rooms)
  const user = useSelector(state => state.user)
  
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
    dispatch(initializeUser())
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
        
        
        <Routes>
        <Route path='/' element={user && user.token ? <Sidebar /> : <Navigate to='/login' />} /> 
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/signup' element={<SignUpPage /> } />
        <Route path='/rooms'  element={user && user.token ? <Sidebar /> : <Navigate to='/login' />} />

        <Route path='/rooms/:roomId' element={
        user && user.token 
        ? <>
        <Sidebar />
        {rooms && <Chat />}
        </>
        : <Navigate to='/login' />} 
        />

        </Routes>
      
        

        </Router>
      </div>
      
    </div>
  
    
  );
}

export default App;
