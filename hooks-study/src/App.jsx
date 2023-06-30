import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react';
import './App.css'
import UserInfoContext from "./main";
import SomeChild from "./SomeChild";
import useLocalStorage from "./useLocalStorage";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

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

  //★Reducer 状態管理するためのフック
  const [state, dispatch] = useReducer(reducer, 0);

  //★useMemo パフォーマンスを上げるためのフック
  const [count01,setCount01] = useState(0);
  const [count02,setCount02] = useState(0);
  // const square = () => {
  //   let i = 0;
  //   while (i < 200000000) {
  //     i ++;
  //   }
  //   console.log("クリックしました。");
  //   return count02 * count02;
  // }

  const square = useMemo(() => {
    let i = 0;
    while (i < 2) {
      // ↑↑値を200000000とかにすると遅さがわかる
      i ++;
    }
    console.log("クリックしました。");
    return count02 * count02;
  },[count02]);

  //★useCallBack 関数のメモ化
  const [counter, setCouonter] = useState(0);
  // const showCount = () => {
  //   alert("これは、重い処理です。");
  // }
  const showCount = useCallback(() => {
    alert("これは、重い処理です。");
  },[counter]);

  //★カスタムフック
  const [age,setAge] = useLocalStorage("age", 28);

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
      <button onClick={handleRef}>useRef</button>
      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <hr />
      <h1>useMemo</h1>
      <div>カウント1：{count01}</div>
      <div>カウント2：{count02}</div>
      {/* <div>結果：{square()}</div> */}
      <div>結果：{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>カウント1 +</button>
      <button onClick={() => setCount02(count02 + 1)}>カウント2 +</button>
      <hr />
      <h1>useCallBack</h1>
      <SomeChild showCount={showCount} />
      <hr />
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>
    </>
  )
}

export default App
