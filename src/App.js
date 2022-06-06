import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Posts from './components/Posts';
import Post from './components/Post';


function App() {
  return (
    <div class="container">
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
