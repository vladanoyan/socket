import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'react-input-range/lib/css/index.css';
import 'react-dates/lib/css/_datepicker.css';
import './index.pcss';
import '../src/resource/images/favicon.ico';
import './bootstrap.scss';
import Root from './routes/root';
import rootRoutes from './routes/root/routes';

const routes = [
  {
    component: Root,
    routes: rootRoutes,
  },
];

ReactDOM.render(
  <BrowserRouter basename="/">
    <MuiThemeProvider>
      { renderRoutes(routes) }
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
