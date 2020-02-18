import React, { useReducer } from 'react';
import Head from 'next/head';
import AppContext from '../../contexts';
import reducer from '../../store/reducers/posts';

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
        <AppContext.Provider value={{ posts, dispatch }}>
          <Page />
        </AppContext.Provider>
      </>
    );
  };
};

export default WithLayout;
