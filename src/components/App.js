import React from 'react';
import MainView from './MainView';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%'
  }
}));

const HOME = 'HOME'

const App = () => {
  const classes = useStyles();
  const [currentView, setCurrentView] = React.useState(HOME);
  const views = {
    HOME: <MainView />
  }
  return (
    <div className={classes.root}>{views[currentView]}</div>
  );
}

export default App;
