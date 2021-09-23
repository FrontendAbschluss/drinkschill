import React from 'react';

class Logo extends React.Component {
    render() {
        return <div className="logo">
            <div><img style={{ width: "70%" }} src="../img/logo.svg" alt="Cocktail" /></div>
        </div>;
    }
}

export default Logo;