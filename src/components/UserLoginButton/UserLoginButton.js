import React from 'react'
import { connect } from 'react-redux'

import { userLogin, userLogout } from '../../actions/userActions' 

class UserLoginButton extends React.Component {
    userLogin(e) {
        this.props.dispatch(userLogin())
    }
    
    userLogout(e) {
        this.props.dispatch(userLogout())
    }

    render() {
        if ( this.props.name === null ) {
            return (
                <div className="user-login-button">
                    <button onClick={this.userLogin.bind(this)}>Login with Google</button>
                </div>
            )
        }
        return (
            <div className="user--login--pseudo">
                Hello, {this.props.name}
                <button onClick={this.userLogout.bind(this)}>Logout</button>
            </div>
        );
    }
}

UserLoginButton = connect((store) => {
    return {
        name: ( store.user.user ) ? store.user.user.name : null
    }
})(UserLoginButton)

export default UserLoginButton;