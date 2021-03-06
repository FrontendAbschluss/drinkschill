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

  handleScrollTo = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    // console.log(document.body)
    return (
      <div className="HeaderContainer">
        <ul className="Navbar">
          <li className="logo">
            <Link to={'/'}>DRINKS & CHILL</Link>
          </li>

          <li className="menu"> MENÜ </li>
        </ul>
        <h1 className="main_Text">Cocktails & Getränke!</h1>
        <p className="sub_Text">Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>

        <form>
          <input
            className="text_Input"
            type="text"
            value={this.state.search}
            onChange={this.handleSearch}
            placeholder={'type something'}
          ></input>
          <Link to={`/search-results/${this.state.search}`} className={'search-button'}>Search</Link>
        </form>
        <div className={"arrow-container"}>
          <button className={'arrow'} onClick={this.handleScrollTo}><img src={"/Arrows.png"} alt={"Arrow"} /></button>
        </div>


      </div>

    )

  }
}

export default Header
