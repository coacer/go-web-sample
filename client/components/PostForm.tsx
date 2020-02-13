import { useRef, FormEvent } from 'react';
import axios from 'axios';

const PostForm = (): JSX.Element => {
  const newTitleInput = useRef(null);
  const newBodyInput = useRef(null);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const title = newTitleInput.current.value;
    const body = newBodyInput.current.value;
    axios.post('http://localhost:8080/posts', {
      title,
      body,
    });
    newTitleInput.current.value = '';
    newBodyInput.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input ref={newTitleInput} id="title" type="text" /><br/>
      <label htmlFor="body">Body</label>
      <input ref={newBodyInput} id="body" type="text" /><br/>
      <input type="submit" value="投稿"/>
    </form>
  );
};

export default PostForm;
