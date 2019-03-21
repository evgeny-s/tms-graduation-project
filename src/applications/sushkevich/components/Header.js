import React from 'react';

const Header = (props) => {
    return (
        <header className="header">{props.headerMessage}</header>
    )
};

export default Header;