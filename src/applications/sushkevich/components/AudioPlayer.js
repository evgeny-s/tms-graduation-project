import React from 'react';
import mp3 from './test.mp3';

const AudioPlayer = (props) => {
    return (
        <div className="audio-player">
            <p>Audio player</p>
            <audio controls src={mp3}>>
                {/*<source*/}
                    {/*type="audio/mp3"*/}
                    {/*src="./test.mp3"/>*/}
            </audio>
        </div>
    )
};

export default AudioPlayer;

// src="https://t4.bcbits.com/stream/6484b6d47aaf225751917803323abcba/mp3-128/375292196?p=0&ts=1555075705&t=930b3cd8d69bd6da4367c3e04dd6865194709d60&token=1555075705_e752908ced6fa445183f1a3d72764387c049971f"
