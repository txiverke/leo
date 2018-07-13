import React from 'react'
import Helmet from 'react-helmet'

import Routes from './Routes'

import './css/App.css'
import { getDictionary } from './utils/dictionary'

const DIC = getDictionary()

const App = () => 
  <section className="app-root">
    <Helmet titleTemplate={`%s | ${DIC.NAME} - ${DIC.DESCRIPTION}`} defaultTitle={`${DIC.NAME} - ${DIC.DESCRIPTION}`} >
      {/*<link rel="canonical" href="http://leo-leo.com" />*/}
      <meta name="description" content={DIC.DESCRIPTION}  />
    </Helmet>
    
    <Routes DIC={DIC} />
  </section>


export default App;
