import {connect} from 'react-redux';
import GameSetting from '../components/GameSetting';
import C from '../constans/Game';

const mapStoreToProps = state => ({
    rows: state.gameSetting.rows,
    cells: state.gameSetting.cells,
    difficulty: state.gameSetting.difficulty,
});

const mapDispatchToProps = dispatch => ({
    mapSetting(e){
        dispatch({
            type: C.CHANGED_MAP,
            payload: {
                [e.target.name]: +e.target.value,
            }
        })
    }
});


export default connect(mapStoreToProps, mapDispatchToProps)(GameSetting);