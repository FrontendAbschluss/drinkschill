import React from 'react';

//sfc
const Kategorie = () => {
    return ( <div>

    </div> );
}
 
export default Kategorie;

//cc
class Kategorie extends React.Component {
    render() { 
        return <div></div>;
    }
}
 
export default Kategorie;

//ccc
class Kategorie extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Kategorie;