import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import ChatIcon from '@mui/icons-material/Chat'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Avatar, IconButton } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'

function Sidebar () {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNK68qtlu2K3AAnHqi5XA07hOAaekg3RXeYoMUEI&s' />
        <div className='sidebar__headerRight'>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className=' sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
