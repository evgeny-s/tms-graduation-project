export default class {
    constructor(y, x, difficulty) {
        this.map = [];
        this.y = y;
        this.x = x;
        this.difficulty = difficulty;
    }

    createGrid() {
        for (let i = 0; i < this.y; i++) {
            this.map.push([]);
            for (let j = 0; j < this.x; j++) {
                let wall = Math.floor(Math.random() * 100);
                (wall < this.difficulty)
                    ? this.map[i].push('wall')
                    : this.map[i].push('')
            }
        }
    }

    createGold() {
        let map = this.map,
            minY = Math.floor(this.y / 2),
            gold = Math.floor(this.y / 20);

        for (let j = 1; j < 3; j++) {
            for (let i = 0; i < gold; i++) {
                let y = Math.floor(Math.random() * ((minY * j) - (minY * (j - 1))) + (minY * (j - 1))),
                    x = Math.floor(Math.random() * this.x);

                (map[y][x].match(/gold|boss|locked/) !== null)
                    ? i--
                    : this.map[y][x] = 'gold';
            }
        }
    }

    createHome() {
        let minY = Math.floor(this.y / 2 - 2),
            maxY = Math.floor(this.y / 2 + 2),
            minX = Math.floor(this.x / 2 - 2),
            maxX = Math.floor(this.x / 2 + 2);

        for (let i = minY; i < maxY; i++) {
            for (let j = minX; j < maxX; j++) {
                this.map[i][j] = ((i === minY + 1 || i === minY + 2) && (j === minX + 1 || j === minX + 2))
                    ? 'boss'
                    : 'locked';
            }
        }
    }

    createSilver() {
        let map = this.map,
            minY = Math.floor(this.y / 5),
            silver = Math.floor(this.y / 20);

        for (let j = 1; j < 6; j++) {
            for (let i = 0; i < silver; i++) {
                let min = minY * (j - 1) < 1
                    ? 1
                    : minY * (j - 1),
                    y = Math.floor(Math.random() * ((minY * j) - min) + min),
                    x = Math.floor(Math.random() * this.x);

                (map[y][x].match(/gold|silver|boss|locked/) !== null)
                    ? i--
                    : map[y][x] = 'silver';
            }
        }
    }

    createGrenade() {
        let map = this.map,
            minY = Math.floor(this.y / 5);

        for (let j = 1; j < 6; j++) {
            let min = minY * (j - 1) < 1
                ? 1
                : minY * (j - 1),
                y = Math.floor(Math.random() * ((minY * j) - min) + min),
                x = Math.floor(Math.random() * this.x);

            (map[y][x].match(/gold|silver|boss|locked|grenade/) !== null)
                ? j--
                : map[y][x] = 'grenade'
        }
    }

    render() {
        this.createGrid();
        this.createHome();
        this.createGold();
        this.createSilver();
        this.createGrenade();
        this.map[0][0] = 'player';

        return this.map;
    }
}