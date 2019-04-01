import React from 'react';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-text">
                {props.headerMessage}
            </div>
        </header>
    )
};

export default Header;