import React from 'react'
import { connect } from 'react-redux'

import { Router, browserHistory } from 'react-router'

import { userInit } from '../../actions/userActions'
import { routes } from '../../routing' 

import Header from '../Header/Header'

class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(userInit())
    }

    render() {
        if ( this.props.initialized ) {
            return (
                <div className="layout">
                    <Header />
                    <Router history={browserHistory} routes={routes}/>
                </div>
            )
        }
        return (
            <div className="layout">
                INIT
            </div>
        )
  }
}

Layout = connect((store) => {
    return {
        initialized: store.user.initialized
    }
})(Layout)

export default Layout;