import React from 'react';
import logo from '../img/logo.svg'


 // Logo
class Logo extends React.Component {
    render() {
        return <div className="logo">
            <div><img style={{ width: "70%" }} src={"logo"} alt="Cocktail" /></div>
        </div>;
    }
}

export default Logo;