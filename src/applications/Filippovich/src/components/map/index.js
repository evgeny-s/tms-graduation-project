import React from 'react';
import {connect} from 'react-redux';
import layout from '../../../db/db.json';
import './map.css';
import ItemLine from '../itemLine';

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch => ({

});


function Map() {
    return (
        <div className="map">
            <ItemLine/>
            <ItemLine/>
            <ItemLine/>
            <ItemLine/>
            <ItemLine/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);