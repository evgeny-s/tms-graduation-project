import React from 'react';

class AudioPlayer extends React.Component {
    render() {
        return (
            <div className="audio-player">
                <audio>
                    {/*<source*/}
                    {/*src="https://t4.bcbits.com/stream/637c1da528cf9126e8eb132a48b06e0f/mp3-128/2031911472?p=0&ts=1554224148&t=51a2d6e36378aa00d8caf6a4b1464aa5ef06d54d&token=1554224148_5d825683c03211ad3dab580b8992817f62de0507"*/}
                    {/*type="audio/mp3"/>*/}
                    <source
                        src="./test.mp3"
                        type="audio/mp3"/>
                </audio>
                <button onClick={play}>Sound On</button>
            </div>
        )
    }
}