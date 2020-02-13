import { useState, useEffect } from 'react';
import axios from 'axios';

const Index = (): JSX.Element => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = (): void => {
      axios.get('http://localhost:8080/posts')
        .then(res => {
          setPosts(res.data);
        })
        .catch(e => {
          console.log(e.message);
        });
    };
    getPosts();
  }, []);

  return (
      <>
        {posts.map(post => (
          <div key={post.id}>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))}
      </>
  );
}

export default Index;
