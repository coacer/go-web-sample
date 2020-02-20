import React, { useReducer } from 'react';
import Head from 'next/head';
import { PostsContext, CurrentUserContext } from '../../contexts';
import postsReducer from '../../store/reducers/posts';
import currentUserReducer from '../../store/reducers/current_user';
import Header from '../organisms/Header';
import styled from 'styled-components';

const WithLayout = (Page: React.FC): React.FC => {
  return function Layout() {
    const [posts, postsDispatch] = useReducer(postsReducer, []);
    const [currentUser, currentUserDispatch] = useReducer(
      currentUserReducer,
      null
    );
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <Header />
        <CurrentUserContext.Provider
          value={{ currentUser, currentUserDispatch }}
        >
          <PostsContext.Provider value={{ posts, postsDispatch }}>
            <Container>
              <Page />
            </Container>
          </PostsContext.Provider>
        </CurrentUserContext.Provider>
      </>
    );
  };
};

const Container = styled.div`
  margin-top: 80px;
`;

export default WithLayout;
