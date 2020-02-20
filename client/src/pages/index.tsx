import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import WithLayout from '../components/templates/WithLayout';
import PostForm from '../components/posts/PostForm';
import { PostsContext, CurrentUserContext } from '../contexts';
import { fetchPostAPI } from '../api/posts';
import { reloadPost } from '../store/actions/posts';
import PostList from '../components/posts/PostList';
import IconBtn from '../components/atoms/IconBtn';
import TransitionsModal from '../components/atoms/TransitionsModal';

const Index = (): JSX.Element => {
  const router = useRouter();
  const { postsDispatch } = useContext(PostsContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (): void => {
    setOpenModal(true);
  };

  const handleClose = (): void => {
    setOpenModal(false);
  };

  useEffect(() => {
    // if (currentUser === null) {
    //   router.push('/users/signup');
    // }
    console.log(currentUser);
    (async (): Promise<void> => {
      try {
        const data = await fetchPostAPI();
        postsDispatch(reloadPost(data));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [currentUser, fetchPostAPI, postsDispatch, reloadPost]);

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
