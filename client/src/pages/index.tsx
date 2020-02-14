import React from 'react';
import Head from 'next/head';
import { useEffect, useReducer } from 'react';
import PostForm from '../components/posts/PostForm';
import reducer from '../store/reducers/posts';
import { fetchPostAPI } from '../api/posts';
import { reloadPost } from '../store/actions/posts';
import PostList from '../components/posts/PostList';
import NewPostButton from '../components/posts/NewPostButton';

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
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <NewPostButton onClick={() => console.log('click!')} />
      <PostList posts={posts} />
      <PostForm dispatch={dispatch} />
    </>
  );
};

export default Index;
