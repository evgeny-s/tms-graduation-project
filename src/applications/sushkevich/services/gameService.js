import mapItemTypesConsts from '../consts/mapItemTypes';
import config from '../db/config';

class GameService {

    isWall(map, targetY, targetX) {
        // console.log(targetY);
        // console.log(targetX);
        return (map[targetY][targetX] === mapItemTypesConsts.WALL || map[targetY][targetX] === mapItemTypesConsts.BOSS_WALL);
    };

    isVerticalBorder(map, targetY) {
        return !(map[targetY]);
    };

    isHorizontalBorder(map, targetY, targetX) {
        return !(map[targetY][targetX]);
    };

    isLeftBorder(targetX) {
        return (targetX < 0);
    }

    isRightBorder(targetX) {
        return (targetX === config.mapSize.x);
    }

    canJumpRight(targetX) {

    }

    canJump(targetX) {
        if (targetX < 0) {
            console.log('can Jump: true');
            return true;
        }
        else {
            console.log('can jump: false');
            return false;
        }
    };

    isSkill(map, targetY, targetX) {
        return (map[targetY][targetX] === mapItemTypesConsts.SKILL);
    };

    isCertificate(map, targetY, targetX) {
        return (map[targetY][targetX] === mapItemTypesConsts.CERTIFICATE);
    };

    isBoss(map, targetY, targetX) {
        return (map[targetY][targetX] === mapItemTypesConsts.BOSS);
    };

    isLevelUp(itemsGot, itemsAll) {
        return (itemsGot === itemsAll);
    };


    shouldMapScrollDown(map, viewportRows, playerY, viewportThreshold) {
        let lastViewportRow = viewportRows[viewportRows.length - 1];
        let lastMapRow = Object.keys(map).length - 1;

        return (playerY + viewportThreshold === lastViewportRow && lastMapRow !== lastViewportRow)
            ? viewportRows.map((row) => {
                return row += 1;
            })
            : false;
    }

    shouldMapScrollUp(map, viewportRows, playerY, viewportThreshold) {

        return (playerY - viewportThreshold === viewportRows[0] && viewportRows[0] !== 0)
            ? viewportRows.map((row) => {
                return row -= 1;
            })
            : false;
    }

}

export default new GameService;