import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

const el = document.getElementById('root')
const wrapApp = AppComponent => <Router><AppComponent /></Router>

ReactDOM.render(wrapApp(App), el)