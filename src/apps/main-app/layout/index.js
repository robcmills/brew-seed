import React from 'react'
import { Link } from 'react-router'
import Nav from '../nav'

// import styles from './styles.css'
const styles = {
  root: 'root',
  header: 'header',
  nav: 'nav',
  content: 'content'
}

const Layout = props => (
  <div className={styles.root}>
    <header className={styles.header}>
      <h3>layout header</h3>
    </header>
    <Nav className={styles.nav} />
    <main className={styles.content}>
      {props.children}
    </main>
  </div>
)

export default Layout
