import React from 'react';
import InputRange from "../GameSetting/InputRange";
import PropTypes from "prop-types";

const PlayGround = ({map, count, moveY, blastBomb}) => {

    let start = moveY-count > map.length-10 ? map.length-10 : moveY-count < 0 ? 0 : moveY-count,
        mapToRender = map.slice(start, start + 10);

    return (
        <section onClick={blastBomb} className="play-ground">
            {
                mapToRender.map((item, i) => (
                    <div key={i}>
                        {item.map((item, j) => (
                            <div
                                className={item ? item : null}
                                key={j}
                            >
                            </div>
                        ))}
                    </div>
                ))
            }
        </section>
    );
};

InputRange.propTypes = {
    map: PropTypes.array,
    count: PropTypes.number,
    moveY: PropTypes.number,
    blastBomb: PropTypes.func,
};

export default PlayGround;