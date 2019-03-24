import update from 'immutability-helper';
import db from '../../db/db';

const initialState = {
    koordsPlayer: {
        x: 10,
        y: 12
    },
    koordsPlayerOld:{
        x: 10,
        y: 12
    },
    viewPort: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
    poleType: 'player',
    poleTypeOld: 'pole',
    buttonText: 'Sound On',
    certifications: 0,
    skills: 0,
};

function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'CERTIFICATION_COLLECTED':
            return update(state, {
                $merge: {
                    certifications: state.certifications + action.payload,
                }
            });
        case 'SKILL_COLLECTED':
            return update(state, {
                $merge: {
                    skills: state.skills + action.payload,
                }
            });
        case "ITEM_EDITED":
            return update(state, {
                $set: {
                    type: action.payload,
                }
            });


        case 'CHANGE_ITEM_COLOR':
            return update(state, {
                $merge: {
                    koordsPlayer: {
                        x: action.payload.x,
                        y: action.payload.y,
                    },
                    poleType: action.payload.poleType
                }
            });


        case 'KEY_UP':
            let newKoords_up = {};
            newKoords_up.x = state.koordsPlayer.x + action.payload.x;
            newKoords_up.y = state.koordsPlayer.y + action.payload.y;

            let newViewPort_up = state.viewPort;
            if (state.koordsPlayer.y <= state.viewPort[2] && state.koordsPlayer.y >= 3)
                newViewPort_up = [state.viewPort.slice(0, 1) - 1].concat(  state.viewPort.slice(0, state.viewPort.length - 1) );

            return update(state, {
                $merge: {
                    koordsPlayerOld: {
                        x: state.koordsPlayer.x,
                        y: state.koordsPlayer.y
                    },
                    koordsPlayer: newKoords_up,
                    viewPort: newViewPort_up,
                },
            });
        case 'KEY_DOWN':
            let newKoords_down = {};
            newKoords_down.x = state.koordsPlayer.x + action.payload.x;
            newKoords_down.y = state.koordsPlayer.y + action.payload.y;

            let newViewPort_down = state.viewPort;
            if (state.koordsPlayer.y >= state.viewPort[7] && state.koordsPlayer.y <= db.map.length - 4)
                newViewPort_down = [].concat( state.viewPort.slice(1, state.viewPort.length), +state.viewPort.slice(state.viewPort.length - 1) + 1 );

            return update(state, {
                $merge: {
                    koordsPlayerOld: {
                        x: state.koordsPlayer.x,
                        y: state.koordsPlayer.y
                    },
                    koordsPlayer: newKoords_down,
                    viewPort: newViewPort_down,
                },
            });
        case 'KEY_LEFT':
            let newKoords_left = {};
            newKoords_left.x = state.koordsPlayer.x + action.payload.x;
            newKoords_left.y = state.koordsPlayer.y + action.payload.y;
            return update(state, {
                $merge: {
                    koordsPlayerOld: {
                        x: state.koordsPlayer.x,
                        y: state.koordsPlayer.y
                    },
                    koordsPlayer: newKoords_left
                },
            });
        case 'KEY_RIGHT':


            let newKoords_right = {};
            newKoords_right.x = state.koordsPlayer.x + action.payload.x;
            newKoords_right.y = state.koordsPlayer.y + action.payload.y;
            return update(state, {
                $merge: {
                    koordsPlayerOld: {
                        x: state.koordsPlayer.x,
                        y: state.koordsPlayer.y
                    },
                    koordsPlayer: newKoords_right
                },
            });
        case 'CLICK_SOUND_BUTTON':
            return update(state, {
                $merge: {
                    buttonText: action.payload,
                }
            });
        default:
            return state;
    }
}

export default gamesReducer;