import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useEffect, useReducer } from 'react';
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
      <TransitionsModal
        open={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
        btn={
          <BtnWrapper>
            <IconBtn size={50} icon="add_circle" />
          </BtnWrapper>
        }
        show={
          <FormWrapper>
            <h2>New Post</h2>
            <PostForm dispatch={dispatch} />
          </FormWrapper>
        }
      />
      <PostList posts={posts} />
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
