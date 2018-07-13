import React from 'react'
import Helmet from 'react-helmet'

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
    </div>
  )
}
  
export default Landing