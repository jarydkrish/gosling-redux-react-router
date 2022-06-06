import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";

function Post() {
  const posts = useSelector(state => state.posts);
  const params = useParams();

  const postId = parseInt(params.postId, 10);
  const post = posts.find(post => post.id === postId);

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Post;
