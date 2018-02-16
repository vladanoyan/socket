import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../../reducer';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


class Root extends React.Component {

  render() {
    const { route } = this.props;

    return (
      <div>
        <Provider store={store}>
          {renderRoutes(route.routes)}
        </Provider>
      </div>
    );
  }
}

Root.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default Root;
