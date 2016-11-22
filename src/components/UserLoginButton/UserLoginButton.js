import React from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../../actions/userActions' 

class UserLoginButton extends React.Component {
    componentWillMount() {
        //this.props.dispatch()
    }

    userLog(e) {
        this.props.dispatch(fetchUser())
    }

    render() {
      return (
        <div className="user-login-button">
            <button onClick={this.userLog.bind(this)}>Login with {this.props.name}</button>
        </div>
    );
  }
}

UserLoginButton = connect((store) => {
    return {
        name: store.user.user.name
    }
})(UserLoginButton)

export default UserLoginButton;