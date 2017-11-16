import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class ExamplesScreen extends Component {
  render() {
    return (
      <div className="examplesScreen">
        <div className="content-wrapper">
          <Card className="contentItem">
            <CardHeader title="Without Avatar" subtitle="Subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat
              volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>

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

export default ExamplesScreen
