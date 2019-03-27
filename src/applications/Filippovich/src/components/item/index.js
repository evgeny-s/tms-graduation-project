import React, {memo} from 'react';
import {connect} from 'react-redux';
import './item.css'
import itemTypes from '../../consts/itemTypes'


const mapStateToProps = state => ({
    koordsPlayerX: state.games.koordsPlayer.x,
    koordsPlayerY: state.games.koordsPlayer.y,

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

class Item extends React.PureComponent
{
    render()
    {
        let {type, koordsPlayerX, koordsPlayerY, yKoord, xKoord} = this.props;
        let gamer = type;
        if (koordsPlayerY === yKoord && koordsPlayerX === xKoord) {
            gamer = itemTypes.PLAYER;
        }
        console.log('render');
        return (
            <div className={gamer} /*onClick={changeColor.bind(null, yKoord, xKoord)}*/ />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Item));