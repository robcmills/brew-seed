import React from 'react'
import { Router as ReactRouter, Route, IndexRoute } from 'react-router'

import history from './history'
import Layout from './layout'
import HomePage from './pages/home-page'
import SearchPage from './pages/search-page'
import LibraryPage from './pages/library-page'

const Router = React.createClass({
  render() {
    return (
      <ReactRouter history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HomePage} />
          <Route path ="search" component={SearchPage} />
          <Route path="library" component={LibraryPage} />
        </Route>
      </ReactRouter>
    )
  },
})

export default Router
