

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards/Cards';
import FavoriteWrapper from './Components/Favorite/FavoriteWrapper';
import Header from './Components/Header/Header';

// добавляет в localStorage
const getLocalItems = () => {
  let list = localStorage.getItem('lists')
  if(list) {
    return JSON.parse(localStorage.getItem('lists')) 
  }else{
    return [];
  }
} 

function App() {

  const [like, setLike] = useState(getLocalItems());



  const handelClick = (c) => {
    const array = ([...like, c])
    setLike([...new Set(array)])
  }


  const deletLike = id => {
    const removeArr = [...like].filter(todo => todo.id !== id)
    setLike(removeArr);
}
useEffect(() => {
  localStorage.setItem('lists', JSON.stringify(like))
}, [like])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/cat/"  element={<Cards handelClick={handelClick}/>} />
        <Route path="/favorite" element={<FavoriteWrapper like={like} deletLike={deletLike}/>} />
      </Routes>
    </div>
  );
}

export default App;
