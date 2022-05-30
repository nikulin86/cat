import React from 'react';
import './Cards.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Cards({ handelClick }) {

  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetch, setFetch] = useState(true);


// динамическая паганинация
    useEffect(() => {
      if (fetch) {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=30&page=${currentPage}?api_key=3ea9f8a5-e80f-4e82-931f-9013ed232c05`)
        .then(response => {
          setCats([...cats, ...response.data])
          setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => setFetch(false))
      }
    }, [fetch]);

  const handelScroll = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 ) {
      console.log('scroll')
      setFetch(true)
    }
  }


  useEffect(() => {
    document.addEventListener('scroll', handelScroll)
    return function () {
      document.removeEventListener('scroll', handelScroll)
    }
  }, []);



  return (
    <div className="cards-wrapper">
      {cats && cats.map((c) => (<Card key={c.id} c={c} id={c.id} url={c.url} handelClick={handelClick} />))}
    </div>
  )
}

export default Cards