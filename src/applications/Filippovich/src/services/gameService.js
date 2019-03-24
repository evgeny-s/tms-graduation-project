import db from '../../db/db';
import itemTypes from '../consts/itemTypes';
import keyTypes from '../consts/keyTypes';


class GameService
{
    isWall(key, koords)
    {
        switch (key) {
            case keyTypes.UP:
                return koords.y <= 0 || db.map[koords.y - 1][koords.x] === itemTypes.WALL;
            case keyTypes.DOWN:
                return koords.y >= db.map.length - 1 || db.map[koords.y + 1][koords.x] === itemTypes.WALL;
            case keyTypes.LEFT:
                return koords.x <= 0 || db.map[koords.y][koords.x - 1] === itemTypes.WALL;
            case keyTypes.RIGHT:
                return koords.x >= 19 || db.map[koords.y][koords.x + 1] === itemTypes.WALL;
            default:
                return false;
        }
    }

    isCertificate(key, koords)
    {
        switch (key) {
            case keyTypes.UP:
                return db.map[koords.y - 1][koords.x] === itemTypes.CERTIFICATION;
            case keyTypes.DOWN:
                return db.map[koords.y + 1][koords.x] === itemTypes.CERTIFICATION;
            case keyTypes.LEFT:
                return db.map[koords.y][koords.x - 1] === itemTypes.CERTIFICATION;
            case keyTypes.RIGHT:
                return db.map[koords.y][koords.x + 1] === itemTypes.CERTIFICATION;
            default:
                return false;
        }
    }

    isSkill(key, koords)
    {
        switch (key) {
            case keyTypes.UP:
                return db.map[koords.y - 1][koords.x] === itemTypes.SKILL;
            case keyTypes.DOWN:
                return db.map[koords.y + 1][koords.x] === itemTypes.SKILL;
            case keyTypes.LEFT:
                return db.map[koords.y][koords.x - 1] === itemTypes.SKILL;
            case keyTypes.RIGHT:
                return db.map[koords.y][koords.x + 1] === itemTypes.SKILL;
            default:
                return false;
        }
    }

    changeDB(key, koords)
    {
        switch (key) {
            case keyTypes.UP:
                db.map[koords.y - 1][koords.x] = itemTypes.POLE;
                break;
            case keyTypes.DOWN:
                db.map[koords.y + 1][koords.x] = itemTypes.POLE;
                break;
            case keyTypes.LEFT:
                db.map[koords.y][koords.x - 1] = itemTypes.POLE;
                break;
            case keyTypes.RIGHT:
                db.map[koords.y][koords.x + 1] = itemTypes.POLE;
                break;
            default:
                break;
        }

    }


}

export default new GameService();