import React, { useState, useEffect, useReducer } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AppContext from '../contexts';
import PostForm from '../components/posts/PostForm';
import reducer from '../store/reducers/posts';
import { fetchPostAPI } from '../api/posts';
import { reloadPost } from '../store/actions/posts';
import PostList from '../components/posts/PostList';
import IconBtn from '../components/atoms/IconBtn';
import TransitionsModal from '../components/atoms/TransitionsModal';

const Index = (): JSX.Element => {
  const [posts, dispatch] = useReducer(reducer, []);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (): void => {
    setOpenModal(true);
  };

  const handleClose = (): void => {
    setOpenModal(false);
  };

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const data = await fetchPostAPI();
        dispatch(reloadPost(data));
      } catch (e) {
        console.log(e);
      }
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
      <AppContext.Provider value={{ posts, dispatch }}>
        <TransitionsModal
          open={openModal}
          handleOpen={handleOpen}
          handleClose={handleClose}
          btn={
            <BtnWrapper>
              <IconBtn size={50} icon="add_circle" />
            </BtnWrapper>
          }
          showWindow={
            <FormWrapper>
              <h2>New Post</h2>
              <PostForm handleClose={handleClose} />
            </FormWrapper>
          }
        />
        <PostList posts={posts} />
      </AppContext.Provider>
    </>
  );
};

const BtnWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
`;

const FormWrapper = styled.div`
  padding: 30px;
`;

export default Index;
