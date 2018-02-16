import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import '../src/index.pcss';
import Component from './Component';

ReactDOM.render(
  <BrowserRouter>
    <Route path="*" component={Component} />
  </BrowserRouter>,
  document.getElementById('root'),
);
