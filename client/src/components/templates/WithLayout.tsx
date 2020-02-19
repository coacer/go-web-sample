import React, { useReducer } from 'react';
import Head from 'next/head';
import AppContext from '../../contexts';
import reducer from '../../store/reducers/posts';
import Header from '../organisms/Header';
import styled from 'styled-components';

const WithLayout = (Page: React.FC): React.FC => {
  return function Layout() {
    const [posts, dispatch] = useReducer(reducer, []);
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <Header />
        <AppContext.Provider value={{ posts, dispatch }}>
          <Container>
            <Page />
          </Container>
        </AppContext.Provider>
      </>
    );
  };
};

const Container = styled.div`
  margin-top: 80px;
`;

export default WithLayout;
