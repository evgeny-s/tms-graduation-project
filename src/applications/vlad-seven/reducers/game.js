import update from 'immutability-helper';
import C from '../constans/Game'

const initialState = {
    map: [],
    moveX: 0,
    moveY: 0,
    count: 3,
    bomb: 3,
    silver: 0,
    level: 1,
    gold: 0
};

const game = (state = initialState, action) => {
    let {moveY, moveX, count, map} = state, _move;

    switch (action.type) {

        case C.LOAD_MAP:
            return update(state, {
                $merge: {
                    map: action.payload
                }
            });

        case C.MOVE_LEFT:
            _move = moveX - 1 < 0 ? map[0].length - 1 : moveX - 1;

            if (map[moveY][_move].match(/wall|locked/) === null) {
                let mapSlice = map.slice(),
                    prevPos = _move + 1 > map[0].length - 1 ? 0 : _move + 1;

                mapSlice[moveY][_move] += ' player';
                mapSlice[moveY][prevPos] = mapSlice[moveY][prevPos].replace(/player/, '').trim();

                return update(state, {
                    $merge: {
                        moveX: _move,
                        map: mapSlice
                    }
                })
            }

            return state;

        case C.MOVE_RIGHT:
            _move = moveX + 1 > map[0].length - 1 ? 0 : moveX + 1;

            if (map[moveY][_move].match(/wall|locked/) === null) {
                let mapSlice = map.slice(),
                    prevPos = _move - 1 < 0 ? map[0].length - 1 : _move - 1;

                mapSlice[moveY][_move] += ' player';
                mapSlice[moveY][prevPos] = mapSlice[moveY][prevPos].replace(/player/, '').trim();

                return update(state, {
                    $merge: {
                        moveX: _move,
                        map: mapSlice
                    }
                })
            }

            return state;

        case C.MOVE_DOWN:
            _move = moveY + 1 > map.length - 1 ? map.length - 1 : moveY + 1;

            if (map[_move][moveX].match(/wall|locked|player/) === null) {
                let mapSlice = map.slice(),
                    _count = count === 6 ? count : ++count;
                (moveY < 4) && (_count = 3);

                mapSlice[_move][moveX] += ' player';
                mapSlice[_move - 1][moveX] = mapSlice[_move - 1][moveX].replace(/player/, '').trim();

                return update(state, {
                    $merge: {
                        moveY: _move,
                        count: _count,
                        map: mapSlice
                    }
                });
            }

            return state;

        case C.MOVE_UP:
            _move = moveY - 1 < 0 ? 0 : moveY - 1;

            if (map[_move][moveX].match(/wall|locked|player/) === null) {
                let mapSlice = map.slice(),
                    _count = count === 3 ? count : --count;
                (moveY > map.length - 4) && (_count = 6);

                mapSlice[_move][moveX] += ' player';
                mapSlice[_move + 1][moveX] = mapSlice[_move + 1][moveX].replace(/player/, '').trim();

                return update(state, {
                    $merge: {
                        moveY: _move,
                        count: _count,
                        map: mapSlice
                    }
                });
            }

            return state;

        case C.GOLD_TO_PLAYER:

            if (map[moveY][moveX].includes('gold player')) {
                let mapSlice = map.slice();
                mapSlice[moveY][moveX] = 'player';

                return update(state, {
                    $merge: {
                        map: mapSlice,
                        gold: ++state.gold,
                        level: state.gold === Math.floor(map.length / 20) * 2
                            ? ++state.level
                            : state.level
                    }
                });
            }

            return state;

        case C.SILVER_TO_PLAYER:

            if (map[moveY][moveX].includes('silver player')) {
                let mapSlice = map.slice();
                mapSlice[moveY][moveX] = 'player';

                return update(state, {
                    $merge: {
                        map: mapSlice,
                        silver: ++state.silver,
                        level: state.silver === Math.floor(map.length / 20) * 5
                            ? ++state.level
                            : state.level
                    }
                });
            }

            return state;


        case C.BLAST:

            if (state.bomb && action.payload.includes('player')) {
                let mapSlice = map.slice();

                for (let i = moveY - 1; i <= moveY + 1; i++) {
                    if (i > map.length - 1 || i < 0) continue;
                    for (let j = moveX - 1; j <= moveX + 1; j++) {
                        if (j > map[0].length - 1 || j < 0) continue;
                        mapSlice[i][j].includes('wall') && mapSlice[i].splice(j, 1, '')
                    }
                }

                return update(state, {
                    $merge: {
                        map: mapSlice,
                        bomb: !state.bomb ? 0 : --state.bomb
                    }
                });
            }

            return state;

        case C.BOMB_TO_PLAYER:

            if (map[moveY][moveX].includes('grenade player')) {
                let mapSlice = map.slice();
                mapSlice[moveY][moveX] = 'player';

                return update(state, {
                    $merge: {
                        map: mapSlice,
                        bomb: ++state.bomb
                    }
                });
            }

            return state;

        case C.FINISH:

            if (map[Math.floor(map.length / 2 - 2)][Math.floor(map[0].length / 2 - 2)].includes('locked')) {
                let centerY = Math.floor(map.length / 2),
                    centerX = Math.floor(map[0].length / 2),
                    mapSlice = map.slice();

                for (let i = centerY - 2; i < centerY + 2; i++) {
                    for (let j = centerX - 2; j < centerX + 2; j++) {
                        mapSlice[i][j].includes('locked') && (mapSlice[i][j] = '');
                    }
                }
                return update(state, {
                    $merge: {
                        map: mapSlice
                    }
                });
            }

            if (map[moveY][moveX].includes('boss player')) {
                return update(state, {
                    $merge: {
                        ...initialState
                    }
                });
            }

            return state;

        default:
            return state;
    }
};

export default game;