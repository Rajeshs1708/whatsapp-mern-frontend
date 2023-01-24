import Sidebar from './Sidebar'
import Chat from './Chat'
import './App.css'
import { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import axios from './Axios'

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/api/messages/sync').then(response => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('0016fb1fee0afff35e28', {
      cluster: 'ap2'
    })

    const channel = pusher.subscribe('messages')
    channel.bind('inserted', newMessage => {
      setMessages([...messages, newMessage])
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
