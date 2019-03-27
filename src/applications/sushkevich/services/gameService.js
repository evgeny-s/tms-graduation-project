import mapItemTypesConsts from '../consts/mapItemTypes';

class GameService {

    isSkill(map, targetY, targetX) {
        return (map[targetY][targetX] === mapItemTypesConsts.SKILL);
    }

    isNotWall(map, wallY, wallX) {
        return (map[wallY][wallX] !== mapItemTypesConsts.WALL);
    };

    isNotBorder(map, targetY, targetX) {
        return !!(map[targetY] && map[targetY][targetX]);
    }

    canMove(map, targetY, targetX) {
        return (this.isNotBorder(map, targetY, targetX) && this.isNotWall(map, targetY, targetX));
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