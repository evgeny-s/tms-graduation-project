import React from 'react';

import withHeader from './../../hocs/withHeader';
import App from './App';


function Game() {
  return (
    <App/>
  );
}

export default withHeader(Game);