import React, { useEffect,useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

import axios from 'axios'

function App() {

  const [state, setstate] = useState([])

  useEffect(() => {
    axios.get('/films/nowplaying').then((res)=>{
      console.log(res.data)
      setstate(res.data)
  })
  }, [])

  return (
    <div>
      {state.name}
      {state.age}
      {state.address}
    </div>
  );
}

export default App;
