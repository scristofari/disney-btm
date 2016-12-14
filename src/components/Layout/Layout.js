import React from 'react'
import { routes } from '../../routing'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../../store'

import '../../../node_modules/normalize.css/normalize.css'
import '../../../node_modules/font-awesome/css/font-awesome.css'

const history = syncHistoryWithStore(browserHistory, store)

class Layout extends React.Component
{
    render() {
        return (
            <div className="layout">
                <Router history={history} routes={routes}/>
            </div>
        )
    }
}

export default Layout;