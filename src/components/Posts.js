import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import axios from 'axios';

function Posts() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      dispatch({ type: 'SET_POSTS', payload: res.data});
    }).catch(err => console.error(err));
  }, [dispatch]);

  return (
    <div className="row row-cols-1 row-cols-md-4">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
          <Link className="btn btn-primary" to={`/posts/${post.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
