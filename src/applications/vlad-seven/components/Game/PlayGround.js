import React from 'react';
import InputRange from "../GameSetting/InputRange";
import PropTypes from "prop-types";

const PlayGround = ({map, blastBomb}) => (
    <section onClick={blastBomb} className="play-ground">
        {
            map.map((item, i) => (
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

InputRange.propTypes = {
    map: PropTypes.array,
    blastBomb: PropTypes.func,
};

export default PlayGround;