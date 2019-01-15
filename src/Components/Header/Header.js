import React from 'react'
import './Header.css'
import Twitter from './twitter.png'

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <div className="NavigationDirectory">
            <img src={Twitter} />
            <li>Home</li>
            <li>Moments</li>
          </div>
          <div className="NavigationDirectory">
            <li>Search</li>
            <li>Login</li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
