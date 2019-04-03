import itemTypes from "../consts/itemTypes";
import playerStats from '../consts/playerStats';


class LevelService
{
    checkLevelLogic(level, itemType, item){
        switch (level){
            case 1:
                switch (itemType){
                    case itemTypes.SKILL:
                        return [true];
                    case itemTypes.CERTIFICATION:
                        return [false, playerStats.DAMAGE.CERTIFICATION];

                }
                break;
            case 2:
                switch (itemType){
                    case itemTypes.SKILL:
                        return 1;
                    case itemTypes.CERTIFICATION:
                        return false;
                }

                break;
            case 3:
                switch (itemType){
                    case itemTypes.SKILL:
                        return 1;
                    case itemTypes.CERTIFICATION:
                        if (item  >= playerStats[level].SKILL_COUNT){
                            return 1;
                        }
                }
                break;
            case 4:
                switch (itemType){
                    case itemTypes.SKILL:
                        return 1;
                    case itemTypes.CERTIFICATION:
                        if (item  >= playerStats[level].SKILL_COUNT){
                            return 1;
                        }
                }
                break;
            case 5:
                switch (itemType){
                    case itemTypes.SKILL:
                        return 1;
                    case itemTypes.CERTIFICATION:
                        if (item  >= playerStats[level].SKILL_COUNT){
                            return 1;
                        }
                }
                break;
            default:
                return false;
        }

    }
}

export default new LevelService();