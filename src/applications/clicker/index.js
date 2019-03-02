import React from 'react';

import withHeader from './../../hocs/withHeader';

function Clicker() {
  return (
    <div>Example of clicker app</div>
  );
}

export default withHeader(Clicker);