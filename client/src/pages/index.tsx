import { useEffect, useReducer } from 'react';
import PostForm from '../components/posts/PostForm';
import reducer from '../store/reducers/posts';
import { fetchPostAPI } from '../api/posts';
import { reloadPost } from '../store/actions/posts';
import PostList from '../components/posts/PostList';

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
      <PostList posts={posts} />
      <PostForm dispatch={dispatch} />
    </>
  );
};

export default Index;
