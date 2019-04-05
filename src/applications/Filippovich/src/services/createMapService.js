import itemTypes from '../consts/itemTypes';

class createthis.mapService
{
    // generatethis.map(data){
    //     return fetch('http://localhost:3005/this.map', {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then((res) => res.json())
    //
    // }
    map = [];
    
    createthis.map(level)
    {
        
        this.map = this._createGrid(level, this.map);
        this.map = this._createWalls(level, this.map);
        this.map = this._createSkills(level, this.map);
        this.map = this._createCertification(level, this.map);
        this.map = this._createUltimate(level, this.map);
        this.map = this._createMedecine(level, this.map);
        this.map = this._createBoss(this.map);

        this.mapCheck(this.map);

        return this.map;
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
                    this.map.push([]);
                    for (let j = 0; j < 20; j++) {
                        this.map[i].push(itemTypes.POLE);
                    }
                }
                break;
            case 2:
                for (let i = 0; i < 35; i++) {
                    this.map.push([]);
                    for (let j = 0; j < 20; j++) {
                        this.map[i].push(itemTypes.POLE);
                    }
                }
                break;
            case 3:
                for (let i = 0; i < 51; i++) {
                    this.map.push([]);
                    for (let j = 0; j < 20; j++) {
                        this.map[i].push(itemTypes.POLE);
                    }
                }
                break;
            default:
                break;
        }
        return this.map;
    }

    _createWalls(level, this.map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < this.map.length; i++) {
                    let indexOfWall = [];
                    let wallPerLineCount = Math.floor(this._getRandomInt(3, 5));
                    for (let k = 0; k < wallPerLineCount; k++) {
                        indexOfWall.push(this._getRandomInt(0, 19))
                    }
                    for (let j = 0; j < indexOfWall.length; j++) {
                        this.map[i][indexOfWall[j]] = itemTypes.WALL;
                    }
                }
                break;
            case 2:
                for (let i = 0; i < this.map.length; i++) {
                    let indexOfWall = [];
                    let wallPerLineCount = Math.floor(this._getRandomInt(4, 6));
                    for (let k = 0; k < wallPerLineCount; k++) {
                        indexOfWall.push(this._getRandomInt(0, 19))
                    }
                    for (let j = 0; j < indexOfWall.length; j++) {
                        this.map[i][indexOfWall[j]] = itemTypes.WALL;
                    }
                }
                break;
            case 3:
                for (let i = 0; i < this.map.length; i++) {
                    let indexOfWall = [];
                    let wallPerLineCount = Math.floor(this._getRandomInt(5, 7));
                    for (let k = 0; k < wallPerLineCount; k++) {
                        indexOfWall.push(this._getRandomInt(0, 19))
                    }
                    for (let j = 0; j < indexOfWall.length; j++) {
                        this.map[i][indexOfWall[j]] = itemTypes.WALL;
                    }
                }
                break;
            default:
                break;
        }
        return this.map;
    }

    _createSkills(level, this.map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < this.map.length; i++) {
                    let skillIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][skillIndex] = itemTypes.SKILL;
                }
                break;
            case 2:
                for (let i = 0; i < this.map.length; i++) {
                    if (!(i % 5)) continue;
                    let skillIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][skillIndex] = itemTypes.SKILL;
                }
                break;
            case 3:
                for (let i = 0; i < this.map.length; i += 2) {
                    let skillIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][skillIndex] = itemTypes.SKILL;
                }
                break;
            default:
                break;

        }
        return this.map;
    }

    _createCertification(level, this.map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 4 || i === 0) continue;
                    let certificationIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][certificationIndex] = itemTypes.CERTIFICATION;
                }
                break;
            case 2:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 7 || i === 0) continue;
                    let certificationIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][certificationIndex] = itemTypes.CERTIFICATION;
                }
                break;
            case 3:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 7 || i === 0) continue;
                    let certificationIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][certificationIndex] = itemTypes.CERTIFICATION;
                }
                break;
            default:
                break;

        }
        return this.map;
    }

    _createUltimate(level, this.map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 7 || i === 0) continue;
                    let ultimateIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][ultimateIndex] = itemTypes.ULTIMATE;
                }
                break;
            case 2:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 8 || i === 0) continue;
                    let ultimateIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][ultimateIndex] = itemTypes.ULTIMATE;
                }
                break;
            case 3:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 11 || i === 0) continue;
                    let ultimateIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][ultimateIndex] = itemTypes.ULTIMATE;
                }
                break;
            default:
                break;

        }
        return this.map;
    }

    _createMedecine(level, this.map)
    {
        switch (level) {
            case 1:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 8 || i === 0) continue;
                    let medecineIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][medecineIndex] = itemTypes.MEDECINE;
                }
                break;
            case 2:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 11 || i === 0) continue;
                    let medecineIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][medecineIndex] = itemTypes.MEDECINE;
                }
                break;
            case 3:
                for (let i = 0; i < this.map.length; i++) {
                    if (i % 17 || i === 0) continue;
                    let medecineIndex = Math.floor(this._getRandomInt(0, 19));
                    this.map[i][medecineIndex] = itemTypes.MEDECINE;
                }
                break;
            default:
                break;

        }
        return this.map;
    }

    _createBoss(this.map)
    {
        let bossIndexY = Math.floor(this._getRandomInt(2, 16));
        let bossIndexX = Math.floor(this._getRandomInt(2, this.map.length - 5));
        this.map[bossIndexX][bossIndexY] = itemTypes.BOSS;
        this.map[bossIndexX + 1][bossIndexY] = itemTypes.BOSS;
        this.map[bossIndexX][bossIndexY + 1] = itemTypes.BOSS;
        this.map[bossIndexX + 1][bossIndexY + 1] = itemTypes.BOSS;

        for (let i = 0; i < 4; i++) {
            this.map[bossIndexX - 1][bossIndexY - 1 + i] = itemTypes.BOSSWALLBIG;
            this.map[bossIndexX + 2][bossIndexY - 1 + i] = itemTypes.BOSSWALLBIG;
            this.map[bossIndexX - 1 + i][bossIndexY - 1] = itemTypes.BOSSWALLBIG;
            this.map[bossIndexX - 1 + i][bossIndexY + 2] = itemTypes.BOSSWALLBIG;
        }

        for (let i = 0; i < 6; i++) {
            this.map[bossIndexX - 2][bossIndexY - 2 + i] = itemTypes.BOSSWALLSMALL;
            this.map[bossIndexX + 3][bossIndexY - 2 + i] = itemTypes.BOSSWALLSMALL;
            this.map[bossIndexX - 2 + i][bossIndexY - 2] = itemTypes.BOSSWALLSMALL;
            this.map[bossIndexX - 2 + i][bossIndexY + 3] = itemTypes.BOSSWALLSMALL;
        }

        return this.map;
    }
}


export default new createthis.mapService();