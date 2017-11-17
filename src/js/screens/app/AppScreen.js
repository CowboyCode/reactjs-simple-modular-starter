import React, { Component } from 'react'
import { render } from 'react-dom'

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

class AppScreen extends Component {
  render() {
    return (
      <div className="appScreen">
        <div className="content-wrapper">
          <Paper className="contentItem half" zDepth={1}>
            <header>
              <h2>Lorem ipsum dolor sit amet</h2>
              <h4>A subtitle is nice too</h4>
            </header>
            <p>
              consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis
              quis lacus id, pellentesque lobortis odio.
            </p>
          </Paper>

          <Paper className="contentItem half" zDepth={1}>
            <header>
              <h2>Lorem ipsum dolor sit amet</h2>
              <h4>A subtitle is nice too</h4>
            </header>
            <p>
              consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis
              quis lacus id, pellentesque lobortis odio.
            </p>
          </Paper>
        </div>

        <div className="content-wrapper">
          <Paper className="contentItem" zDepth={1}>
            <header>
              <h2>Lorem ipsum dolor sit amet</h2>
              <h4>A subtitle is nice too</h4>
            </header>
            <p>
              consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis
              quis lacus id, pellentesque lobortis odio.
            </p>
          </Paper>

          <Card className="contentBar">
            <CardHeader title="Without Avatar" subtitle="Subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat
              volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>
      </div>
    )
  }
}

export default AppScreen
