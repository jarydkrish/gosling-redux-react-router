import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Posts from './components/Posts';
import Post from './components/Post';


function App() {
  const [imageUrl, setImageUrl] = useState('');
  const getImageUrl = () => {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API}&limit=5&offset=5`).then((response) => {
      const bigResponse = response.data;
      const randomIndex = Math.floor(Math.random() * bigResponse.data.length);
      setImageUrl(bigResponse.data[randomIndex].images.original.url);
    }).catch((error) => console.error(error));
  };

  useEffect(() => {
    getImageUrl();
  }, [])
  return (
    <div className="container">
      <header>
        <img src={imageUrl} alt="Giphy" style={{ height: '100px', maxWidth: '100px' }} />
        <button className="btn btn-success" onClick={getImageUrl}>Get New Image</button>
      </header>
      <Router>
        <Routes>
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="/" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
