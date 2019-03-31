import React from 'react';
import TaskLevel from '../containers/Game/TaskLevel';
import Playground from '../containers/Game/PlayGround';
import PlayerStatistic from '../containers/Game/PlayerStatistic';
import Restart from '../containers/GameStatus';
import C from '../constans/Game';
import PropTypes from 'prop-types';
import GenerateMap from "../mapGenerator/mapGenerator";
import './Game/Game.scss'

class Game extends React.Component {
    constructor(){
        super();
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    componentWillMount() {
        const {rows, cells, difficulty, loadMap} = this.props,
            map = new GenerateMap(rows, cells, difficulty).render();

        loadMap(map);
        window.addEventListener('keyup', this.onKeyUp)
    }

    onKeyUp(e){
        if(this.props.map.length){
            (e.keyCode === C.LEFT) && this.props.moveLeft();
            (e.keyCode === C.RIGHT) && this.props.moveRight();
            (e.keyCode === C.UP) && this.props.moveUp();
            (e.keyCode === C.DOWN) && this.props.moveDown();

            (this.props.level === 1) && this.props.removeSilverFromMap();
            (this.props.level === 2) && this.props.removeGoldFromMap();
            (this.props.level === 3) && this.props.finishGame();

            this.props.bomb < 3 && this.props.removeBombFromMap();
        }
    };

    componentWillUnmount(){
        window.removeEventListener('keyup', this.onKeyUp)
    }

    render(){
        const {map} = this.props;

        return(
            <section className='Game'>
                {
                    map.length
                        ?
                        <React.Fragment>
                            <PlayerStatistic/>
                            <TaskLevel/>
                            <Playground/>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <h1>You Win!</h1>
                            <Restart label='Play Again'/>
                        </React.Fragment>
                }
            </section>
        )
    }
}

Game.propTypes = {
    map: PropTypes.array,
    bomb: PropTypes.number,
    level: PropTypes.number,
    difficulty: PropTypes.number,
    rows: PropTypes.number,
    cells: PropTypes.number,
    removeBombFromMap: PropTypes.func,
    finishGame: PropTypes.func,
    removeGoldFromMap: PropTypes.func,
    removeSilverFromMap: PropTypes.func,
    moveDown: PropTypes.func,
    moveUp: PropTypes.func,
    moveRight: PropTypes.func,
    moveLeft: PropTypes.func,
    loadMap: PropTypes.func,
};

export default Game;