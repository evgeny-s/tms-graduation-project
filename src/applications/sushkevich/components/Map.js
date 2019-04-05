import React from 'react';
import MapItem from './MapItem';
import gameService from '../services/gameService';
import config from '../db/config';

class Map extends React.Component {

    componentWillMount() {
        document.addEventListener("keydown", this.handleArrowKey);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleArrowKey);
    }

    clearNotificationsMessage() {
        setTimeout(this.props.clearNotificationsMessage, 1500);
    }

    newMove = (targetY, targetX, moveFunction) => {
        if (this.props.playerLevel === 1 && gameService.isSkill(this.props.map, targetY, targetX)) {
            this.props.getSkill();
            this.clearNotificationsMessage();

            if (gameService.isLevelUp(this.props.skillsGot, config.skills)) {
                this.props.levelUp();
            }
        }

        if (this.props.playerLevel === 2 && gameService.isCertificate(this.props.map, targetY, targetX)) {
            this.props.getCertificate();
            this.clearNotificationsMessage();

            if (gameService.isLevelUp(this.props.certificatesGot, config.certificates)) {
                this.props.levelUp();
                this.props.breakBossWalls();
            }
        }

        if (this.props.playerLevel === 3 && gameService.isBoss(this.props.map, targetY, targetX)) {
            this.props.finishGame();
        }

        moveFunction();
    };

    tryToMove = (targetY, targetX, moveFunction) => {
        if (!gameService.isVerticalBorder(this.props.map, targetY)
            && !gameService.isWall(this.props.map, targetY, targetX)) {

            if (gameService.isLeftBorder(targetX)) {
                if (!gameService.isWall(this.props.map, targetY, config.mapSize.x - 1)) {

                    targetX = config.mapSize - 1;
                    moveFunction = this.props.jumpRight;
                } else {
                    return;
                }
            }
            else if (gameService.isRightBorder(targetX)) {
                if (!gameService.isWall(this.props.map, targetY, 0)) {

                    targetX = 0;
                    moveFunction = this.props.jumpLeft;
                } else {
                    return;
                }
            }

            !(this.props.playerLevel === 1 && gameService.isCertificate(this.props.map, targetY, targetX))
            && this.newMove(targetY, targetX, moveFunction);
        }
    };

    handleArrowKey = (event) => {
        switch (event.keyCode) {
            case 37:
                this.tryToMove(this.props.playerCoordinateY, this.props.playerCoordinateX - 1, this.props.moveLeft);
                break;

            case 39:
                this.tryToMove(this.props.playerCoordinateY, this.props.playerCoordinateX + 1, this.props.moveRight);
                break;

            case 38:
                this.tryToMove(this.props.playerCoordinateY - 1, this.props.playerCoordinateX, this.props.moveUp);

                let newScrolledUpViewport = gameService.shouldMapScrollUp(this.props.map, this.props.viewportRows, this.props.playerCoordinateY, this.props.viewportThreshold); // Рефактор
                newScrolledUpViewport && this.props.scrollMap(newScrolledUpViewport);
                break;

            case 40:
                this.tryToMove(this.props.playerCoordinateY + 1, this.props.playerCoordinateX, this.props.moveDown);

                let newScrolledDownViewport = gameService.shouldMapScrollDown(this.props.map, this.props.viewportRows, this.props.playerCoordinateY, this.props.viewportThreshold);
                newScrolledDownViewport && this.props.scrollMap(newScrolledDownViewport);
                break;
        }
    };

    render() {
        return (
            <div className="map">
                {
                    this.props.viewportRows.map((rowId) => {
                        return (
                            <div key={rowId} className={`map-row row-${rowId}`}>
                                {
                                    Object.keys(this.props.map[rowId]).map((col, i) => {
                                        return <MapItem
                                            key={`${rowId}-${i}`}
                                            type={this.props.map[rowId][col]}
                                            id={`${rowId}:${col}`}/>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Map;
