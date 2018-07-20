import React from 'react'

import background from '../assets/imgs/bg.jpg'
import logo from '../assets/imgs/logo.png'

class Header extends React.PureComponent {
  state = {
    render: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({render: true}))
  }

  render() {
    const { DIC } = this.props
    const render = this.state.render ? 'app-background-render' : ''

    return (
      <header>
        <div className="app-header">
          <h1 className="tit-header">{DIC.HEADER_MAIN}</h1>
          <img src={logo} alt={DIC.HEADER_MAIN} />
          <h2 className="subtit-header">{DIC.DESCRIPTION}</h2>
        </div>
        <figure className={`app-background ${render}`}>
          <img src={background} alt="Leo, leo - Concurso de lectura en español." />
        </figure>
      </header>
    )
  }
  
}

export default Header