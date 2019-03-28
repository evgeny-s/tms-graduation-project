import itemTypes from '../consts/itemTypes';
import keyTypes from '../consts/keyTypes';


class GameService
{
    isWall(key, koords, db)
    {
        switch (key) {
            case keyTypes.UP:
                return koords.y <= 0 || db[koords.y - 1][koords.x] === itemTypes.WALL;
            case keyTypes.DOWN:
                return koords.y >= db.length - 1 || db[koords.y + 1][koords.x] === itemTypes.WALL;
            case keyTypes.LEFT:
                return koords.x <= 0 || db[koords.y][koords.x - 1] === itemTypes.WALL;
            case keyTypes.RIGHT:
                return koords.x >= 19 || db[koords.y][koords.x + 1] === itemTypes.WALL;
            default:
                return false;
        }
    }

    isBossWall(key, koords, db)
    {
        switch (key) {
            case keyTypes.UP:
                return db[koords.y - 1][koords.x] === itemTypes.BOSSWALL;
            case keyTypes.DOWN:
                return db[koords.y + 1][koords.x] === itemTypes.BOSSWALL;
            case keyTypes.LEFT:
                return db[koords.y][koords.x - 1] === itemTypes.BOSSWALL;
            case keyTypes.RIGHT:
                return db[koords.y][koords.x + 1] === itemTypes.BOSSWALL;
            default:
                return false;
        }
    }

    isBoss(key, koords, db)
    {
        switch (key) {
            case keyTypes.UP:
                return db[koords.y - 1][koords.x] === itemTypes.BOSS;
            case keyTypes.DOWN:
                return db[koords.y + 1][koords.x] === itemTypes.BOSS;
            case keyTypes.LEFT:
                return db[koords.y][koords.x - 1] === itemTypes.BOSS;
            case keyTypes.RIGHT:
                return db[koords.y][koords.x + 1] === itemTypes.BOSS;
            default:
                return false;
        }
    }

    isPole(key, koords, db)
    {
        switch (key) {
            case keyTypes.UP:
                return db[koords.y - 1][koords.x] === itemTypes.POLE;
            case keyTypes.DOWN:
                return db[koords.y + 1][koords.x] === itemTypes.POLE;
            case keyTypes.LEFT:
                return db[koords.y][koords.x - 1] === itemTypes.POLE;
            case keyTypes.RIGHT:
                return db[koords.y][koords.x + 1] === itemTypes.POLE;
            default:
                return false;
        }
    }

    isSkill(key, koords, db)
    {
        switch (key) {
            case keyTypes.UP:
                return db[koords.y - 1][koords.x] === itemTypes.SKILL;
            case keyTypes.DOWN:
                return db[koords.y + 1][koords.x] === itemTypes.SKILL;
            case keyTypes.LEFT:
                return db[koords.y][koords.x - 1] === itemTypes.SKILL;
            case keyTypes.RIGHT:
                return db[koords.y][koords.x + 1] === itemTypes.SKILL;
            default:
                return false;
        }
    }

    isCertificate(key, koords, db)
    {
        switch (key) {
            case keyTypes.UP:
                return db[koords.y - 1][koords.x] === itemTypes.CERTIFICATION;
            case keyTypes.DOWN:
                return db[koords.y + 1][koords.x] === itemTypes.CERTIFICATION;
            case keyTypes.LEFT:
                return db[koords.y][koords.x - 1] === itemTypes.CERTIFICATION;
            case keyTypes.RIGHT:
                return db[koords.y][koords.x + 1] === itemTypes.CERTIFICATION;
            default:
                return false;
        }
    }
}

export default new GameService();