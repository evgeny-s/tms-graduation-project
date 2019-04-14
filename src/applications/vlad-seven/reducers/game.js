import update from 'immutability-helper';
import C from '../constans/Reducers';
import CELL from '../constans/MapCellTitle';

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

            if (map[moveY][_move].match(`${CELL.WALL}|${CELL.LOCKED}`) === null) {
                let mapSlice = map.slice(),
                    prevPos = _move + 1 > map[0].length - 1 ? 0 : _move + 1;

                mapSlice[moveY][_move] += ` ${CELL.PLAYER}`;
                mapSlice[moveY][prevPos] = mapSlice[moveY][prevPos].replace(`${CELL.PLAYER}`, '').trim();

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

            if (map[moveY][_move].match(`${CELL.WALL}|${CELL.LOCKED}`) === null) {
                let mapSlice = map.slice(),
                    prevPos = _move - 1 < 0 ? map[0].length - 1 : _move - 1;

                mapSlice[moveY][_move] += ` ${CELL.PLAYER}`;
                mapSlice[moveY][prevPos] = mapSlice[moveY][prevPos].replace(`${CELL.PLAYER}`, '').trim();

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

            if (map[_move][moveX].match(`${CELL.WALL}|${CELL.LOCKED}|${CELL.PLAYER}`) === null) {
                let mapSlice = map.slice(),
                    _count = count === C.MAX_COUNT ? count : ++count;
                (moveY < C.MIN_COUNT) && (_count = C.MIN_COUNT);

                mapSlice[_move][moveX] += ` ${CELL.PLAYER}`;
                mapSlice[_move - 1][moveX] = mapSlice[_move - 1][moveX].replace(`${CELL.PLAYER}`, '').trim();

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

            if (map[_move][moveX].match(`${CELL.WALL}|${CELL.LOCKED}|${CELL.PLAYER}`) === null) {
                let mapSlice = map.slice(),
                    _count = count === C.MIN_COUNT ? count : --count;
                (moveY > map.length - C.MIN_COUNT) && (_count = C.MAX_COUNT);

                mapSlice[_move][moveX] += ` ${CELL.PLAYER}`;
                mapSlice[_move + 1][moveX] = mapSlice[_move + 1][moveX].replace(`${CELL.PLAYER}`, '').trim();

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

            if (map[moveY][moveX].includes(`${CELL.GOLD} ${CELL.PLAYER}`)) {
                let mapSlice = map.slice();
                mapSlice[moveY][moveX] = CELL.PLAYER;

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

            if (map[moveY][moveX].includes(`${CELL.SILVER} ${CELL.PLAYER}`)) {
                let mapSlice = map.slice();
                mapSlice[moveY][moveX] = CELL.PLAYER;

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

            if (state.bomb && action.payload.includes(CELL.PLAYER)) {
                let mapSlice = map.slice();

                for (let i = moveY - 1; i <= moveY + 1; i++) {
                    if (i > map.length - 1 || i < 0) continue;
                    for (let j = moveX - 1; j <= moveX + 1; j++) {
                        if (j > map[0].length - 1 || j < 0) continue;
                        mapSlice[i][j].includes(CELL.WALL) && mapSlice[i].splice(j, 1, '')
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

            if (map[moveY][moveX].includes(`${CELL.GRENADA} ${CELL.PLAYER}`)) {
                let mapSlice = map.slice();
                mapSlice[moveY][moveX] = CELL.PLAYER;

                return update(state, {
                    $merge: {
                        map: mapSlice,
                        bomb: ++state.bomb
                    }
                });
            }

            return state;

        case C.FINISH:

            if (map[map.length / 2 - 2 ^ 0][map[0].length / 2 - 2 ^ 0].includes(CELL.LOCKED)) {
                let centerY = Math.floor(map.length / 2),
                    centerX = Math.floor(map[0].length / 2),
                    mapSlice = map.slice();

                for (let i = centerY - 2; i < centerY + 2; i++) {
                    for (let j = centerX - 2; j < centerX + 2; j++) {
                        mapSlice[i][j].includes(CELL.LOCKED) && (mapSlice[i][j] = '');
                    }
                }
                return update(state, {
                    $merge: {
                        map: mapSlice
                    }
                });
            }

            if (map[moveY][moveX].includes(`${CELL.BOSS} ${CELL.PLAYER}`)) {
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