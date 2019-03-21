import React from 'react';
import {connect} from 'react-redux';
import './itemLine.css'
import Item from '../item';



const mapStateToProps = state =>({
});

const mapDispatchToProps = dispatch => ({
    setActive: (y, x) => dispatch({
        type: 'SET_ACTIVE',
        payload: {
            y,
            x,
            poleType: "wall"
        },
    })

});

function ItemLine({itemsType, setActive, yKoord})
{
    return (
        <div className="itemLine">
            {
                itemsType.map((value, index) => (
                    <Item key={index} changeColor={setActive}
                          yKoord={yKoord} xKoord={index} type={value}/>
                ))
            }
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemLine);