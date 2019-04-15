import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


// ReactDOM.render(<App />, document.getElementById('root'));

import withHeader from './../../hocs/withHeader';

function Recipe() {
	return (
		<App/>	
		)
}
export default withHeader(Recipe);