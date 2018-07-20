import React from 'react'
import { Link } from 'react-router-dom'

import { getSlug } from '../utils/helpers'

class Navigation extends React.Component {
  state = { 
    visible: false 
  }

  handleVisibility = () => {
    this.setState(prevState => ({ visible: !prevState.visible }))
  }
  
  render() {
    const { nav } = this.props
    const { visible } = this.state
    const icon = visible ? 'close' : 'menu'
    
    const List = <ul className={`app-nav-list ${icon}`}>
      <li className="app-nav-item btn-close">
        <button onClick={this.handleVisibility}>
          <span className="txt">CERRAR</span>
          <span className={`icon-close`}></span>
        </button>
      </li>
      {nav.map(item => {
        const label = getSlug(item.label)
        const children = item.children.length ? true : false

        return (
          <li key={label} className="app-nav-item">
            <a name={label}>{item.label.toUpperCase()}</a>
            {children && 
              <ul className={`app-subnav-list`}>
                {item.children.map(item => {
                  const link = getSlug(item)
                  return(
                    <li key={link} className="app-subnav-item">
                      <Link to={link}>{item.toUpperCase()}</Link>
                    </li>
                  )}
                )}
              </ul>
            }
          </li>
        )
      })}
    </ul>

    const ResponsiveMenu = <div className={`app-respMenu ${icon}`}>
      <button 
        className="btn-menu"
        onClick={this.handleVisibility}
      >
        <span className={`icon-menu`}></span>
      </button>
    </div>
    
    return (
      <nav className={`app-nav ${icon}`}>
        {!visible && ResponsiveMenu}
        {List}
        <div className={`app-menu-bg ${icon}`}></div>
      </nav>
    )
  }
}

export default Navigation