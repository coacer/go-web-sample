import { useEffect, useReducer } from 'react';
import PostForm from '../components/PostForm';
import reducer from '../store/reducers/posts';
import { fetchPostAPI } from '../api/posts';
import { reloadPost } from '../store/actions/posts';

const Index = (): JSX.Element => {
  const [posts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await fetchPostAPI();
      dispatch(reloadPost(data));
    })();
  }, [fetchPostAPI, dispatch, reloadPost]);

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
      <PostForm dispatch={dispatch} />
    </>
  );
};

export default Index;
