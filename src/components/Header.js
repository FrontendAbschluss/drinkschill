import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
  state = {
    search: '',
  }
  handleSearch = e => {
    this.setState({ search: e.target.value })
  }
  render() {
    return (
      <div className="HeaderContainer">
        <ul>
          <li>
            <Link to={'/'}>DRINKS & CHILL</Link>
          </li>

          <li> MENÜ </li>
        </ul>
        <h1>Cocktails & Getränke!</h1>
        <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>

        <form>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleSearch}
          ></input>
        </form>
        {/* Searchfield Button onClick value{' '} */}
        <Link to={`/search-results/${this.state.search}`}>
          {/* to search results */}
        </Link>
        <img src="/Arrows.png" alt="Arrow" />
      </div>
    )
  }
}

export default Header
