import {connect} from 'react-redux';
import RadioLevels from '../components/gameSettings/radioLevels';

const mapStateToProps = state => ({
    inputDifficultyValue: state.settings.inputDifficultyValue,
});

const mapDispatchToProps = dispatch => ({
    difficultyValueChanged: (e) => dispatch({
        type: 'ON_DIFFICULTY_VALUE_CHANGED',
        payload: parseInt(e.target.id),
    }),

});


export default connect(mapStateToProps, mapDispatchToProps)(RadioLevels);