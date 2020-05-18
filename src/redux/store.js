import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer/postReducer';
import thunk from 'redux-thunk';


 const storeConfig = createStore(
    rootReducer,
    (applyMiddleware(thunk))
  );

  export default storeConfig;