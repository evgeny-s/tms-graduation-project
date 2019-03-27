import React, {memo} from 'react';
import {connect} from 'react-redux';
import './item.css'
import itemTypes from '../../consts/itemTypes'


// const mapStateToProps = state => ({
//     koordsPlayerX: state.games.koordsPlayerX,
//     koordsPlayerY: state.games.koordsPlayerY,
//
// });
//
// const mapDispatchToProps = dispatch => ({
//     // changeColor: (y, x) => dispatch({
//     //     type: "CHANGE_ITEM_COLOR",
//     //     payload: {
//     //         y,
//     //         x,
//     //         poleType: "pole"
//     //     },
//     // })
//
// });

function Item ({type})
{
    // return(
        // let {type, koordsPlayerX, koordsPlayerY, yKoord, xKoord} = this.props;
        // let gamer = type;
        // if (koordsPlayerY === yKoord && koordsPlayerX === xKoord) {
        //     gamer = itemTypes.PLAYER;
        // }
        console.log('render');
        return (
            <div className={type} /*onClick={changeColor.bind(null, yKoord, xKoord)}*/ />
        )
}
export default memo(Item);
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Item));