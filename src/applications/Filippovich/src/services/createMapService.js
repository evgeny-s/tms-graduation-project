import itemTypes from '../consts/itemTypes';

class createMapService
{
    // generateMap(data){
    //     return fetch('http://localhost:3005/map', {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then((res) => res.json())
    //
    // }

    createMap(level)
    {
        let map = [];
        map = this._createGrid(level, map);

        map = this._createWalls(level, map);

        return map;
    }

    _getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    _createGrid(level, map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < 25; i++) {
                    map.push([]);
                    for (let j = 0; j < 20; j++) {
                        map[i].push(itemTypes.POLE);
                    }
                }
                return map;
            case 2:
                for (let i = 0; i < 35; i++) {
                    map.push([]);
                    for (let j = 0; j < 20; j++) {
                        map[i].push(itemTypes.POLE);
                    }
                }
                return map;
            case 3:
                for (let i = 0; i < 45; i++) {
                    map.push([]);
                    for (let j = 0; j < 20; j++) {
                        map[i].push(itemTypes.POLE);
                    }
                }
                return map;
            default:
                return [
                    [
                        "player",
                        "player",
                        "player",
                        "player",
                        "player"
                    ],
                    [
                        "player",
                        "player",
                        "player",
                        "player",
                        "player"
                    ]
                ];
        }
    }

    _createWalls(level, map)
    {
        let wallsCount, wallPerLineCount;

        switch (level) {
            case 1:
                wallsCount = this._getRandomInt(90, 110);
                wallPerLineCount = Math.floor(wallsCount / 25);
                console.log(wallPerLineCount);
                for (let i = 0; i < 25; i++) {
                    for (let j = 0; j < 20; j++) {
                        if (wallPerLineCount !== 0) {
                            if (this._getRandomInt(0, 1)) {
                                map[i][j] = itemTypes.WALL;
                                wallPerLineCount--;
                            }
                        }

                    }
                    wallPerLineCount =  Math.floor(wallsCount / 25);
                }
                return map;
            case 2:
                for (let i = 0; i < 35; i++) {
                    map.push([]);
                    for (let j = 0; j < 20; j++) {
                        map[i].push(itemTypes.POLE);
                    }
                }
                return map;
            case 3:
                for (let i = 0; i < 45; i++) {
                    map.push([]);
                    for (let j = 0; j < 20; j++) {
                        map[i].push(itemTypes.POLE);
                    }
                }
                return map;
            default:
                return [
                    [
                        "player",
                        "player",
                        "player",
                        "player",
                        "player"
                    ],
                    [
                        "player",
                        "player",
                        "player",
                        "player",
                        "player"
                    ]
                ];
        }
    }

}

export default new createMapService();