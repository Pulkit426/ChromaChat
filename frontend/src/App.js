import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import messageService from './services/messages'

function App() {
  const [messages, setMessages] = useState([])
  
  const initializeAllMessages = async () => {
    const allMessages = await messageService.getAll()
    setMessages(allMessages)
  }

  useEffect(() => {
    initializeAllMessages()
  }, [])

  useEffect(() => {
    const pusher = new Pusher('a71c2a5658b701ee38fc', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });

  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
