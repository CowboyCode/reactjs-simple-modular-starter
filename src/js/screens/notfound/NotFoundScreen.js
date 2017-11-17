import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class NotFoundScreen extends Component {
  render() {
    return (
      <div className="notFoundScreen">
        <div className="content-wrapper">
          <Card className="contentItem">
            <CardHeader title="Without Avatar" subtitle="Subtitle" />
            <CardText>Page Not Found</CardText>
          </Card>
        </div>
      </div>
    )
  }
}

export default NotFoundScreen
