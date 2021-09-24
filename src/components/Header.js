<<<<<<< HEAD
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div>
      <h1>Header</h1>
      <Link to={'/'}>To home</Link>
      Searchfield Button onClick -> value{' '}
      <Link to={'/search-results'}>to search results</Link>
    </div>
  )
}

export default Header
=======
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    state = {
        search: '',
    }
    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    }
    render() { 
        return (
            <div>
                <h1>Header</h1>
                
                <Link to={'/'}>To home</Link>
                <form>
                    <input type="text" value={this.state.search} onChange={this.handleSearch}></input>
                </form>
                Searchfield Button onClick value <Link to={`/search-results/${this.state.search}`}>to search results</Link>
            </div>
        );
    }
}
 
export default Header;
>>>>>>> be5e0038cf1ddbb744157ffffa3b99631892c5fc
