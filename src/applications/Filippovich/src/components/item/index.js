import React from 'react';
import {connect} from 'react-redux';
import layout from '../../../db/db.json';
import './item.css'


const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch => ({

});

function Item ({type})
{
    const className = `item ${type}`;
    return (
        <div className={className} >

        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);