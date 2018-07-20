import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'

const Landing = props => {
  const { DIC } = props
  
  return (
    <div className="app-section">
      <Helmet 
        title={DIC.DESCRIPTION} 
        meta={[
          { name:"description", content: `${DIC.DESCRIPTION}` },
          { property: "og:title", content: `${DIC.DESCRIPTION}` }
        ]}
      />
      <Header DIC={DIC} />
    </div>
  )
}
  
export default Landing