import React from 'react';

class Result extends React.Component {

    updateHighscore() {
        if (this.props.score < this.props.highscore) {
            this.props.recordHighscore();
            return true;
        }

        else {
            return false;
        }
    }

    render() {
        return (
            <div className="result-container">
                <div className="result-block">
                    <div className="result-text">
                        <p>Congratulations!</p>
                        <p>Your score is <span>{this.props.score}</span> steps.</p>
                        {this.updateHighscore() && <p>This is a new highscore!</p>}
                    </div>
                    <button onClick={this.props.test}>Try again</button>
                </div>
            </div>
        )
    }
}

export default Result;