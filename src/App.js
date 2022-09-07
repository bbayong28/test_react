
import { useState } from 'react';
import './App.css';

const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/s1",
    submenu: [
      { content: "smenu011", link: "/1"},
      { content: "smenu012", link: "/2"},
      { content: "smenu013", link: "/3"},
    ],
  },
  {
    id: 2,
    content: "menu02",
    link: "/s1",
    submenu: [
      { content: "smenu021", link: "/1"},
      { content: "smenu022", link: "/2"},
      { content: "smenu023", link: "/3"},
    ],
  },
  {
    id: 3,
    content: "menu03",
    link: "/s1",
    submenu: [
      { content: "smenu031", link: "/1"},
      { content: "smenu032", link: "/2"},
      { content: "smenu033", link: "/3"},
    ],
  }
]

function App() {
  const [CB, setCB] = useState(""); // CB =class 붙이기
  const [TG, setTG] = useState(false); // TG =toggle class

  return ( 
    <header>
      <h1 className={CB} onClick={() => setCB('on')}>LOGO</h1>
      <h2 className={`ggg ${TG ? 'on' : ''}`}>toggle class</h2>
      <button onClick={() => setCB('on')}>class 붙이기</button>
      {/* <button onClick={() => { setTG(!TG) }}>class 토글</button> */}
      <button onClick={() => setTG(!TG)}>toggle class</button>
      <nav className='GNB'>
        <ul>
          {
            DB.map((it, idx) => <li key={idx}>
              <a href="{it.link}">{it.content}</a>
              <ul className='smenu'>
                {
                  it.submenu.map((smenu, idx) => <li key={idx}>
                    <a href='{smenu.link}'>{smenu.content}</a>                
                  </li>)
                }
              </ul>
            </li>)
          }
        </ul>
      </nav>
    </header>
    
    
  );
}

//const DB = [
  //{ name: 'shin' },
  //{ name: 'kim' },
  //{ name: 'lee' },
  //{ name: 'park' },
  //{ name: 'jung' },
  //{ name: 'han' },
  //{ name: 'gong' },
  //{ name: 'ha' },
  //{ name: 'choi' },
  //{ name: 'bae' },
  //{ name: 'you' },
// ]

    /*
      하나만 뿌려줄때
      <h1>
        {DB[0].name}
      </h1> 
      다뿌려주고 싶을 때
      <h1>
        {DB[0].name}
        {DB[1].name}
        {DB[2].name}
      </h1>  
      
      <ul>
        <li>{DB[0].name}</li>
        <li>{DB[1].name}</li>
        <li>{DB[2].name}</li>
      </ul> 
    */
   
      
/* 
  <li>
    <a href="">
      {it.submenu[0].content}
    </a>
  </li> 
  */
//순회하면서 무엇을 찾는다 -> find
//순회하면서 무엇을 만들어낸다 -> ???
//순회하면서 무엇을 ????? -> map 
//key 없으면 오류뜸 key를 그래서 idx넣어줌

//뭔가 변경시킬때는 state를 쓴다 const [] = useState() 리액트에서 변수를 선언하는 방법

export default App;
