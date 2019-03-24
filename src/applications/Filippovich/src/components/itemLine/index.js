import React from 'react';
import {connect} from 'react-redux';
import './itemLine.css'
import Item from '../item';


const mapStateToProps = state =>({
});

const mapDispatchToProps = dispatch => ({

});

function ItemLine({itemsType, yKoord})
{
    return (
        <div className="itemLine">
            {
                itemsType.map((value, index) => (
                    <Item key={index}
                          yKoord={yKoord} xKoord={index} type={value}/>
                ))
            }
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemLine);