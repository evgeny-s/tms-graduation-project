import React from 'react';
import {connect} from 'react-redux';
import './item.css'


const mapStateToProps = state =>({
    koords: state.games.koords,
    poleType: state.games.poleType,
});

const mapDispatchToProps = dispatch => ({
    // changeColor: (y, x) => dispatch({
    //     type: "CHANGE_ITEM_COLOR",
    //     payload: {
    //         y,
    //         x,
    //         poleType: "player"
    //     },
    // })

});

function Item ({type, changeColor, poleType, koords, yKoord, xKoord})
{
    let gamer;
    (koords.y === yKoord && koords.x === xKoord ) ? gamer = poleType : gamer = type;
    return (
            <div className={gamer} onClick={changeColor.bind(null, yKoord, xKoord)} />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);