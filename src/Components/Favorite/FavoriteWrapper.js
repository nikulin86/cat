import React, { useEffect } from 'react'
import Favorite from './Favorite.js';
import '../Favorite/FavoriteWrapper.css'

function FavoriteWrapper({like, deletLike}) {


  return (
    <div className="favoriteWrapper-wrapper">
      {like && like.map((l) => (<Favorite like={like} id={l.id} url={l.url} deletLike={deletLike}/>))}
    </div>
  )
}

export default FavoriteWrapper