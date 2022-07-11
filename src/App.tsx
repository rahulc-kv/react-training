import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { CUSTOM_THEME } from 'themes/muiTheme';
import store from '@store/store';

import '@styles/reset.css';
import '@styles/global.css';
import PrivateLayout from '@routes/PrivateLayout';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={CUSTOM_THEME}>
          <PrivateLayout />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
