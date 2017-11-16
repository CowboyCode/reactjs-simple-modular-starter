import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const CircularLoader = () => (
  <div className="pageLoader">
    <CircularProgress size={80} thickness={5} />
  </div>
)

export default CircularLoader
