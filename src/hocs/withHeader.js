import React from 'react';
import {Link} from "react-router-dom";

function withHeader(Component) {
  return class extends React.Component {
    render() {
      return (
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="btn btn-outline-info" to="/" >{'<'} Назад</Link>
          </nav>
          <Component {...this.props} />
        </React.Fragment>
      );
    }
  }
}

export default withHeader;