import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from '../../redux/actions/AppActions';
import { getUsersRequest } from '../../redux/actions/UserActions';
import { searchPostRequest } from '../../redux/actions/PostActions';

let DevTools;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = require('./components/DevTools').default;
}

function App(props) {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUsersRequest())
  }, [])

  function toggleAddPostSection() {
    dispatch(toggleAddPost());
  };

  function onSearch(title){
      dispatch(searchPostRequest(title))
  }

    return (
      <div>
        <div>
          <Helmet
            title="Zigvy - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            toggleAddPost={toggleAddPostSection}
            onSearch={onSearch}
          />
          <div className={styles.container}>
            {props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  // dispatch: PropTypes.func.isRequired,
};



export default App;
