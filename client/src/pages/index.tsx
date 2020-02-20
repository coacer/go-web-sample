import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import WithLayout from '../components/templates/WithLayout';
import PostForm from '../components/posts/PostForm';
import { PostsContext } from '../contexts';
import { fetchPostAPI } from '../api/posts';
import { reloadPost } from '../store/actions/posts';
import PostList from '../components/posts/PostList';
import IconBtn from '../components/atoms/IconBtn';
import TransitionsModal from '../components/atoms/TransitionsModal';

const Index = (): JSX.Element => {
  const { dispatch } = useContext(PostsContext);
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
      <PostList />
    </>
  );
};

const BtnWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
`;

const FormWrapper = styled.div`
  padding: 30px;
`;

export default WithLayout(Index);
