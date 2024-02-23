// import react from 'react';
// import './App.css';
// import { useSelector } from 'react-redux';
// import {useDispatch} from "react-redux";
// import { Inc,Dec } from './states/reducers/index';

// function App() {

//   const curState = useSelector((state)=>state.number);

//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1>Counter is a {curState}</h1>
//       {/* <div className="card">
//         <button onClick={()=>dispatch(Inc())}>Inc</button>
//         &nbsp; &nbsp; &nbsp;
//         <button onClick={()=>dispatch(Dec())}>Dec</button>
//       </div> */}

//       {/* with payload i mean pass a value */}
//       <div className="card">
//         <button onClick={()=>dispatch(Inc(10))}>Inc</button>
//         &nbsp; &nbsp; &nbsp;
//         <button onClick={()=>dispatch(Dec(5))}>Dec</button>
//       </div>
//     </>
//   )
// }

// export default App








import React from 'react'
import UserInfo from './components/UserInfo'

function App() {
  return (
    <div>
      <UserInfo/>
    </div>
  )
}

export default App

