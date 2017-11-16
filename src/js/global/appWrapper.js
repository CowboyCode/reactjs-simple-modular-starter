import React, { Component } from 'react'
import { render } from 'react-dom'

// config
import AppConfig from './AppConfig'
// combined scss file
import Styles from './global.scss'

// Material-Ui
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

// Components
import CircularLoader from '../components/CircularLoader'
import Footer from '../components/Footer'

// Screens
import AppScreen from '../screens/app/AppScreen'
import ExamplesScreen from '../screens/examples/ExamplesScreen'
import ContactScreen from '../screens/contact/ContactScreen'

const Router = {
  AppScreen: AppScreen,
  ExamplesScreen: ExamplesScreen,
  ContactScreen: ContactScreen
}

class AppWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'AppScreen',
      loader: true
    }
  }

  componentDidMount() {
    this.setState({ loader: false })
    console.log('did mount')
  }

  goToPage = (event, child) => {
    if (child.props.index && child.props.screen) {
      this.setScreenState(child.props.screen)
    }
  }

  setScreenState = screen => {
    this.setState({
      screen: screen
    })
  }

  renderTopLeftMenu = () => {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        onItemTouchTap={(event, child) => this.goToPage(event, child)}
        iconStyle={{ color: '#fff' }}
        animated={false}
        className="topMenu"
        targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}>
        <MenuItem index="0" screen="AppScreen" primaryText="Home" className="topMenuItem" />
        <MenuItem index="1" screen="ExamplesScreen" primaryText="Examples" className="topMenuItem" />
        <MenuItem index="2" screen="ContactScreen" primaryText="Contact" className="topMenuItem lastchild" />
      </IconMenu>
    )
  }

  renderPageLoader = () => {
    if (this.state.loader === true) {
      return <CircularLoader />
    } else {
      return null
    }
  }

  render() {
    let RenderScreen = Router[this.state.screen]

    return (
      <div className="site">
        <div className="app-wrapper">
          <AppBar
            className="theTopBar"
            style={{ backgroundColor: '#333' }}
            title="Title"
            iconElementLeft={this.renderTopLeftMenu()}
          />
          <div className="pageContent">
            {this.renderPageLoader()}
            <RenderScreen />
          </div>

          <Footer />
        </div>
      </div>
    )
  }
}

export default AppWrapper
