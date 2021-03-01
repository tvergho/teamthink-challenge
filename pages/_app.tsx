import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import '../styles/globals.scss';

const middlewares = [
  thunk,
];

const store = createStore(reducers, applyMiddleware(...middlewares));

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
