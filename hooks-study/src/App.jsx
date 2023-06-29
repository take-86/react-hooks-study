import { useEffect, useState, useContext, useRef } from 'react';
import './App.css'
import UserInfoContext from "./main";

function App() {
  //★コンテキストを利用
  const userInfo = useContext(UserInfoContext);
  //★初期値を設定してレンダリング時に更新分を渡す
  const [count,setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() =>{
    //★イベント発火のタイミングを決めることができる
    console.log("hello hooks");
  },[count])

  
  //★useRef プロパティ情報（文字列など）を取得できる
  const ref = useRef();
  const handleRef = () => {
    console.log(ref);
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  }

  return (
    <>
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
      <hr />
      <h1>useContext</h1>
      <p>{userInfo.name}</p>
      <p>{userInfo.age}</p>
      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}></button>
      <hr />
      <h1>useReducer</h1>
      
    </>
  )
}

export default App
