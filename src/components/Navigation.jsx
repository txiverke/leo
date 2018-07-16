import React from 'react'
import { Link } from 'react-router-dom'

import { getSlug } from '../utils/helpers'

const Navigation = props => {
  const { nav } = props
  
  const List = nav.map(item => {
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
  })
  
  return (
    <nav className="app-nav">
      <ul className="app-nav-list">
      {List}
      </ul>
    </nav>
  )
}

export default Navigation