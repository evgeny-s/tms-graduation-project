import itemTypes from "../consts/itemTypes";
import playerStats from '../consts/playerStats';


class LevelService
{
    checkLevelLogic(level, itemType){
        switch (level){
            case 1:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return false;
                        // return [false, playerStats.DAMAGE.CERTIFICATION];

                }
                break;
            case 2:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return false;
                        // return [false, playerStats.DAMAGE.CERTIFICATION];
                }

                break;
            case 3:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:

                }
                break;
            case 4:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:

                }
                break;
            case 5:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:

                }
                break;
            default:
                return false;
        }
    }

    checkLevelUp(level, itemType, itemCount) {
        switch (level){
            case 1:
                switch (itemType){
                    case itemTypes.SKILL:
                    if ( itemCount * playerStats[level].SKILL_EXPERIENCE >= playerStats[level].PLAYER_EXPERIENCE) {
                        return true;
                    }
                    break;
                    case itemTypes.CERTIFICATION:
                        return false;
                    // return [false, playerStats.DAMAGE.CERTIFICATION];

                }
                break;
            case 2:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        return false;
                    // return [false, playerStats.DAMAGE.CERTIFICATION];
                }

                break;
            case 3:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        if (itemCount  >= playerStats[level].SKILL_COUNT){
                            return true;
                        }
                }
                break;
            case 4:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        if (itemCount  >= playerStats[level].SKILL_COUNT){
                            return [true];
                        }
                }
                break;
            case 5:
                switch (itemType){
                    case itemTypes.SKILL:
                        return true;
                    case itemTypes.CERTIFICATION:
                        if (itemCount  >= playerStats[level].SKILL_COUNT){
                            return [true];
                        }
                }
                break;
            default:
                return false;
        }
    }


}

export default new LevelService();