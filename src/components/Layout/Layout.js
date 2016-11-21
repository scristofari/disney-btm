import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import Home from '../Home/Home'
import About from '../About/About'
import Header from '../Header/Header'

class Layout extends React.Component {
  render() {
      console.log(this.props);
      return (
        <div className="layout">
            <Header />
            <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            </Router>
        </div>
    );
  }
}

Layout = connect((store) => {
    return {
        name: store.user.user.name
    }
})(Layout)

export default Layout;