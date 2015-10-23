import React from 'react'
import { Link } from 'react-router'

// import styles from './styles.css'
const styles = {
  root: 'root',
  header: 'header',
  content: 'content'
}

const Layout = props => (
  <div className={styles.root}>
    <header className={styles.header}>
      <h3>layout header</h3>
      <ul>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/library'>Library</Link></li>
      </ul>
    </header>
    <div className={styles.content}>
      {props.children}
    </div>
  </div>
)

export default Layout
