import React, {Component} from 'react';

import Header from './containers/Header';
import Content from './containers/Content';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;
