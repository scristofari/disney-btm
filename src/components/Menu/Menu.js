import React from 'react';
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/menuActions'

import './Menu.css'

class Menu extends React.Component {
  toggleMenu(e) {
    this.props.dispatch(toggleMenu())
  }

  render() {
    if ( this.props.isOpen === false ) {
      return (
        <div className='Menu'>
          <div className="fa fa-bars" onClick={this.toggleMenu.bind(this)}></div>
        </div>
      );
    }
    return (
      <div className='Menu'>
        <div className="fa fa-bars" onClick={this.toggleMenu.bind(this)}></div>
        <div className="Menu--list">
          <div className="Menu--list--close fa fa-close" onClick={this.toggleMenu.bind(this)}></div>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
        </div>
        <div className="Menu--shadow" onClick={this.toggleMenu.bind(this)}></div>
      </div>
    );
  }
}

Menu = connect((store) => {
    return {
        isOpen: store.menu.isOpen
    }
})(Menu)

export default Menu;