import update from 'immutability-helper';
import db from '../../db/db';

const initialState = {
    koordsPlayer: {
        x: 10,
        y: 12
    },
    viewPort: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    poleType: 'player',
    buttonText: 'Sound On',
    certifications: 0,
    skills: 0,
    db: db.map,
};

function gamesReducer(state = initialState, action)
{
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
        case 'ITEM_EDITED':
            return update(state, {
                db: {
                    [state.koordsPlayer.y + action.payload.y]: {
                        [state.koordsPlayer.x + action.payload.x]: {
                            $set: 'pole'
                        }
                    }

                },
            });
        case 'KEY_UP':
            let newViewPort_up = state.viewPort;
            if (state.koordsPlayer.y <= state.viewPort[2] && state.koordsPlayer.y >= 3)
                newViewPort_up = [state.viewPort.slice(0, 1) - 1].concat(state.viewPort.slice(0, state.viewPort.length - 1));

            return update(state, {
                $merge: {
                    viewPort: newViewPort_up,
                },
                koordsPlayer: {
                    y: {
                        $set: state.koordsPlayer.y - 1
                    }
                }
            });
        case 'KEY_DOWN':
            let newViewPort_down = state.viewPort;
            if (state.koordsPlayer.y >= state.viewPort[7] && state.koordsPlayer.y <= state.db.length - 4)
                newViewPort_down = [].concat(state.viewPort.slice(1, state.viewPort.length), +state.viewPort.slice(state.viewPort.length - 1) + 1);

            return update(state, {
                $merge: {
                    viewPort: newViewPort_down,
                },
                koordsPlayer: {
                    y: {
                        $set: state.koordsPlayer.y + 1
                    }
                }
            });
        case 'KEY_LEFT':
            return update(state, {
                    koordsPlayer: {
                        x: {
                            $set: state.koordsPlayer.x - 1
                    }
                },
            });
        case 'KEY_RIGHT':
            return update(state, {
                    koordsPlayer: {
                        x: {
                            $set: state.koordsPlayer.x + 1
                        }
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