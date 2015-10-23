
import React from 'react'
import { Link } from 'react-router'

const Nav = React.createClass({
  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/library'>Library</Link></li>
        </ul>
      </nav>
    )
  },
})

export default Nav
