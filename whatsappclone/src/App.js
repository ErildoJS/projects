import React, {useState} from 'react'
import './App.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'

export default () => {
  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Erildo', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'patricio', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'hihangua', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'francisco', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    
  ])
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className="app-window">
      <div className="sidebar">
          <header>
            <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="User"/>
            <div className="header--buttons">
              <div className="header--btn">
                <DonutLargeIcon style={{color: '#919191'}}/>
              </div>

              <div className="header--btn">
                <ChatIcon style={{color: '#919191'}}/>
              </div>

              <div className="header--btn">
                <MoreVertIcon style={{color: '#919191'}}/>
              </div>
            </div>
          </header>

          <div className="search">
            <div className="search--input">
              <SearchIcon fontSize="small" style={{color: '#919191'}}/>
              <input type="text" placeholder="Procurar ou começar uma nova conversa"/>
            </div>
          </div>

          <div className="chatlist">
            {chatlist.map((item ,key) => (
              <ChatListItem 
                key={key}
                data={item}
                active={activeChat.chatId === chatlist[key].chatId }
                onClick={() => setActiveChat(chatlist[key])}
              />
            ))}
          </div>
      </div>

      <div className="contentarea">
        {activeChat.chatId !== undefined && //tem chat activo
          <ChatWindow />
        }
        {activeChat.chatId === undefined && //nao tem chat activo
          <ChatIntro />
        }
      </div>
    </div>
  )
}