import React from 'react'
import { connect } from 'react-redux' 
import { Router, Route, browserHistory } from 'react-router'

import Home from '../Home/Home'
import About from '../About/About'
import Header from '../Header/Header'

@connect((store) => {
    return {
        name: "Sylvain"
    }
})
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

export default Layout;