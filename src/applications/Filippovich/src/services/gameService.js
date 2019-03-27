import itemTypes from '../consts/itemTypes';
import keyTypes from '../consts/keyTypes';


class GameService
{
    isWall(key, koordsX, koordsY, db)
    {
        switch (key) {
            case keyTypes.UP:
                return koordsY <= 0 || db[koordsY - 1][koordsX] === itemTypes.WALL;
            case keyTypes.DOWN:
                return koordsY >= db.length - 1 || db[koordsY + 1][koordsX] === itemTypes.WALL;
            case keyTypes.LEFT:
                return koordsX <= 0 || db[koordsY][koordsX - 1] === itemTypes.WALL;
            case keyTypes.RIGHT:
                return koordsX >= 19 || db[koordsY][koordsX + 1] === itemTypes.WALL;
            default:
                return false;
        }
    }

    isCertificate(key, koordsX, koordsY, db)
    {
        switch (key) {
            case keyTypes.UP:
                return db[koordsY - 1][koordsX] === itemTypes.CERTIFICATION;
            case keyTypes.DOWN:
                return db[koordsY + 1][koordsX] === itemTypes.CERTIFICATION;
            case keyTypes.LEFT:
                return db[koordsY][koordsX - 1] === itemTypes.CERTIFICATION;
            case keyTypes.RIGHT:
                return db[koordsY][koordsX + 1] === itemTypes.CERTIFICATION;
            default:
                return false;
        }
    }

    isSkill(key, koordsX, koordsY, db)
    {
        switch (key) {
            case keyTypes.UP:
                return db[koordsY - 1][koordsX] === itemTypes.SKILL;
            case keyTypes.DOWN:
                return db[koordsY + 1][koordsX] === itemTypes.SKILL;
            case keyTypes.LEFT:
                return db[koordsY][koordsX - 1] === itemTypes.SKILL;
            case keyTypes.RIGHT:
                return db[koordsY][koordsX + 1] === itemTypes.SKILL;
            default:
                return false;
        }
    }
}

export default new GameService();