import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    axios.post('http://localhost:8080/posts', {
      title,
      body,
    })
      .then(res => {
        setPosts(posts => (
          [...posts, res.data]
        ));
      })
      .catch(e => {
        console.log(e.message);
      });
    e.target.title.value = '';
    e.target.body.value = '';
  }

  return (
      <>
        {posts.map(post => (
          <div key={post.id}>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))}
        <PostForm onSubmit={handleSubmit} />
      </>
  );
}

export default Index;
