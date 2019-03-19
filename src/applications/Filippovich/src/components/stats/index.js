import React from 'react';
import './stats.css'

function Stats() {
    return (
        <div className="user-stats col-3">
            <p>Player Stats:</p>
            <p>Level:</p>
            <p>Experience:</p>
            <p>Attack:</p>
            <p>Certifications:</p>
            <p>Skills:</p>
            <button>Sound On:</button>
        </div>
    );
}

export default Stats;