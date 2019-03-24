import React from 'react';
import {connect} from 'react-redux';
import './item.css'


const mapStateToProps = state =>({
    koordsPlayerOld: state.games.koordsPlayerOld,
    koordsPlayer: state.games.koordsPlayer,
    poleType: state.games.poleType,
    poleTypeOld: state.games.poleTypeOld,
});

const mapDispatchToProps = dispatch => ({
    // changeColor: (y, x) => dispatch({
    //     type: "CHANGE_ITEM_COLOR",
    //     payload: {
    //         y,
    //         x,
    //         poleType: "pole"
    //     },
    // })

});

function Item ({type, changeColor, poleType, poleTypeOld, koordsPlayer, koordsPlayerOld, yKoord, xKoord})
{
    let gamer = type;
    // (koordsPlayer.y === yKoord && koordsPlayer.x === xKoord ) ? gamer = poleType : gamer = type;
    // if ( koordsPlayerOld.y === yKoord && koordsPlayerOld.x === xKoord ){
    //     gamer = type;
        // console.log(type);
    // }
    if (koordsPlayer.y === yKoord && koordsPlayer.x === xKoord) {
        gamer = poleType;
        // console.log(type);
    }
    return (
            <div className={gamer} /*onClick={changeColor.bind(null, yKoord, xKoord)}*/ />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);