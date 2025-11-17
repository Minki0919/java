// import './App.css';
// import { useState } from 'react';
// import CompornentPage from './1028/component';

// function Card({name,intro,hobby}){
//   const [likes,setlikes] = useState(0);

// return(
//   <div className='card=container'>
//     <h2>{name}</h2>
//     <h2>{intro}</h2>
//     <h2>{hobby}</h2>
    
//     <button onClick={()=>(setlikes(likes+1))}>
//       좋아요{likes}
//     </button>
//   </div>

// );
// }

//     const tabs=[
//             {id: 1, tab:"A"},
//             {id: 2, tab:"B"},
//             {id: 3, tab:"C"},
//             {id: 4, tab:"D"},
//             {id: 5, tab:"E"}
//     ]

// function App() {
//   return (
//     <div className="App"> 
//     <CompornentPage tabs={tabs}/>
//     </div>  );
// }

// export default App;

//예제 1.
// import Top from "./1028/top";
// import Middle from "./1028/middle";
// import Bottom from "./1028/bottom";

// function App() {
//   return(
//     <div className="App">
//       <Top/>
//       <Middle/>
//       <Bottom/>
//     </div>
//   );
// }
// export default App;

//실습 1-2.
// import Card from "./1028/Card";

// function App(){
//   return(
//     <div ClassName="App">
//       <Card/>
//       <Card/>
//       <Card/>
//     </div>
//   );
// }
// export default App;

//예제 2.
// import Greeting from "./1028/Greeting";

// function App(){
//   return (
//     <div className="App">
//       {}
//       {}
//       {}
//       <Greeting name="민지"/>
//       <Greeting name="연희"/>
//       <Greeting name="민기"/>
//     </div>
//   );
// }

// export default App;

//실습 2-1.
// import ProfileCard from "./1028/ProfileCard";

// function App(){
//     return (
//               <div className="App">
//             <ProfileCard 
//                 name="권민기" 
//                 age="23" 
//                 major="항공소프트웨어공학과" 
//             />
//         </div>
//     );
// }
// export default App;

//실습 2-2.
// import Greeting from "./1028/Greeting";

// function App(){
//   return (
//     <div className="App">
//       {}
//       {}
//       {}
//       <Greeting name="인곡관"/>
//       <Greeting name="도서관"/>
//       <Greeting name="이학관"/>
//     </div>
//   );
// }

//예제 3.
// import Increase from "./1028/increase";

// function App(){
//     return (
//            <div className="App">
//         <Increase/>
//     </div>
//     );
// }
// export default App;

//실습3-1
// import Increase1 from "./1028/increase1";

// function App(){
//     return (
//            <div className="App">
//         <Increase1/>
//     </div>
//     );
// }
// export default App;

//실습 3-2
// import React, { useState } from "react";

// function App() {
//   const [showMajor, setShowMajor] = useState(false);

//   const name = "권민기";
//   const major = "항공소프트웨어공학과";

//   const handleClick = () => {
//     setShowMajor(true);
//   };

//   return (
//     <div className="App">
//       <h1>{name}</h1>

//       {showMajor && <h2>{major}</h2>}

//       <button onClick={handleClick}>변환</button>
//     </div>
//   );
// }

// export default App;

//실습3-3
// import React, { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       alert(`입력한 값: ${text}`);
//     }
//   };

//   return (
//     <div className="App">
//       <h2>엔터키 입력 시 alert 예제</h2>

//       <input
//         type="text"
//         placeholder="입력 후 엔터를 눌러보세요"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//     </div>
//   );
// }

// export default App;
