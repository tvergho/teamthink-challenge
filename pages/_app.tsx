import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { initializeFirebase } from 'firebase_init';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import '../styles/globals.scss';

initializeFirebase();

const middlewares = [
  thunk,
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFA05F',
    },
  },
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'Helvetica',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
});

const store = createStore(reducers, applyMiddleware(...middlewares));

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
