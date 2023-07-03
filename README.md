# react-hooks-study
Reactのフックについて、学習したメモ

![screencapture-localhost-5173-2023-06-30-15_08_03](https://github.com/take-86/react-hooks-study/assets/135306471/e20999fd-f38a-4a68-a78e-64bd6b389f13)


# npm create vite@latestをしたところ、アップデートしろとエラーが出た。

```.bash
Need to install the following packages:
  create-vite@4.3.2
Ok to proceed? (y) react-hooks
npm notice
npm notice New minor version of npm available! 9.5.1 -> 9.7.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.7.2
npm notice Run npm install -g npm@9.7.2 to updat
```
★解決策
`npm update -g npm` ：npmのバージョンが古かったので最新のものに更新

# create vite@latest で言語にReactがない。
★解決策
Javascriptを選択
* https://asameshicode.com/vite-react-setup/
```.bash
h.takeuchi@DESKTOP-PFBV98N MINGW64 ~/work/react-hooks-study
$ npm create vite@latest
√ Project name: ... hooks-study
√ Select a framework: » React
√ Select a variant: » JavaScript
```
# useState()
useState()の引数には初期値を設定できる。
```.jsx
const [count,setCount] = useState(0);
```
いいねボタンの数字の仕組みみたいなことができる。

# useEffect(() => {},[]);
callback関数。イベント発火のタイミングを決めることができる。
* 第２引数の中に設定する。
* 第２引数に何も設定しない場合は、画面リロード時に発火。
  * コンソールログで見てみたら。
    * 画面を更新してコンソールログを見てみると２回出力される。
      * ![image](https://github.com/take-86/react-hooks-study/assets/135306471/4c3f8588-7835-4ad2-8962-a9fa02bcb8d7)
      * 理由：main.jsxにあるストリクトモードが２回発火する仕組みのため
```main.jsx
<React.StrictMode>
  <App />
</ React.StrictMode>
```

# useContext()
親(App.jsx)から子(xxx.jsx)へデータを受け渡すときに、間の子階層を飛ばして直接受け渡すことができる。
* React Reduxの考え方に似ている。
  * Storeでデータを保持して、DispatchでStoreデータを更新して、Stateを更新している仕組み。StateはUIに表示される。

# useRef()
ref プロパティに設定したuseRefを入れることで、inputの情報を取得することができる
```.jsx
//★useRef プロパティ情報（文字列など）を取得できる
  const ref = useRef();
  const handleRef = () => {
    console.log(ref);
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  }
```

# useReducer()
Reduxの概念：
![image](https://github.com/take-86/react-hooks-study/assets/135306471/375e27d2-2fd3-4ead-be73-b517d59c1346)
* https://tech-blog.rakus.co.jp/entry/20221109/redux
* https://avinton.com/academy/redux-basics/#:~:text=Redux%E3%81%A8%E3%81%AF,%E3%81%99%E3%82%8B%E3%81%AE%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A1%E3%81%BE%E3%81%99%E3%80%82
