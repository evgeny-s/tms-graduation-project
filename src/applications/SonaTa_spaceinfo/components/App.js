import React from 'react';
import LatLong from './LatLong.js';
import Timestamp from './Timestamp.js';
import Velocity from './Velocity.js';

class App extends React.Component {
    componentWillMount() {
        setInterval(() => {
            this.props.resolvedGetData()
        }, 1000)

    }

    render() {
        return (
            <div>
                <p>Current Data on the ISS:</p>
                <LatLong value={this.props.latitude}/>
                <LatLong value={this.props.longitude}/>
                {/*<Timestamp/>*/}
                {/*<Velocity/>*/}
            </div>
        )
    }

}

export default App;