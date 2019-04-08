import itemTypes from "../consts/itemTypes";
import playerStats from '../consts/playerStats';


class LevelService
{
    checkLevelLogic(level, itemType)
    {
        switch (level) {
            case 1:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return false;
                    default:
                        return false;
                }
            case 2:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return false;
                    default:
                        return false;
                }
            case 3:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return true;
                    default:
                        return false;
                }
            case 4:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return true;
                    case itemTypes.ULTIMATE:
                        return true;
                    case itemTypes.BOSSWALLSMALL:
                        return true;
                    default:
                        return false;
                }
            case 5:
                switch (itemType) {
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return true;
                    case itemTypes.ULTIMATE:
                        return true;
                    case itemTypes.MEDECINE:
                        return true;
                    case itemTypes.BOSSWALLSMALL:
                        return true;
                    case itemTypes.BOSSWALLBIG:
                        return true;
                    case itemTypes.BOSS:
                        return true;
                    default:
                        return false;
                }
            default:
                return false;
        }
    }

    checkLevelUp(level, skillCount, certioficationCount, ultimateCount)
    { 
        if (level < playerStats.maxLevel) {
            return playerStats[level].SKILL_EXPERIENCE * skillCount
                + playerStats[level].CERTIFICATION_EXPERIENCE * certioficationCount
                + playerStats[level].ULTIMATE_EXPERIENCE * ultimateCount
                >= playerStats[level].PLAYER_EXPERIENCE;
        }
    }

    checkLevelDamage(level, itemType)
    {
        switch (level) {
            case 1:
                switch (itemType) {
                    case itemTypes.CERTIFICATION:
                        return playerStats[level].DAMAGE.CERTIFICATION;
                    case itemTypes.ULTIMATE:
                        return playerStats[level].DAMAGE.ULTIMATE;
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[level].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[level].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[level].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            case 2:
                switch (itemType) {
                    case itemTypes.ULTIMATE:
                        return playerStats[level].DAMAGE.ULTIMATE;
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[level].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[level].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[level].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            case 3:
                switch (itemType) {
                    case itemTypes.ULTIMATE:
                        return playerStats[level].DAMAGE.ULTIMATE;
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[level].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[level].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[level].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            case 4:
                switch (itemType) {
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[level].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[level].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[level].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            case 5:
                switch (itemType) {
                    case itemTypes.BOSSWALLSMALL:
                        return playerStats[level].DAMAGE.BOSSWALLSMALL;
                    case itemTypes.BOSSWALLBIG:
                        return playerStats[level].DAMAGE.BOSSWALLBIG;
                    case itemTypes.BOSS:
                        return playerStats[level].DAMAGE.BOSS;
                    default:
                        return 0;
                }
            default:
                return 0;
        }
    }

    checkBossLifes(lifesCount){
        return lifesCount === playerStats.bossLifes;
    }

    checkPlayerKilled(health)
    {
        return health <= 0;
    }
}

export default new LevelService();