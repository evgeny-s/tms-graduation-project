import React from 'react';
import MapItem from './MapItem';
import gameService from '../services/gameService';
import config from '../db/config';

class Map extends React.Component {

    componentDidMount() {
        document.addEventListener("keydown", this.moveItem);
    }

    componentDidUnmout() {
        document.removeEventListener("keydown", this.moveItem);
    }

    moveItem = (event) => {
        let targetX;
        let targetY;

        switch (event.keyCode) {
            case 37:
                targetX = this.props.playerCoordinateX - 1;

                if (gameService.canMove(this.props.map, this.props.playerCoordinateY, targetX)) {
                    if (this.props.playerLevel === 1 && gameService.isSkill(this.props.map, this.props.playerCoordinateY, targetX)) {
                        this.props.getSkill();
                        gameService.isLevelUp(this.props.skillsGot, config.skills) && this.props.levelUp();
                    }

                    if (this.props.playerLevel === 2 && gameService.isCertificate(this.props.map, this.props.playerCoordinateY, targetX)) {
                        this.props.getCertificate();

                        if (gameService.isLevelUp(this.props.certificatesGot, config.certificates)) {
                            this.props.levelUp();
                            this.props.breakBossWalls();
                        }
                    }

                    if (this.props.playerLevel === 3 && gameService.isBoss(this.props.map, this.props.playerCoordinateY, targetX)) {
                        this.props.finishGame();
                    }

                    this.props.moveLeft();
                }

                break;
            case 39:
                targetX = this.props.playerCoordinateX + 1;

                if (gameService.canMove(this.props.map, this.props.playerCoordinateY, targetX)) {
                    if (this.props.playerLevel === 1 && gameService.isSkill(this.props.map, this.props.playerCoordinateY, targetX)) {
                        this.props.getSkill();
                        gameService.isLevelUp(this.props.skillsGot, config.skills) && this.props.levelUp();
                    }

                    if (this.props.playerLevel === 2 && gameService.isCertificate(this.props.map, this.props.playerCoordinateY, targetX)) {
                        this.props.getCertificate();

                        if (gameService.isLevelUp(this.props.certificatesGot, config.certificates)) {
                            this.props.levelUp();
                            this.props.breakBossWalls();
                        }
                    }

                    if (this.props.playerLevel === 3 && gameService.isBoss(this.props.map, this.props.playerCoordinateY, targetX)) {
                        this.props.finishGame();
                    }

                    this.props.moveRight();
                }

                break;
            case 38:
                targetY = this.props.playerCoordinateY - 1;

                if (gameService.canMove(this.props.map, targetY, this.props.playerCoordinateX)) {
                    if (this.props.playerLevel === 1 && gameService.isSkill(this.props.map, targetY, this.props.playerCoordinateX)) {
                        this.props.getSkill();
                        gameService.isLevelUp(this.props.skillsGot, config.skills) && this.props.levelUp();
                    }

                    if (this.props.playerLevel === 2 && gameService.isCertificate(this.props.map, targetY, this.props.playerCoordinateX)) {
                        this.props.getCertificate();

                        if (gameService.isLevelUp(this.props.certificatesGot, config.certificates)) {
                            this.props.levelUp();
                            this.props.breakBossWalls();
                        }
                    }

                    if (this.props.playerLevel === 3 && gameService.isBoss(this.props.map, targetY, this.props.playerCoordinateX)) {
                        this.props.finishGame();
                    }

                    this.props.moveUp();

                    let newViewportRows = gameService.shouldMapScrollUp(this.props.map, this.props.viewportRows, this.props.playerCoordinateY, this.props.viewportThreshold);
                    newViewportRows && this.props.scrollMap(newViewportRows);
                }

                break;
            case 40:
                targetY = this.props.playerCoordinateY + 1;

                if (gameService.canMove(this.props.map, targetY, this.props.playerCoordinateX)) {
                    if (this.props.playerLevel === 1 && gameService.isSkill(this.props.map, targetY, this.props.playerCoordinateX)) {
                        this.props.getSkill();
                        gameService.isLevelUp(this.props.skillsGot, config.skills) && this.props.levelUp();
                    }

                    if (this.props.playerLevel === 2 && gameService.isCertificate(this.props.map, targetY, this.props.playerCoordinateX)) {
                        this.props.getCertificate();

                        if (gameService.isLevelUp(this.props.certificatesGot, config.certificates)) {
                            this.props.levelUp();
                            this.props.breakBossWalls();
                        }
                    }

                    if (this.props.playerLevel === 3 && gameService.isBoss(this.props.map, targetY, this.props.playerCoordinateX)) {
                        this.props.finishGame();
                    }

                    this.props.moveDown();

                    let newViewportRows = gameService.shouldMapScrollDown(this.props.map, this.props.viewportRows, this.props.playerCoordinateY, this.props.viewportThreshold);
                    newViewportRows && this.props.scrollMap(newViewportRows);
                }

                break;
        }
    };

    render() {
        return (
            <div className="map" tabIndex="0">
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
