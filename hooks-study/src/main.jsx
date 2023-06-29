import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Appコンポーネントにグローバルにユーザーデータを渡す
const userInfo = {
  name:"竹内"
  ,age: 28
}

// ★コンテキストの１文字目は大文字で扱う
const UserInfoContext = createContext(userInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserInfoContext.Provider value={userInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </UserInfoContext.Provider>
);

export default UserInfoContext;
