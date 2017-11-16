import React, { Component } from 'react'
import { render } from 'react-dom'
import AppConfig from './global/AppConfig'
import AppScreen from './screens/app/AppScreen'
import Styles from './global/global.scss'

class Footer extends Component {
  render() {
    return (
      <div>
        Footer<br />
      </div>
    )
  }
}

module.export = Footer

render(<Footer />, document.getElementById('footer'))
