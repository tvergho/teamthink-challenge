import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import InitialAccountPane from './InitialAccountPane';
import BasePane from './BasePane';
import CreateAccountPane from './CreateAccountPane';

export const buttonStyles = makeStyles({
  label: {
    color: 'white',
    fontSize: '1rem',
  },
  root: {
    marginTop: 20,
  },
});

export {
  Header, InitialAccountPane, BasePane, CreateAccountPane,
};
