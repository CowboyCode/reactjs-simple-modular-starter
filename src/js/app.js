import React, { Component } from 'react'
import { render } from 'react-dom'
import AppConfig from './global/AppConfig'
import AppWrapper from './global/AppWrapper'
import AppScreen from './screens/app/AppScreen'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Styles from './global/global.scss'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <AppWrapper />
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

module.export = App

render(<App />, document.getElementById('app'))
