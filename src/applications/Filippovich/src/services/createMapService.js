import itemTypes from '../consts/itemTypes';

export default class CreateMapService
{
    constructor(_level)
    {
        this.map = [];
        this.level = _level;

        this.playerKoords = {
            x: 0,
            y: 0,
        };

        this.viewPort = [];
    }

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


    createMap()
    {

        this._createGrid();
        this._createWalls();

        this._createBoss();

        this._createSkills();
        this._createCertification();
        this._createUltimate();
        this._createMedecine();

        // this._createPlayer();
        this._createViewPort();

        return [this.map, this.playerKoords, this.viewPort];
    }

    _getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    _createXY(xStart = 0, xFinish = 0, yStart = 0, yFinish = 0)
    {
        let X = Math.floor(this._getRandomInt(xStart, this.map.length - 1 - xFinish));
        let Y = Math.floor(this._getRandomInt(yStart, 19 - yFinish));
        return {X, Y}
    }


    _createPlayer(start)
    {
        let counter = 1;
        while (counter) {
            let {X, Y} = this._createXY(start, this.map.length - 10 - start);
            if (this.map[X][Y].match(itemTypes.POLE)) {
                this.map[X][Y] = itemTypes.PLAYER;
                console.log(start);
                console.log(X);
                console.log(Y);
                this.playerKoords.x = Y;
                this.playerKoords.y = X;
                counter--;
            }
        }
    }

    _createViewPort()
    {
        let startViewPort = this._getRandomInt(0, this.map.length - 1 - 10);
        for (let i = 0; i < 10; i++) {
            this.viewPort.push(startViewPort + i);
        }
        this._createPlayer(startViewPort);
        console.log(startViewPort, '-startViewPort');
    }

    _createGrid()
    {
        switch (this.level) {
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
    }

    _createWalls()
    {
        switch (this.level) {
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
    }

    _createSkills()
    {
        let counter = 25;
        while (counter) {
            let {X, Y} = this._createXY();
            if (this.map[X][Y].match(itemTypes.POLE)) {
                this.map[X][Y] = itemTypes.SKILL;
                counter--;
            }
        }
    }

    _createCertification()
    {
        let counter = 5;
        while (counter) {
            let {X, Y} = this._createXY();
            if (this.map[X][Y].match(itemTypes.POLE)) {
                this.map[X][Y] = itemTypes.CERTIFICATION;
                counter--;
            }
        }
    }

    _createUltimate()
    {
        let counter = 3;
        while (counter) {
            let {X, Y} = this._createXY();
            if (this.map[X][Y].match(itemTypes.POLE)) {
                this.map[X][Y] = itemTypes.ULTIMATE;
                counter--;
            }
        }
    }

    _createMedecine()
    {
        let counter = 2;
        while (counter) {
            let {X, Y} = this._createXY();
            if (this.map[X][Y].match(itemTypes.POLE)) {
                this.map[X][Y] = itemTypes.MEDECINE;
                counter--;
            }
        }
    }


    _createBoss()
    {
        let {X, Y} = this._createXY(2, 4, 2, 3);
        this.map[X][Y] = itemTypes.BOSS;
        this.map[X + 1][Y] = itemTypes.BOSS;
        this.map[X][Y + 1] = itemTypes.BOSS;
        this.map[X + 1][Y + 1] = itemTypes.BOSS;

        for (let i = 0; i < 4; i++) {
            this.map[X - 1][Y - 1 + i] = itemTypes.BOSSWALLBIG;
            this.map[X + 2][Y - 1 + i] = itemTypes.BOSSWALLBIG;
            this.map[X - 1 + i][Y - 1] = itemTypes.BOSSWALLBIG;
            this.map[X - 1 + i][Y + 2] = itemTypes.BOSSWALLBIG;
        }

        for (let i = 0; i < 6; i++) {
            this.map[X - 2][Y - 2 + i] = itemTypes.BOSSWALLSMALL;
            this.map[X + 3][Y - 2 + i] = itemTypes.BOSSWALLSMALL;
            this.map[X - 2 + i][Y - 2] = itemTypes.BOSSWALLSMALL;
            this.map[X - 2 + i][Y + 3] = itemTypes.BOSSWALLSMALL;
        }
    }
}