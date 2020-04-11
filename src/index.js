
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App';

// Offline support still needs to be built
// import registerServiceWorker from './registerServiceWorker';

import './styles.css';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

import ThemeDefault from './theme-default';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

render(
    <BrowserRouter>
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// registerServiceWorker();
