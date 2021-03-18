import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';
//import thunk from 'redux-thunk';
import rootReducer from '../Reducer/rootReducer';
import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());
// const store = createStore(reducer, preloadedState, composeEnhancers(
//   applyMiddleware(...middleware)
// ));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )


}

export default MyApp
