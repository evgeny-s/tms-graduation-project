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
        map = this._createSkills(level, map);
        map = this._createCertification(level, map);
        map = this._createUltimate(level, map);
        map = this._createMedecine(level, map);
        map = this._createBoss(level, map);


        return map;
    }

    _getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
                break;
            case 2:
                for (let i = 0; i < 35; i++) {
                    map.push([]);
                    for (let j = 0; j < 20; j++) {
                        map[i].push(itemTypes.POLE);
                    }
                }
                break;
            case 3:
                for (let i = 0; i < 51; i++) {
                    map.push([]);
                    for (let j = 0; j < 20; j++) {
                        map[i].push(itemTypes.POLE);
                    }
                }
                break;
            default:
                break;
        }
        return map;
    }

    _createWalls(level, map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < 25; i++) {
                    let indexOfWall = [];
                    let wallPerLineCount = Math.floor(this._getRandomInt(3, 5));
                    for (let k = 0; k < wallPerLineCount; k++) {
                        indexOfWall.push(this._getRandomInt(0, 19))
                    }
                    for (let j = 0; j < indexOfWall.length; j++) {
                        map[i][indexOfWall[j]] = itemTypes.WALL;
                    }
                }
                break;
            case 2:
                for (let i = 0; i < 35; i++) {
                    let indexOfWall = [];
                    let wallPerLineCount = Math.floor(this._getRandomInt(4, 6));
                    for (let k = 0; k < wallPerLineCount; k++) {
                        indexOfWall.push(this._getRandomInt(0, 19))
                    }
                    for (let j = 0; j < indexOfWall.length; j++) {
                        map[i][indexOfWall[j]] = itemTypes.WALL;
                    }
                }
                break;
            case 3:
                for (let i = 0; i < 51; i++) {
                    let indexOfWall = [];
                    let wallPerLineCount = Math.floor(this._getRandomInt(5, 7));
                    for (let k = 0; k < wallPerLineCount; k++) {
                        indexOfWall.push(this._getRandomInt(0, 19))
                    }
                    for (let j = 0; j < indexOfWall.length; j++) {
                        map[i][indexOfWall[j]] = itemTypes.WALL;
                    }
                }
                break;
            default:
                break;
        }
        return map;
    }

    _createSkills(level, map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < 25; i++) {
                    let skillIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][skillIndex] = itemTypes.SKILL;
                }
                break;
            case 2:
                for (let i = 0; i < 35; i++) {
                    if (!(i%5)) continue;
                    let skillIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][skillIndex] = itemTypes.SKILL;
                }
                break;
            case 3:
                for (let i = 0; i < 51; i+=2) {
                    let skillIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][skillIndex] = itemTypes.SKILL;
                }
                break;
            default:
                break;

        }
        return map;
    }

    _createCertification(level, map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < 25; i++) {
                    if ( i%4 || i === 0 ) continue;
                    let certificationIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][certificationIndex] = itemTypes.CERTIFICATION;
                }
                break;
            case 2:
                for (let i = 0; i < 35; i++) {
                    if (i%7 || i === 0) continue;
                    let certificationIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][certificationIndex] = itemTypes.CERTIFICATION;
                }
                break;
            case 3:
                for (let i = 0; i < 51; i++) {
                    if ( i%7 || i === 0 ) continue;
                    let certificationIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][certificationIndex] = itemTypes.CERTIFICATION;
                }
                break;
            default:
                break;

        }
        return map;
    }

    _createUltimate(level, map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < 25; i++) {
                    if ( i%7 || i === 0 ) continue;
                    let ultimateIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][ultimateIndex] = itemTypes.ULTIMATE;
                }
                break;
            case 2:
                for (let i = 0; i < 35; i++) {
                    if ( i%8 || i === 0 ) continue;
                    let ultimateIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][ultimateIndex] = itemTypes.ULTIMATE;
                }
                break;
            case 3:
                for (let i = 0; i < 51; i++) {
                    if ( i%11 || i === 0 ) continue;
                    let ultimateIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][ultimateIndex] = itemTypes.ULTIMATE;
                }
                break;
            default:
                break;

        }
        return map;
    }

    _createMedecine(level, map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < 25; i++) {
                    if ( i%8 || i === 0 ) continue;
                    let medecineIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][medecineIndex] = itemTypes.MEDECINE;
                }
                break;
            case 2:
                for (let i = 0; i < 35; i++) {
                    if ( i%11 || i === 0 ) continue;
                    let medecineIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][medecineIndex] = itemTypes.MEDECINE;
                }
                break;
            case 3:
                for (let i = 0; i < 51; i++) {
                    if ( i%17 || i === 0 ) continue;
                    let medecineIndex = Math.floor(this._getRandomInt(0, 19));
                    map[i][medecineIndex] = itemTypes.MEDECINE;
                }
                break;
            default:
                break;

        }
        return map;
    }

    _createBoss(level,map)
    {
        switch (level) {
            case 1:
                let bossIndex = Math.floor(this._getRandomInt(0, 24));
                map[bossIndex][5] = itemTypes.BOSS;
                break;
            case 2:

                break;
            case 3:

                break;
            default:
                break;

        }
        return map;
    }
}


export default new createMapService();