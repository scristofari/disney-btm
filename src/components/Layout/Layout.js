import React from 'react'
import { connect } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import Home from '../Home/Home'
import About from '../About/About'
import Header from '../Header/Header'

const routes = [{
    path: '/',
    component: Home,
},        
{ 
    path: '/about',
    component: About 
}];

class Layout extends React.Component {
    render() {
      return (
        <div className="layout">
            <Header />
            <Router history={browserHistory} routes={routes}/>
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